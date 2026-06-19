import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';

interface Project {
  number: string;
  category: string;
  name: string;
  tags: string[];
  bullets: string[];
  githubUrl: string;
  col1img1: string; // top-left (dashboard)
  col1img2: string; // bottom-left (code)
  col2img: string;  // right tall (viz output)
}

const projects: Project[] = [
  {
    number: '01',
    category: 'OPERATIONS',
    name: 'SUPPLY CHAIN & LOGISTICS ANALYSIS',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    bullets: [
      'Analyzed 100,000+ order records to uncover last-mile inefficiencies driving 30%+ delays in high-risk zones.',
      'Built a full EDA pipeline with 10+ stakeholder-ready visualizations on delivery times, delay heatmaps & satisfaction.'
    ],
    githubUrl: 'https://github.com/rishav-raj-01/supply-chain-analysis-Project',
    col1img1: '/p1-dash.png',
    col1img2: '/p1-code.png',
    col2img:  '/p1-viz.png',
  },
  {
    number: '02',
    category: 'FINTECH',
    name: 'BANKING CUSTOMER RISK ANALYSIS',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    bullets: [
      'Engineered a FICO-proxy credit scoring model (300–850 scale) classifying 150,000 borrower records into 5 risk tiers.',
      'Flagged a high-risk Danger Zone with 8–12× baseline default rate and delivered 6 CRO-level recommendations.'
    ],
    githubUrl: 'https://github.com/rishav-raj-01/banking-customer-risk-analysis-Project',
    col1img1: '/p2-dash.png',
    col1img2: '/p2-code.png',
    col2img:  '/p2-viz.png',
  },
  {
    number: '03',
    category: 'E-COMMERCE',
    name: 'TARGET — OPERATIONS & BUSINESS INSIGHTS',
    tags: ['Python', 'MySQL'],
    bullets: [
      'Built an end-to-end pipeline on a 7-table relational schema with 14 business-driven SQL queries.',
      'Used advanced window functions & CTEs to compute YoY growth, 6-month retention and cumulative monthly revenue.'
    ],
    githubUrl: 'https://github.com/rishav-raj-01/Target-Ecommerce-Analysis-Project',
    col1img1: '/p3-dash.png',
    col1img2: '/p3-code.png',
    col2img:  '/p3-viz.png',
  },
  {
    number: '04',
    category: 'QUICK COMMERCE',
    name: 'ZEPTO INVENTORY & SALES',
    tags: ['SQL', 'Data Cleaning', 'EDA'],
    bullets: [
      'Analyzed product inventory data to uncover pricing patterns, discount distributions, and stock availability.',
      'Performed data cleaning by resolving null values, removing invalid zero-MRP entries, and formatting pricing.',
      'Explored stock dynamics, in-stock vs out-of-stock ratios, and duplicate SKUs across product categories.'
    ],
    githubUrl: 'https://github.com/rishav-raj-01/Zepto-data-analysis-project',
    col1img1: '/mq-eda.png',
    col1img2: '/mq-python.png',
    col2img:  '/mq-tableau.png',
  },
];

const TOTAL = projects.length;
const CARD_R = 'clamp(20px, 4vw, 56px)';
const IMG_R  = 'clamp(12px, 2.5vw, 36px)';

function ProjectCard({
  project,
  index,
  containerProgress,
}: {
  project: Project;
  index: number;
  containerProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const targetScale = 1 - (TOTAL - 1 - index) * 0.035;
  const scale = useTransform(containerProgress, [index / TOTAL, 1], [1, targetScale]);
  const opacity = useTransform(containerProgress, [index / TOTAL, (index + 0.7) / TOTAL], [1, 0.85]);

  return (
    <div className="h-[115vh] sm:h-[105vh] relative">
      <motion.div
        className="sticky w-full"
        style={{ scale, opacity, top: `${index * 16 + 80}px`, transformOrigin: 'top center' }}
      >
        <div
          className="border border-[#D7E2EA]/20 p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-6"
          style={{ background: '#090909', borderRadius: CARD_R }}
        >
          {/* ── HEADER ROW ──────────────────────────────────── */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 w-full">
            <div className="flex items-start gap-4 md:gap-6 lg:gap-8 max-w-3xl">
              <span
                className="font-black leading-none select-none flex-shrink-0"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(3.5rem, 8vw, 100px)',
                  letterSpacing: '-0.04em',
                }}
              >
                {project.number}
              </span>
              <div className="flex flex-col gap-1 sm:gap-1.5 mt-1 sm:mt-2">
                <span
                  className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] font-medium"
                  style={{ color: '#38bdf8' }}
                >
                  {project.category}
                </span>
                <h3
                  className="font-bold uppercase"
                  style={{ color: '#F0F4F8', fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)' }}
                >
                  {project.name}
                </h3>
                {/* Tech tags */}
                <div className="font-mono text-[9px] sm:text-xs tracking-wider" style={{ color: '#777777' }}>
                  {project.tags.join(' • ')}
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`project-link-${index}`}
              className="px-5 py-2 sm:px-8 sm:py-3 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider rounded-full border border-[#D7E2EA]/30 hover:bg-[#D7E2EA]/10 transition-colors flex-shrink-0 md:mt-4"
              style={{ color: '#D7E2EA' }}
            >
              VIEW PROJECT
            </a>
          </div>

          {/* ── BULLET POINTS ─────────────────────────────── */}
          <div className="flex flex-col gap-2.5 sm:gap-3 pl-0 md:pl-[6.5rem] lg:pl-[8.5rem] pr-4 max-w-4xl mb-2 sm:mb-4">
            {project.bullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3">
                <span style={{ color: '#38bdf8', marginTop: '2px' }}>—</span>
                <p style={{ color: '#9BA3AF', fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)', lineHeight: 1.6 }}>
                  {bullet}
                </p>
              </div>
            ))}
          </div>

          {/* ── IMAGE GRID ───────────────────────────────── */}
          <div className="flex gap-3 md:gap-4 mt-auto">
            {/* Left 40% — 2 stacked */}
            <div className="flex flex-col gap-3 md:gap-4" style={{ flex: '0 0 40%' }}>
              <div className="overflow-hidden" style={{ borderRadius: IMG_R, height: 'clamp(100px, 12vw, 160px)' }}>
                <img
                  src={project.col1img1}
                  alt={`${project.name} dashboard`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 hue-rotate-[-80deg]"
                />
              </div>
              <div className="overflow-hidden" style={{ borderRadius: IMG_R, height: 'clamp(120px, 16vw, 240px)' }}>
                <img
                  src={project.col1img2}
                  alt={`${project.name} code`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 hue-rotate-[-80deg]"
                />
              </div>
            </div>

            {/* Right 60% — 1 tall */}
            <div
              className="overflow-hidden"
              style={{ flex: '0 0 calc(60% - 0.75rem)', borderRadius: IMG_R, minHeight: 'clamp(230px, 30vw, 420px)' }}
            >
              <img
                src={project.col2img}
                alt={`${project.name} visualization`}
                loading="lazy"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 hue-rotate-[-80deg]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
      style={{ background: '#0C0C0C', borderRadius: '40px 40px 0 0', marginTop: '-2rem' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            containerProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
