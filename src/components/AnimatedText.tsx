import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function AnimatedChar({
  char,
  i,
  total,
  progress,
}: {
  char: string;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, [i / total, (i + 1) / total], [0.15, 1]);
  return (
    <span className="relative inline-block" aria-hidden="true">
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });
  const tokens = text.split(/([ \n])/);
  let globalIndex = 0;
  const totalChars = text.length;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {tokens.map((token, wordIdx) => {
        if (!token) return null;
        if (token === '\n') {
          globalIndex++;
          return <br key={wordIdx} />;
        }
        if (token === ' ') {
          globalIndex++;
          return <span key={wordIdx}> </span>;
        }

        const chars = token.split('');
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {chars.map((char, charIdx) => {
              const i = globalIndex++;
              return (
                <AnimatedChar
                  key={charIdx}
                  char={char}
                  i={i}
                  total={totalChars}
                  progress={scrollYProgress}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
}
