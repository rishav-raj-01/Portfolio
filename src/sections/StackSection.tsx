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
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Tech Stack
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {categories.map((cat, i) => (
          <FadeIn key={cat.name} delay={0.1 * i} y={20}>
            <div className="flex flex-col md:flex-row md:items-start border-b py-8 md:py-10 gap-4 md:gap-10" style={{ borderColor: 'rgba(215,226,234,0.1)' }}>
              <div className="w-full md:w-1/3 pt-1">
                <h3 className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em]" style={{ color: '#777777' }}>
                  {cat.name}
                </h3>
              </div>
              <div className="w-full md:w-2/3 flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-black border-2 border-white rounded-lg text-white px-5 py-2 text-sm sm:text-base font-medium tracking-wide shadow-sm hover:-translate-y-1 hover:brightness-110 transition-all cursor-default"
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
