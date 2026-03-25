import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedCardProps {
  icon?: string;
  title: string;
  returns: string;
  duration: string;
  backgroundImage: string;
}

export default function AnimatedCard({
  icon,
  title,
  returns,
  duration,
  backgroundImage,
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.35, 0.1]);
  const shadowY = useTransform(scrollYProgress, [0, 0.5, 1], [8, 24, 8]);
  const shadowBlur = useTransform(scrollYProgress, [0, 0.5, 1], [16, 48, 16]);

  return (
    <div ref={ref} style={{ perspective: '1000px' }}>
      <motion.div
        style={{
          rotateZ: rotate,
          scale,
          boxShadow: useTransform(
            [shadowOpacity, shadowY, shadowBlur],
            ([opacity, y, blur]) =>
              `0px ${y}px ${blur}px rgba(0, 0, 0, ${opacity})`
          ),
          width: '420px',
          maxWidth: '90vw',
          aspectRatio: '4 / 3',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#f5f0e8',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '32px',
          cursor: 'default',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {icon && (
            <span style={{ fontSize: '28px' }} role="img" aria-label={title}>
              {icon}
            </span>
          )}
          <span
            style={{
              fontFamily: "'Inter', serif",
              fontSize: '22px',
              fontWeight: 600,
              color: '#1a2744',
            }}
          >
            {title}
          </span>
        </div>

        <div>
          <div
            style={{
              fontFamily: "'Inter', serif",
              fontSize: '28px',
              fontWeight: 500,
              color: '#2d3a4a',
              lineHeight: 1.3,
            }}
          >
            {returns}
          </div>
          <div
            style={{
              fontFamily: "'Inter', serif",
              fontSize: '28px',
              fontWeight: 500,
              color: '#2d3a4a',
              lineHeight: 1.3,
            }}
          >
            {duration}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
