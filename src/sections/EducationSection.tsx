import FadeIn from '../components/FadeIn';

const educations = [
  {
    degree: 'B.Tech Biotechnology',
    institution: 'BIT Mesra, Ranchi',
    period: 'Sep 2023 – Present',
    description: 'Learning data analysis, biotechnology, and exploring the intersection of data and sciences.'
  }
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="px-5 sm:px-8 md:px-10 pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-64 md:pb-32 relative z-20"
      style={{ background: '#0C0C0C' }}
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 140px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col gap-10 md:gap-12">
        {educations.map((edu, index) => (
          <FadeIn key={index} delay={0.2 + index * 0.1} y={20}>
            <div 
              className="flex flex-col md:flex-row justify-between border-b pb-8" 
              style={{ borderColor: 'rgba(215,226,234,0.1)' }}
            >
              <div className="flex flex-col mb-4 md:mb-0 md:w-1/2 md:pr-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#D7E2EA' }}>
                  {edu.institution}
                </h3>
                <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#777777' }}>
                  {edu.period}
                </span>
              </div>
              <div className="flex flex-col md:w-1/2">
                <span className="text-sm font-medium uppercase tracking-wider mb-3" style={{ color: '#0ea5e9' }}>
                  {edu.degree}
                </span>
                {edu.description && (
                  <p className="text-sm font-light leading-relaxed" style={{ color: '#D7E2EA', opacity: 0.7 }}>
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
