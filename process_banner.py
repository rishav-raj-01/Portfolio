import sys
from PIL import Image
import rembg
import numpy as np

def process_images():
    emoji_path = "/Users/rishavraj/Downloads/Rishav_emoji.png"
    banner_path = "/Users/rishavraj/Desktop/certificate/LinkedIn Banner.png"
    output_path = "/Users/rishavraj/Desktop/certificate/LinkedIn_Banner_with_emoji.png"

    print("Loading emoji...")
    with open(emoji_path, "rb") as f:
        emoji_bytes = f.read()
    
    print("Removing background...")
    result_bytes = rembg.remove(emoji_bytes)
    
    import io
    emoji_img = Image.open(io.BytesIO(result_bytes)).convert("RGBA")
    
    # Clean up alpha channel artifacts and crop to bounding box
    np_img = np.array(emoji_img)
    alpha = np_img[:, :, 3]
    # mask out low alpha
    mask = alpha > 50
    
    rows = np.any(mask, axis=1)
    cols = np.any(mask, axis=0)
    
    if not np.any(rows) or not np.any(cols):
        print("Empty image after background removal")
        sys.exit(1)
        
    rmin, rmax = np.where(rows)[0][[0, -1]]
    cmin, cmax = np.where(cols)[0][[0, -1]]
    
    emoji_cropped = emoji_img.crop((cmin, rmin, cmax, rmax))
    
    # "use the face part only"
    # The bounding box width is roughly the width of the face/beanie.
    # The face ends around the beard. We will make a tight square crop.
    # Since the width of the head is W, the height from top to beard is also roughly W.
    # We will crop exactly to a square of size WxW.
    w = emoji_cropped.width
    h = emoji_cropped.height
    
    # The user wants an even tighter crop, "use the face part only"
    crop_h = int(w * 0.95) # Crop just below the beard
    if crop_h > h:
        crop_h = h
    
    # we can also crop a little bit from the sides to make it a perfect tight face?
    # Actually the background removal already cropped to the bounding box, so sides are tight.
    emoji_face = emoji_cropped.crop((0, 0, w, crop_h))
    
    # "make it little tilted like apple emoji"
    # Tilt it by 15 degrees counter-clockwise (or -15 for clockwise, 12 is nice)
    emoji_tilted = emoji_face.rotate(-12, expand=True, resample=Image.Resampling.BICUBIC)
    
    print(f"Tilted face size: {emoji_tilted.size}")
    
    # Load banner
    print("Loading banner...")
    banner = Image.open(banner_path).convert("RGBA")
    
    # Text position in banner is roughly x=985 to 1525, y=157 to 231
    text_start_x = 985
    text_center_y = (157 + 231) // 2
    
    # Resize emoji
    # Text height is ~74. Make the emoji around 160 pixels tall to stand out
    target_height = 160
    aspect_ratio = emoji_tilted.width / emoji_tilted.height
    target_width = int(target_height * aspect_ratio)
    
    emoji_resized = emoji_tilted.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    # Calculate position: "just left to rishav"
    gap = 20
    x_pos = text_start_x - target_width - gap
    y_pos = text_center_y - target_height // 2
    
    # Paste emoji onto banner
    banner.paste(emoji_resized, (x_pos, y_pos), emoji_resized)
    
    print(f"Saving to {output_path}...")
    banner.save(output_path, "PNG")
    print("Done!")

if __name__ == "__main__":
    process_images()
