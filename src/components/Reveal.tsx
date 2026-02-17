"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
  rootMargin?: string;
};

export default function Reveal({
  children,
  className,
  delayMs = 0,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setShow(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShow(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [reduceMotion, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={
        "will-change-transform transition-all duration-700 ease-out " +
        (show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6") +
        (className ? ` ${className}` : "")
      }
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
