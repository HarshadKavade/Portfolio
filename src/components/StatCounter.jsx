import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function StatCounter({ value, precision = 0, prefix = "", suffix = "", duration = 1.6 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const startValue = 0;
    const targetValue = Number(value);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Ease-out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = startValue + (targetValue - startValue) * easeProgress;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(targetValue);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums font-bold tracking-tight">
      {prefix}
      {displayValue.toFixed(precision)}
      {suffix}
    </span>
  );
}
