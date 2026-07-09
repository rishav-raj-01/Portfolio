import { motion, useScroll, useTransform } from 'framer-motion';


const navLinks = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

// Smooth scroll helper for navbar links
function scrollTo(id: string) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
}

/**
 * HeroSection Component
 * Represents the main landing area of the portfolio. 
 * Includes the background video, navbar, and primary introductory text.
 */
export default function HeroSection() {
  const { scrollY } = useScroll();
  
  // Parallax the video downwards slightly as the user scrolls to create a feeling of depth
  const videoY = useTransform(scrollY, [0, 800], [0, 350]); 

  return (
    <section 
      id="hero" 
      className="h-screen flex flex-col relative"
      style={{ background: 'transparent', minHeight: 'max(100vh, 500px)' }}
    >
      {/* BACKGROUND VIDEO */}
      <motion.div 
        className="absolute top-0 left-0 w-full z-0 pointer-events-none"
        style={{ y: videoY, height: '165vh' }}
      >
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="w-full h-full object-cover opacity-60"
        />
        
        {/* Gradient overlay to ensure text contrast and blend with next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/30 via-transparent to-[#0C0C0C]" />
      </motion.div>

      <div 
        className="relative z-10 flex flex-col h-full w-full"
      >
        {/* NAVBAR */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 px-4 sm:px-6 md:px-10 py-6 sm:py-8 flex-shrink-0 w-full overflow-hidden"
        >
          <div className="flex gap-4 sm:gap-6 items-center flex-shrink-0">
              <a href="https://github.com/rishav-raj-01" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/rishav-raj-7a6544362/" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rishavraj0217@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              <a href="https://www.hackerrank.com/profile/rishavraj0217" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.986 0L0 6.892v10.196l11.986 6.912 12.014-6.912V6.892L11.986 0zm-1.1 5.37h2.185v4.545h4.155V5.37h2.184v13.26h-2.184v-4.567H13.07v4.566h-2.185V5.37zM4.693 8.1l2.095-1.21 2.093 1.21v2.42l-2.093 1.21-2.095-1.21V8.1zm10.428 5.37h2.185v4.545h4.155v-4.544h2.184v13.26h-2.184v-4.567h-4.155v4.566h-2.185V13.47zM4.693 13.47l2.095-1.21 2.093 1.21v2.42l-2.093 1.21-2.095-1.21v-2.42z"/></svg>
              </a>
            </div>

            <div className="flex gap-2 min-[380px]:gap-3 sm:gap-6 md:gap-10">
              {navLinks.map((link) => (
                <button
                  key={link}
                  id={`nav-${link.toLowerCase()}`}
                  onClick={() => scrollTo(link)}
                  className="text-[9px] min-[380px]:text-[10px] sm:text-sm md:text-base font-bold uppercase tracking-widest
                    transition-opacity duration-200 hover:opacity-70 cursor-pointer bg-transparent border-none"
                  style={{ color: '#D7E2EA' }}
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.nav>

        {/* HERO HEADING */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
          >
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none
                whitespace-nowrap w-full text-center
                text-[9vw] sm:text-[10vw] md:text-[11vw] lg:text-[12vw]
                mt-6 sm:mt-4 md:-mt-5"
            >
              Hi, i&apos;m Rishav
            </h1>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0 px-4 sm:px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="font-light uppercase tracking-wide leading-snug max-w-[280px] md:max-w-[260px] text-center md:text-left"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
              a data analyst driven by crafting striking and unforgettable insights from data
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.8, ease: "easeOut" }}
          >
            <button
              className="contact-pill px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base uppercase tracking-widest"
              onClick={() => scrollTo('Contact')}
            >
              CONTACT ME
            </button>
          </motion.div>
        </div>
      </div>

      {/* SCROLL HINT */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <div className="w-px h-7 bg-gradient-to-b from-transparent to-[#D7E2EA]/40 scroll-dot" />
      </motion.div>
    </section>
  );
}
