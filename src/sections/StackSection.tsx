import FadeIn from '../components/FadeIn';

const categories = [
  {
    name: 'PROGRAMMING & QUERY',
    skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'MySQL', 'PostgreSQL'],
  },
  {
    name: 'DATA ANALYSIS',
    skills: ['EDA', 'Data Cleaning', 'Data Wrangling', 'Feature Engineering'],
  },
  {
    name: 'VISUALIZATION',
    skills: ['Matplotlib', 'Seaborn', 'Tableau', 'Power BI'],
  },
  {
    name: 'BUSINESS INTELLIGENCE',
    skills: ['KPI Tracking', 'Dashboards', 'Storytelling', 'Insight Generation'],
  },
  {
    name: 'TOOLS',
    skills: ['Jupyter', 'Git', 'GitHub', 'Excel'],
  },
];

export default function StackSection() {
  return (
    <section
      id="skills"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="font-black uppercase mb-16 sm:mb-20"
          style={{ 
            color: '#D7E2EA', 
            opacity: 0.6,
            fontSize: 'clamp(4rem, 15vw, 220px)', 
            lineHeight: 0.8, 
            letterSpacing: '-0.02em',
            marginLeft: '-1vw'
          }}
        >
          STACK
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl">
        {categories.map((cat, i) => (
          <FadeIn key={cat.name} delay={0.1 * i} y={20}>
            <div
              className="p-6 sm:p-8 md:p-10 flex flex-col gap-6 h-full"
              style={{
                border: '1px solid rgba(215, 226, 234, 0.1)',
                borderRadius: '24px',
                background: 'rgba(215, 226, 234, 0.02)',
              }}
            >
              <h3
                className="font-bold uppercase tracking-widest text-xs sm:text-sm"
                style={{ color: '#D7E2EA', opacity: 0.9 }}
              >
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                    style={{
                      border: '1px solid rgba(215, 226, 234, 0.15)',
                      color: '#D7E2EA',
                      opacity: 0.8,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
