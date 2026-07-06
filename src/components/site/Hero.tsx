import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, Sparkles, PhoneCall, MessageSquare } from "lucide-react";
import logoAsset from "@/assets/krenixa-logo.png.asset.json";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, (v) => v * 20);
  const ty = useTransform(sy, (v) => v * 20);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) - 0.5);
      my.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
        <div className="absolute inset-0 grid-bg opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <motion.div
          style={{ x: tx, y: ty }}
          className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/25 blur-[120px]"
        />
        <motion.div
          style={{ x: useTransform(sx, (v) => v * -25), y: useTransform(sy, (v) => v * -25) }}
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple/25 blur-[120px]"
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-1.5 text-xs font-medium backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan" />
            <span className="text-muted-foreground">AI Voice Assistants</span>
            <span className="text-border">•</span>
            <span className="text-muted-foreground">AI Chatbots</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="font-display text-[2.75rem] font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            {["We", "build", "AI", "employees", "for", "businesses."].map((word, i) => (
              <motion.span
                key={i}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`mr-3 inline-block ${
                  word === "AI" || word === "employees"
                    ? "text-gradient"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Automate customer conversations with multilingual AI Voice Assistants and AI Chatbots that answer calls, qualify leads, schedule appointments, support customers 24/7, and integrate seamlessly into your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#book"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand animate-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50"
            >
              Book a Free AI Discovery Call
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-foreground/5 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-foreground/10"
            >
              Explore AI Solutions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live 24/7</div>
            <div>Multilingual</div>
            <div>Enterprise-ready</div>
            <div>Fast deployment</div>
          </motion.div>
        </div>

        {/* Right visual */}
        <HeroVisual tx={tx} ty={ty} />
      </div>
    </section>
  );
}

function HeroVisual({ tx, ty }: { tx: any; ty: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative mx-auto aspect-square w-full max-w-lg"
    >
      {/* rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-primary/30"
            style={{
              width: `${60 + i * 20}%`,
              height: `${60 + i * 20}%`,
              animation: `pulse-ring 3s ${i * 0.6}s ease-out infinite`,
            }}
          />
        ))}
      </div>

      {/* orbiting dots */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_20px_var(--color-cyan)]" />
        <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-purple shadow-[0_0_20px_var(--color-purple)]" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4"
      >
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_16px_var(--color-primary)]" />
        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_16px_var(--color-cyan)]" />
      </motion.div>

      {/* center logo */}
      <motion.div
        style={{ x: tx, y: ty }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="glass relative flex h-40 w-40 items-center justify-center rounded-3xl">
          <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
          <img src={logoAsset.url} alt="Krenixa" className="relative h-24 w-24" />
        </div>
      </motion.div>

      {/* floating cards */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute left-0 top-8 flex items-center gap-3 rounded-2xl px-4 py-3"
      >
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/20 text-primary">
          <PhoneCall className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">AI Voice</div>
          <div className="text-sm font-semibold">Incoming call…</div>
        </div>
        <VoiceWave />
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute bottom-6 right-0 flex items-center gap-3 rounded-2xl px-4 py-3"
      >
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-cyan/20 text-cyan">
          <MessageSquare className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">AI Chat</div>
          <div className="text-sm font-semibold">Lead qualified ✓</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="glass absolute -bottom-4 left-10 rounded-2xl px-3 py-2 text-xs"
      >
        <span className="font-semibold text-purple">+42%</span>{" "}
        <span className="text-muted-foreground">conversion</span>
      </motion.div>
    </motion.div>
  );
}

function VoiceWave() {
  return (
    <div className="ml-2 flex items-end gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className="block w-0.5 origin-bottom rounded-full bg-gradient-brand"
          style={{
            height: 16,
            animation: `wave 1s ${i * 0.12}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
