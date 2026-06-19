import FadeIn from '../components/FadeIn';
import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    name: 'DATA ANALYSIS & EDA',
    description: 'Exploring datasets end-to-end - cleaning, wrangling, and surfacing hidden patterns across 100,000+ records to find what actually moves the needle.',
  },
  {
    number: '02',
    name: 'SQL & DATABASE WORK',
    description: 'Writing performant MySQL / PostgreSQL queries - window functions, CTEs, joins on multi-table schemas to deliver YoY growth, retention, and revenue insights.',
  },
  {
    number: '03',
    name: 'DASHBOARDS & VISUALIZATION',
    description: 'Building stakeholder-ready visualizations with Matplotlib, Seaborn, Tableau and Power BI - turning numbers into stories executives can act on.',
  },
  {
    number: '04',
    name: 'RISK & CUSTOMER ANALYTICS',
    description: 'Designing scoring models, segmentation, and risk tier profiling - translating raw signals into clear policy recommendations and revenue-at-risk reductions.',
  },
  {
    number: '05',
    name: 'INSIGHT STORYTELLING',
    description: 'Turning analysis into narrative - slides, decks, and reports that communicate the why behind the what to non-technical stakeholders.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{
        background: '#FFFFFF',
        borderRadius: '40px 40px 0 0',
      }}
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-24"
          style={{ color: '#0C0C0C', fontSize: 'clamp(4rem, 15vw, 200px)', lineHeight: 0.8, letterSpacing: '-0.02em' }}
        >
          WHAT I DO
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((svc, i) => (
          <FadeIn key={svc.number} delay={i * 0.1} y={30}>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-16 items-start"
              style={{
                paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
                paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : 'none',
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="font-black leading-none flex-shrink-0 select-none"
                style={{
                  color: '#0C0C0C',
                  fontSize: 'clamp(5rem, 14vw, 180px)',
                  letterSpacing: '-0.04em',
                }}
              >
                {svc.number}
              </span>

              <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-6">
                <h3
                  className="font-bold uppercase"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}
                >
                  {svc.name}
                </h3>
                <p
                  className="font-normal leading-relaxed"
                  style={{
                    color: '#666666',
                    fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
                  }}
                >
                  {svc.description}
                </p>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
