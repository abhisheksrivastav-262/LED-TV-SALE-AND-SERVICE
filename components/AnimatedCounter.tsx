"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <div ref={ref} className="glass card-3d rounded-3xl p-6 text-center">
      <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">
        {val.toLocaleString("en-IN")}{suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-300">{label}</p>
    </div>
  );
}

export function CounterRow() {
  const stats = [
    { target: 25, suffix: "+", label: "Years Experience" },
    { target: 5000, suffix: "+", label: "TVs Repaired" },
    { target: 1000, suffix: "+", label: "Happy Customers" },
    { target: 100, suffix: "%", label: "Genuine Parts" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s) => (
        <AnimatedCounter key={s.label} {...s} />
      ))}
    </div>
  );
}
