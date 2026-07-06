import { motion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {eyebrow && (
        <div className={`mb-4 ${center ? "flex justify-center" : ""}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand animate-pulse" />
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function GlassCard({ children, className = "", index = 0 }: { children: ReactNode; className?: string; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
      whileHover={{ y: -6 }}
      className={`glass group relative overflow-hidden rounded-2xl p-6 transition ${className}`}
    >
      <div className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      {children}
    </motion.div>
  );
}

export function useMouseParallax(strength = 20) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setPos({ x: x * strength, y: y * strength });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", () => setPos({ x: 0, y: 0 }));
    return () => el.removeEventListener("mousemove", onMove);
  }, [strength]);
  return { ref, pos };
}
