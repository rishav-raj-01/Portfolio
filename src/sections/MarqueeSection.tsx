import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* All locally-generated, fully data-analytics-relevant images */
const row1Items = [
  { src: '/mq-python.png',   label: 'Python Analytics' },
  { src: '/mq-tableau.png',  label: 'Tableau Dashboard' },
  { src: '/mq-sql.png',      label: 'SQL Queries' },
  { src: '/mq-powerbi.png',  label: 'Power BI' },
  { src: '/mq-pipeline.png', label: 'ETL Pipeline' },
  { src: '/mq-seaborn.png',  label: 'Seaborn Viz' },
  { src: '/mq-eda.png',      label: 'EDA Notebook' },
  { src: '/mq-metrics.png',  label: 'KPI Metrics' },
];

const row2Items = [
  { src: '/p1-dash.png',  label: 'Supply Chain' },
  { src: '/p2-dash.png',  label: 'Credit Risk' },
  { src: '/p3-dash.png',  label: 'E-Commerce BI' },
  { src: '/p1-code.png',  label: 'Python Code' },
  { src: '/p2-viz.png',   label: 'Data Viz' },
  { src: '/p3-code.png',  label: 'SQL Code' },
  { src: '/mq-python.png', label: 'Python Analytics' },
  { src: '/mq-sql.png',   label: 'SQL Queries' },
];

// Triple-repeat so the loop is seamless
const row1 = [...row1Items, ...row1Items, ...row1Items];
const row2 = [...row2Items, ...row2Items, ...row2Items];

const CARD_W = 400;
const CARD_H = 250;

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Row 1 moves right, Row 2 moves left — driven by scroll
  const x1 = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <section
      ref={sectionRef}
      className="pt-32 pb-20 sm:pt-48 sm:pb-28 md:pt-64 md:pb-36 overflow-hidden relative z-10"
      style={{ background: 'transparent' }}
    >
      {/* Label Removed */}

      <div className="flex flex-col gap-4">
        {/* ROW 1 (scroll → right) */}
        <motion.div className="flex gap-4" style={{ x: x1, willChange: 'transform' }}>
          {row1.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-2xl overflow-hidden relative group"
              style={{ width: CARD_W, height: CARD_H }}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* Label overlay on hover */}
              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(12,12,12,0.85) 0%, transparent 60%)' }}
              >
                <span className="text-xs uppercase tracking-widest font-medium" style={{ color: '#D7E2EA' }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ROW 2 (scroll → left) */}
        <motion.div className="flex gap-4" style={{ x: x2, willChange: 'transform' }}>
          {row2.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-2xl overflow-hidden relative group"
              style={{ width: CARD_W, height: CARD_H }}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(12,12,12,0.85) 0%, transparent 60%)' }}
              >
                <span className="text-xs uppercase tracking-widest font-medium" style={{ color: '#D7E2EA' }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
