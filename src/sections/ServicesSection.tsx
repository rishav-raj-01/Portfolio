import FadeIn from '../components/FadeIn';
import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    name: 'DATA ANALYSIS & EDA',
    description: "I take messy, complex datasets and turn them into clear insights. From cleaning up 100,000+ records to spotting hidden trends, I do the heavy lifting to figure out what's really driving the business.",
  },
  {
    number: '02',
    name: 'SQL & DATABASE WORK',
    description: "I write fast, reliable SQL queries in MySQL and PostgreSQL to get the data you actually need. Whether it's tracking year-over-year growth or mapping out customer retention, I make sure the right data is pulled efficiently from complex databases.",
  },
  {
    number: '03',
    name: 'DASHBOARDS & VISUALIZATION',
    description: "I believe data should be easy to understand at a glance. I build interactive dashboards and clean charts using Tableau, Power BI, and Python, turning confusing spreadsheets into visual stories that anyone can read and act on.",
  },
  {
    number: '04',
    name: 'RISK & CUSTOMER ANALYTICS',
    description: "I build models that help identify patterns in customer behavior and potential risks before they become problems. By looking closely at the data, I provide clear recommendations that help protect revenue and guide smart business decisions.",
  },
  {
    number: '05',
    name: 'INSIGHT STORYTELLING',
    description: "Numbers don't mean much if you can't explain them. I specialize in breaking down complex analysis into plain English, creating simple, compelling presentations that help non-technical teams understand exactly what to do next.",
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
          style={{ color: '#0C0C0C', fontSize: 'clamp(2.5rem, 15vw, 200px)', lineHeight: 0.8, letterSpacing: '-0.02em' }}
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
                  fontSize: 'clamp(2.5rem, 14vw, 180px)',
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
