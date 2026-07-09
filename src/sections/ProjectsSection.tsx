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

// Shared border radii for consistency across sticky cards
const CARD_R = 'clamp(20px, 4vw, 56px)';

/**
 * MockupFrame
 * A specialized container that mimics a macOS IDE window.
 * Wraps project images to give them a "coding environment" aesthetic.
 */
const MockupFrame = ({ children, tabName }: { children: React.ReactNode, tabName: string }) => (
  <div className="flex flex-col relative border border-[#ffffff15] bg-[#0d1117] h-full w-full shadow-2xl overflow-hidden">
    {/* IDE Top Bar */}
    <div className="flex items-center px-3 h-8 sm:h-10 bg-[#161b22] border-b border-[#ffffff10] shrink-0">
      {/* macOS buttons */}
      <div className="flex gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
      </div>
      {/* IDE Tab */}
      <div className="ml-3 sm:ml-4 flex h-full items-end">
         <div className="px-3 sm:px-4 py-1 sm:py-1.5 flex items-center gap-2 bg-[#0d1117] rounded-t-md border-t border-l border-r border-[#ffffff10] text-[0.6rem] sm:text-[0.7rem] text-[#8b949e] font-mono tracking-wide">
           {tabName} <span className="ml-1 text-[#8b949e]/50 hover:text-white cursor-pointer transition-colors">x</span>
         </div>
      </div>
    </div>
    {/* Content Area */}
    <div className="flex-1 relative overflow-hidden bg-[#0d1117]">
      {children}
    </div>
  </div>
);

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
    col1img1: '/mq-powerbi.png',
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
    col2img:  '/p3-viz-target.png',
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

function ProjectCard({
  project,
  index,
  containerProgress,
}: {
  project: Project;
  index: number;
  containerProgress: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const targetScale = 1 - (TOTAL - 1 - index) * 0.035;
  const scale = useTransform(containerProgress, [index / TOTAL, 1], [1, targetScale]);

  return (
    <div className="h-[115vh] sm:h-[105vh] relative">
      <motion.div
        className="sticky w-full"
        style={{ scale, top: `${index * 16 + 40}px`, transformOrigin: 'top center' }}
      >
        <div
          className="relative border border-[#D7E2EA]/20 p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-6 overflow-hidden overflow-y-auto"
          style={{ background: '#090909', borderRadius: CARD_R, height: 'max(calc(100svh - 60px), 600px)' }}
        >
          {/* HEADER ROW */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 w-full flex-shrink-0">
            <div className="flex items-start gap-4 md:gap-6 lg:gap-8 max-w-3xl">
              <span
                className="font-black leading-none select-none flex-shrink-0"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(2.5rem, 8vw, 100px)',
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

          {/* BULLET POINTS */}
          <div className="flex flex-col gap-2.5 sm:gap-3 pl-0 md:pl-[6.5rem] lg:pl-[8.5rem] pr-4 max-w-4xl mb-2 sm:mb-4 flex-shrink-0">
            {project.bullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3">
                <span style={{ color: '#38bdf8', marginTop: '2px' }}>—</span>
                <p style={{ color: '#9BA3AF', fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)', lineHeight: 1.6 }}>
                  {bullet}
                </p>
              </div>
            ))}
          </div>

          {/* IMAGE GRID (WITH PARALLAX) */}
          <div className="grid grid-cols-2 md:grid-cols-5 md:grid-rows-2 gap-3 md:gap-4 mt-auto -mr-4 sm:-mr-6 md:-mr-8 -mb-4 sm:-mb-6 md:-mb-8 h-full md:h-auto overflow-hidden">
            
            {/* img1: Dashboard (Top Left Desktop, Full Width Mobile) */}
            <div className="col-span-2 md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-1 min-h-[140px] md:min-h-[180px]">
              <MockupFrame tabName="dashboard.tsx">
                <img
                  src={project.col1img1}
                  alt={`${project.name} dashboard`}
                  loading="lazy"
                  className="w-full h-full object-cover object-left-top hover:scale-105 transition-transform duration-700"
                />
              </MockupFrame>
            </div>

            {/* img2: Code (Bottom Left Desktop, Half Width Mobile) */}
            <div className="col-span-1 md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-1 min-h-[140px] md:min-h-[180px]">
              <MockupFrame tabName="pipeline.py">
                <img
                  src={project.col1img2}
                  alt={`${project.name} code`}
                  loading="lazy"
                  className="w-full h-full object-cover object-left-top hover:scale-105 transition-transform duration-700"
                />
              </MockupFrame>
            </div>

            {/* img3: Visualization (Right Desktop, Half Width Mobile) */}
            <div className="col-span-1 md:col-start-3 md:col-span-3 md:row-start-1 md:row-span-2 min-h-[140px] md:min-h-[272px]">
              <MockupFrame tabName="visualization.sql">
                <img
                  src={project.col2img}
                  alt={`${project.name} visualization`}
                  loading="lazy"
                  className="w-full h-full object-cover object-left-top hover:scale-105 transition-transform duration-700"
                />
              </MockupFrame>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * ProjectsSection
 * Renders a list of projects using a sticky-scroll animation.
 * The `marginTop: '-2rem'` combined with border radius ensures this section
 * seamlessly overlaps the previous section to create a rounded corner effect.
 */
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
          style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
        >
          Projects
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
