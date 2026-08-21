"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  value: string;
}

export default function Counter({ value }: CounterProps) {
  const [count, setCount] = useState<string>("0");
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const cleanValue = value.trim();
    const regex = /^([^0-9\-\+]*)([\d,]+)(.*)$/;
    const match = cleanValue.match(regex);

    if (!match) {
      setCount(cleanValue);
      return;
    }

    const prefix = match[1] || "";
    const numericStr = match[2].replace(/,/g, "");
    const suffix = match[3] || "";
    const target = parseInt(numericStr, 10);

    if (isNaN(target)) {
      setCount(cleanValue);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1600; // 1.6 seconds
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const currentVal = Math.floor(easeProgress * target);
            
            const formattedNum = target > 999 
              ? currentVal.toLocaleString('en-IN') 
              : currentVal.toString();
              
            setCount(`${prefix}${formattedNum}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(cleanValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return <span ref={elementRef}>{count}</span>;
}
