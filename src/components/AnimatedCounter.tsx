import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState<number>(0);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const counterRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    let start = 0;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Función de easing: easeOutCubic para desaceleración suave
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = easedProgress * end;

      if (progress >= 1) {
        setCount(end);
      } else {
        setCount(parseFloat(currentValue.toFixed(decimals)));
        requestAnimationFrame(animate);
      }
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [shouldAnimate, end, duration, decimals]);

  return (
    <span ref={counterRef} className="transition-all duration-300 tabular-nums">
      {typeof count === "number"
        ? count.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        : count}
    </span>
  );
};

export default AnimatedCounter;