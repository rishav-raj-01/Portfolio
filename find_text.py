import numpy as np
from PIL import Image

banner_path = "/Users/rishavraj/Desktop/certificate/LinkedIn Banner.png"
banner = Image.open(banner_path).convert("RGB")
np_img = np.array(banner)

# Find white pixels (text)
# R, G, B all > 240
mask = (np_img[:, :, 0] > 240) & (np_img[:, :, 1] > 240) & (np_img[:, :, 2] > 240)

# We want text that is on the right half to be safe
mask[:, :np_img.shape[1]//2] = False

rows = np.any(mask, axis=1)
cols = np.any(mask, axis=0)

if np.any(rows) and np.any(cols):
    rmin, rmax = np.where(rows)[0][[0, -1]]
    cmin, cmax = np.where(cols)[0][[0, -1]]
    print(f"Text bounding box: x={cmin} to {cmax}, y={rmin} to {rmax}")
else:
    print("No white text found in the right half")
