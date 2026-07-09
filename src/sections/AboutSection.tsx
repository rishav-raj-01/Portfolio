import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import FadeIn from '../components/FadeIn';

function MarkerUnderline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.95', 'end 0.6'],
  });

  return (
    <div ref={ref} className="w-full h-2 sm:h-3 mt-4 relative opacity-90">
      <svg
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <motion.path
          d="M1,5 Q25,3 50,6 T99,4"
          stroke="white"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.path
          d="M2,6 Q30,8 60,3 T98,6"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center
        px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C' }}
    >
      {/* DECORATIVE 3D IMAGES */}

      {/* Top-left: Moon (Blue one - leave as is) */}
      <FadeIn
        delay={0.1} x={-80} y={0} duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          aria-hidden="true"
          className="w-[120px] sm:w-[160px] md:w-[210px] float-anim"
        />
      </FadeIn>

      {/* Bottom-left: 3D Object (Cyan) */}
      <FadeIn
        delay={0.25} x={-80} y={0} duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          aria-hidden="true"
          className="w-[100px] sm:w-[140px] md:w-[180px] float-anim-2 filter-3d-cyan"
        />
      </FadeIn>

      {/* Top-right: Lego (Vivid Red) */}
      <FadeIn
        delay={0.15} x={80} y={0} duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          aria-hidden="true"
          className="w-[120px] sm:w-[160px] md:w-[210px] float-anim-3 filter-3d-red"
        />
      </FadeIn>

      {/* Bottom-right: 3D Group (Pink/Magenta) */}
      <FadeIn
        delay={0.3} x={80} y={0} duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          aria-hidden="true"
          className="w-[130px] sm:w-[170px] md:w-[220px] float-anim-4 filter-3d-magenta"
        />
      </FadeIn>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16 max-w-2xl">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Text + button group */}
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[760px] text-left">
            {[
              "Data tells a story. My job is to make sure the right people hear it - and act on it.",
              "I'm a data and business analyst who lives in the space where analytics meets action. I ask the uncomfortable questions, model the messy spreadsheets, build the dashboards nobody could read before, and come back to the table with answers that make leadership nod.",
              "SQL, Python, Tableau, Power BI, Excel - I know my toolkit. But what sets me apart isn't what I know. It's how I think. I approach every problem like a puzzle that has a real business cost if it stays unsolved.",
              "I'm just getting started - and that means I bring energy, adaptability, and zero bad habits to every project I touch."
            ].map((p, i) => (
              <div key={i} className="relative">
                <p
                  className="font-medium leading-relaxed"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
                >
                  {p}
                </p>
              </div>
            ))}
            <MarkerUnderline />
          </div>

          <button
            className="contact-pill px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base uppercase tracking-widest"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            CONTACT ME
          </button>
        </div>
      </div>
    </section>
  );
}
