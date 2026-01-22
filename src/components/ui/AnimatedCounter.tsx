import { useEffect, useRef, useState } from 'react';

type Props = {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

export default function AnimatedCounter({ end, duration = 1200, suffix = '', className = '' }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();
            const step = (now: number) => {
              const t = Math.min(1, (now - startTime) / duration);
              setValue(Math.round(t * end));
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className={className} aria-hidden={false}>
      {value.toLocaleString()}
      {suffix}
    </div>
  );
}
