import React, { useState, useEffect, useRef } from "react";

type KineticMetricProps = {
  value: number;
  suffix?: string;
  label: string;
  description: string;
};

export const KineticMetric: React.FC<KineticMetricProps> = ({
  value,
  suffix = "",
  label,
  description,
}) => {
  const [currentVal, setCurrentVal] = useState(0);
  const metricRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = metricRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1400;
          const startTime = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const nextVal = Math.round(easeProgress * value);
            setCurrentVal(nextVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={metricRef}
      style={{
        paddingBottom: "24px",
      }}
    >
      <div
        className="num-oversized"
        style={{
          fontSize: "clamp(2.8rem, 5.5vw, 4.4rem)",
          color: "var(--ink-primary)",
          marginBottom: "6px",
          display: "flex",
          alignItems: "baseline",
        }}
      >
        <span>{currentVal}</span>
        <span style={{ color: "var(--accent-vermilion)", fontSize: "0.65em", marginLeft: "2px" }}>
          {suffix}
        </span>
      </div>

      <div
        className="font-mono text-xs uppercase"
        style={{
          color: "var(--accent-vermilion)",
          fontWeight: 600,
          letterSpacing: "0.08em",
          marginBottom: "6px",
        }}
      >
        {label}
      </div>

      <p
        style={{
          fontSize: "0.86rem",
          lineHeight: 1.6,
          color: "var(--ink-secondary)",
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
};
