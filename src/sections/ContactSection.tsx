import FadeIn from '../components/FadeIn';

const links = [
  { label: 'Email', value: 'rishavraj0217@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rishavraj0217@gmail.com' },
  { label: 'Phone', value: '+91 9931119520', href: 'tel:+919931119520' },
  { label: 'LinkedIn', value: 'Rishav Raj', href: 'https://www.linkedin.com/in/rishav-raj-7a6544362/' },
];


export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20"
      style={{ background: '#0C0C0C' }}
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 140px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center font-light uppercase tracking-widest mb-16 sm:mb-20"
          style={{ color: '#D7E2EA', opacity: 0.4, fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}
        >
          Open to Data Analyst, BI & Analytics roles
        </p>
      </FadeIn>

      {/* Two-column grid */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Left: Links */}
        <div className="flex flex-col gap-5">
          <FadeIn delay={0.2} y={20}>
            <p
              className="text-xs uppercase tracking-widest mb-2 font-medium"
              style={{ color: '#D7E2EA', opacity: 0.4 }}
            >
              Get in touch
            </p>
          </FadeIn>
          {links.map((link, i) => (
            <FadeIn key={link.href} delay={0.2 + i * 0.07} y={20}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                id={`contact-${link.value.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
                className="group flex flex-col gap-0.5 border-b pb-4 transition-opacity hover:opacity-80"
                style={{ borderColor: 'rgba(215,226,234,0.1)' }}
              >
                {link.label && (
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ color: '#D7E2EA', opacity: 0.4 }}
                  >
                    {link.label}
                  </span>
                )}
                <span
                  className="font-medium group-hover:text-[#0ea5e9] transition-colors duration-200"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
                >
                  {link.value}
                </span>
              </a>
            </FadeIn>
          ))}

          {/* CTA button */}
          <FadeIn delay={0.55} y={20}>
            <div className="mt-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rishavraj0217@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm"
              >
                Send an Email
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right: Education & Clubs */}
        <div className="flex flex-col gap-5">
          <FadeIn delay={0.55} y={20}>
            <div
              className="border-b pb-4"
              style={{ borderColor: 'rgba(215,226,234,0.1)' }}
            >
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#D7E2EA', opacity: 0.4 }}>
                Education
              </p>
              <p style={{ color: '#D7E2EA', fontSize: 'clamp(0.85rem, 1.4vw, 1rem)' }}>
                B.Tech Biotechnology
              </p>
              <p className="text-xs mt-0.5" style={{ color: '#D7E2EA', opacity: 0.45 }}>
                BIT Mesra, Ranchi · Sep 2023 – Present
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.65} y={20}>
            <div style={{ borderColor: 'rgba(215,226,234,0.1)' }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#D7E2EA', opacity: 0.4 }}>
                Clubs
              </p>
              <p style={{ color: '#D7E2EA', fontSize: 'clamp(0.85rem, 1.4vw, 1rem)' }}>
                BIOTS Club · Sports & Adventure Club, BIT Mesra
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Huge Footer */}
      <FadeIn delay={0.75} y={30}>
        <div className="mt-20 sm:mt-32 pt-10 sm:pt-16 border-t" style={{ borderColor: 'rgba(215,226,234,0.08)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12">
            <div className="flex flex-col gap-2 md:gap-4 items-center md:items-start text-center md:text-left">
              <h2
                className="font-black uppercase leading-none tracking-tight"
                style={{ color: '#D7E2EA', fontSize: 'clamp(3rem, 8vw, 80px)' }}
              >
                RISHAV RAJ
              </h2>
              <p
                className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase"
                style={{ color: '#777777' }}
              >
                DATA ANALYST • BIT MESRA • PATNA, IN
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8 md:mt-0">
              <a href="https://github.com/rishav-raj-01" target="_blank" rel="noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:bg-[#D7E2EA]/10 transition-colors text-[#D7E2EA]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/rishav-raj-7a6544362/" target="_blank" rel="noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:bg-[#D7E2EA]/10 transition-colors text-[#D7E2EA]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rishavraj0217@gmail.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:bg-[#D7E2EA]/10 transition-colors text-[#D7E2EA]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              <a href="https://www.hackerrank.com/profile/rishavraj0217" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:bg-[#D7E2EA]/10 transition-colors text-[#D7E2EA]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.986 0L0 6.892v10.196l11.986 6.912 12.014-6.912V6.892L11.986 0zm-1.1 5.37h2.185v4.545h4.155V5.37h2.184v13.26h-2.184v-4.567H13.07v4.566h-2.185V5.37zM4.693 8.1l2.095-1.21 2.093 1.21v2.42l-2.093 1.21-2.095-1.21V8.1zm10.428 5.37h2.185v4.545h4.155v-4.544h2.184v13.26h-2.184v-4.567h-4.155v4.566h-2.185V13.47zM4.693 13.47l2.095-1.21 2.093 1.21v2.42l-2.093 1.21-2.095-1.21v-2.42z"/></svg>
              </a>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#D7E2EA]/10 mb-6 md:mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="font-mono text-[10px] sm:text-xs tracking-wider" style={{ color: '#777777' }}>
              © 2026 Rishav Raj — Built with curiosity & coffee.
            </p>
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.15em] uppercase" style={{ color: '#777777' }}>
              TURNING NUMBERS → INSIGHTS
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
