import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  PhoneCall, MessageSquare, ArrowRight, CheckCircle2, Building2, HeartPulse,
  GraduationCap, Hotel, ShoppingBag, Landmark, Plug, Zap, MessageCircle,
  Calendar, Workflow, Rocket, LifeBuoy, Languages, Users, Clock, Globe2,
  Sparkles, ShieldCheck, Bot, PlusCircle, MinusCircle, Mail, Phone, MapPin,
} from "lucide-react";
import { Section, SectionHeader, GlassCard } from "./primitives";

/* ============ SERVICES ============ */
export function Services() {
  const services = [
    {
      icon: PhoneCall,
      color: "from-primary to-cyan",
      title: "AI Voice Assistants",
      desc: "Build intelligent AI voice employees that answer calls, qualify leads, schedule appointments, support customers, and automate phone conversations naturally.",
      features: ["AI Receptionist", "AI Sales Assistant", "Customer Support", "Appointment Booking", "Lead Qualification", "Outbound Calling"],
    },
    {
      icon: MessageSquare,
      color: "from-cyan to-purple",
      title: "AI Chatbots",
      desc: "Deploy AI chat employees across your website, WhatsApp, and social media to engage visitors, answer questions, capture leads, and automate customer conversations.",
      features: ["Website Chatbot", "WhatsApp AI", "Instagram AI", "Messenger AI", "Lead Generation", "Customer Support"],
    },
  ];
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title={<>Two AI employees. <span className="text-gradient">Endless output.</span></>}
        description="Purpose-built AI workers that handle your busiest customer channels around the clock."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass group relative overflow-hidden rounded-3xl p-8 md:p-10"
          >
            <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-3xl transition group-hover:opacity-40`} />
            <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-lg`}>
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold">{s.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            <ul className="mt-6 grid grid-cols-2 gap-2.5">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" />
                  <span className="text-foreground/80">{f}</span>
                </li>
              ))}
            </ul>
            <a href="#book" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3">
              Deploy this AI employee <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============ CAPABILITIES ============ */
export function Capabilities() {
  const items = [
    { icon: Plug, label: "CRM Integration" },
    { icon: Zap, label: "API Integration" },
    { icon: MessageCircle, label: "WhatsApp Integration" },
    { icon: Calendar, label: "Calendar Integration" },
    { icon: Workflow, label: "Workflow Automation" },
    { icon: Rocket, label: "Deployment" },
    { icon: LifeBuoy, label: "Maintenance & Support" },
  ];
  return (
    <Section className="!pt-0">
      <SectionHeader
        eyebrow="Supporting capabilities"
        title={<>Plugs into <span className="text-gradient">your stack</span></>}
      />
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {items.map((it, i) => (
          <GlassCard key={it.label} index={i} className="!p-5 text-center">
            <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-foreground/5 text-primary">
              <it.icon className="h-5 w-5" />
            </div>
            <div className="mt-3 text-xs font-medium text-foreground/80">{it.label}</div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

/* ============ EMPLOYEE ABILITIES ============ */
export function EmployeeAbilities() {
  const abilities = [
    { icon: PhoneCall, title: "Answer Customer Calls", desc: "Pick up every call with a natural, human-like voice." },
    { icon: Calendar, title: "Book Appointments", desc: "Sync to your calendar and confirm in real time." },
    { icon: Users, title: "Capture Leads", desc: "Qualify prospects and push data to your CRM." },
    { icon: Bot, title: "Answer FAQs", desc: "Trained on your business to reply instantly and accurately." },
    { icon: LifeBuoy, title: "Provide Customer Support", desc: "Resolve tickets 24/7 across every channel." },
    { icon: Languages, title: "Speak Multiple Languages", desc: "Fluent conversations in 50+ languages." },
    { icon: Plug, title: "Integrate with CRM", desc: "HubSpot, Salesforce, Zoho, GoHighLevel and more." },
    { icon: Clock, title: "Work 24/7", desc: "Never sleeps. Never takes a break. Always on brand." },
  ];
  return (
    <Section id="capabilities">
      <SectionHeader
        eyebrow="Your AI employee"
        title={<>Everything a great employee does. <span className="text-gradient">Automated.</span></>}
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {abilities.map((a, i) => (
          <GlassCard key={a.title} index={i}>
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-md">
              <a.icon className="h-5 w-5" />
            </div>
            <div className="mt-5 font-semibold">{a.title}</div>
            <div className="mt-1.5 text-sm text-muted-foreground">{a.desc}</div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

/* ============ INDUSTRIES ============ */
export function Industries() {
  const industries = [
    { icon: Building2, name: "Real Estate", tag: "Qualify buyers, book viewings" },
    { icon: HeartPulse, name: "Healthcare", tag: "Appointment scheduling, patient intake" },
    { icon: GraduationCap, name: "Education", tag: "Admissions, student support" },
    { icon: Hotel, name: "Hospitality", tag: "Reservations, guest concierge" },
    { icon: ShoppingBag, name: "Retail", tag: "Product Q&A, order support" },
    { icon: Landmark, name: "Finance", tag: "Lead capture, KYC support" },
  ];
  return (
    <Section id="industries">
      <SectionHeader
        eyebrow="Industries"
        title={<>Trusted across <span className="text-gradient">verticals</span></>}
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((it, i) => (
          <GlassCard key={it.name} index={i} className="!p-7">
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground/5 text-primary transition group-hover:bg-gradient-brand group-hover:text-white">
                <it.icon className="h-6 w-6" />
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
            </div>
            <div className="mt-6 text-xl font-bold">{it.name}</div>
            <div className="mt-1 text-sm text-muted-foreground">{it.tag}</div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

/* ============ HOW IT WORKS ============ */
export function HowItWorks() {
  const steps = [
    { title: "Book a Discovery Call", desc: "Share your goals in a quick 20-minute call." },
    { title: "Our AI Employee Contacts You", desc: "Experience our technology first-hand." },
    { title: "We Understand Your Business", desc: "We map your workflows, tools and voice." },
    { title: "We Build Your AI Employee", desc: "Deployed, trained, integrated — and live." },
  ];
  return (
    <Section id="how">
      <SectionHeader
        eyebrow="How it works"
        title={<>From call to <span className="text-gradient">deployed AI</span> in days</>}
      />
      <div className="relative mt-16">
        <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary via-cyan to-purple md:block md:left-1/2" />
        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""}`}
            >
              <div className={`glass rounded-2xl p-6 md:p-7 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                <div className={`flex items-center gap-3 ${i % 2 === 1 ? "md:justify-end" : ""}`}>
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Step {i + 1}</div>
                </div>
                <div className="mt-4 text-xl font-bold">{s.title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.desc}</div>
              </div>
              {/* node */}
              <div className="pointer-events-none absolute left-6 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-brand shadow-[0_0_20px] shadow-primary md:block md:left-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============ WHY KRENIXA ============ */
export function WhyKrenixa() {
  const items = [
    { icon: Sparkles, title: "Human-like AI Conversations", desc: "Ultra-natural voice and chat that customers actually enjoy." },
    { icon: Languages, title: "Multilingual AI", desc: "Serve customers in 50+ languages out of the box." },
    { icon: ShieldCheck, title: "Enterprise Ready", desc: "Secure, scalable, and integrated with your existing stack." },
    { icon: Rocket, title: "Fast Deployment", desc: "Go from kickoff to live AI employee in days, not months." },
    { icon: Clock, title: "24/7 Availability", desc: "Zero downtime. Your AI never sleeps, never misses a lead." },
    { icon: Workflow, title: "Business Automation", desc: "Automate calls, chats, bookings, follow-ups and CRM tasks." },
  ];
  return (
    <Section id="why" className="!pt-0">
      <SectionHeader
        eyebrow="Why Krenixa"
        title={<>Built for businesses <span className="text-gradient">that scale</span></>}
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <GlassCard key={it.title} index={i} className="!p-7">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-foreground/5 text-cyan">
              <it.icon className="h-5 w-5" />
            </div>
            <div className="mt-5 text-lg font-bold">{it.title}</div>
            <div className="mt-2 text-sm text-muted-foreground">{it.desc}</div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

/* ============ ABOUT ============ */
export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            center={false}
            eyebrow="About Krenixa"
            title={<>Building the future workforce with <span className="text-gradient">AI</span></>}
            description="KRENIXA helps businesses automate customer conversations through intelligent AI employees. Our AI Voice Assistants and AI Chatbots answer calls, engage customers, qualify leads, schedule appointments, and provide support around the clock."
          />
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "50+", v: "Languages" },
              { k: "24/7", v: "Always on" },
              { k: "Days", v: "To deploy" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-gradient">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-square w-full max-w-md justify-self-center"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />
          <div className="glass relative flex h-full w-full flex-col justify-between rounded-3xl p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-muted-foreground">LIVE • AI Employee active</span>
              </div>
              <Globe2 className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="space-y-3">
              <ChatBubble side="ai">Hi, this is Aria from Krenixa. How can I help today?</ChatBubble>
              <ChatBubble side="user">I want to book a demo for my sales team.</ChatBubble>
              <ChatBubble side="ai">Great — I have Tuesday 3pm or Wednesday 11am open. Which works?</ChatBubble>
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>English • Spanish • Hindi • Arabic</span>
              <span>Response 0.3s</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function ChatBubble({ side, children }: { side: "ai" | "user"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
          side === "ai" ? "bg-foreground/5 text-foreground" : "bg-gradient-brand text-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ============ BOOKING ============ */
const FORM_URL = "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__m7vLJtUODJOSjZaUUxSWFNPT0EyOFFZMkFHMVAwRS4u";

export function Booking() {
  const [failed, setFailed] = useState(false);
  return (
    <Section id="book">
      <div className="absolute inset-x-0 top-1/3 -z-10 mx-auto h-96 max-w-4xl rounded-full bg-primary/20 blur-[120px]" />
      <SectionHeader
        eyebrow="Book Discovery Call"
        title={<>Talk to an <span className="text-gradient">AI employee</span></>}
        description="Complete a short form and one of our AI employees will contact you to understand your business requirements before your discovery call."
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="glass mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl p-2 sm:p-3"
      >
        <div className="relative overflow-hidden rounded-2xl bg-background/60">
          {failed ? (
            <div className="p-10 text-center">
              <p className="text-muted-foreground">The form couldn't load inside the page.</p>
              <a
                href={FORM_URL}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white"
              >
                Open the form <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ) : (
            <iframe
              title="Krenixa Discovery Call Form"
              src={FORM_URL}
              className="h-[720px] w-full border-0"
              allow="fullscreen"
              onError={() => setFailed(true)}
              onLoad={(e) => {
                // If Microsoft blocks embedding, the frame's document may be inaccessible.
                try {
                  const f = e.currentTarget as HTMLIFrameElement;
                  // Access will throw for cross-origin; that's fine — we assume success.
                  void f.contentWindow?.location.href;
                } catch { /* cross-origin OK */ }
              }}
            />
          )}
        </div>
      </motion.div>
    </Section>
  );
}

/* ============ FAQ ============ */
export function Faq() {
  const faqs = [
    { q: "What is an AI Employee?", a: "An AI Employee is a voice or chat-based AI agent trained on your business that handles real customer conversations — answering calls, replying on WhatsApp, capturing leads, booking appointments and providing support — 24/7." },
    { q: "How long does deployment take?", a: "Most AI employees are trained, integrated and deployed within days. Complex enterprise integrations can take 2–3 weeks." },
    { q: "Which languages do you support?", a: "50+ languages including English, Spanish, French, German, Hindi, Arabic, Portuguese and Mandarin — with regional accents." },
    { q: "Can AI integrate with our CRM?", a: "Yes. We integrate with HubSpot, Salesforce, Zoho, GoHighLevel and any tool with an API or webhook." },
    { q: "Do you provide support after deployment?", a: "Yes. All deployments include monitoring, performance tuning and ongoing maintenance." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title={<>Questions, <span className="text-gradient">answered</span></>}
      />
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass overflow-hidden rounded-2xl"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold">{f.q}</span>
                {isOpen ? <MinusCircle className="h-5 w-5 shrink-0 text-primary" /> : <PlusCircle className="h-5 w-5 shrink-0 text-muted-foreground" />}
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ============ CONTACT ============ */
export function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: "hello@krenixa.online" },
    { icon: Phone, label: "Phone", value: "Available on request" },
    { icon: Clock, label: "Business Hours", value: "Mon – Sat • 9am – 7pm" },
    { icon: MapPin, label: "Location", value: "Global • Remote-first" },
  ];
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title={<>Let's talk about your <span className="text-gradient">AI employee</span></>}
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <GlassCard key={it.label} index={i}>
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white">
              <it.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{it.label}</div>
            <div className="mt-1 font-medium">{it.value}</div>
          </GlassCard>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <a
          href="#book"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand animate-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-primary/30 transition hover:-translate-y-0.5"
        >
          Book Your Free Discovery Call <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}

/* ============ FOOTER ============ */
import logoAsset from  "@/assets/krenixa-logo.png";
export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logoAsset} alt="Krenixa" className="h-9 w-9 rounded-lg" />
              <span className="font-display text-lg font-bold tracking-tight">KRENIXA</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              We build AI employees for businesses.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Navigate</div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {["Home","Services","Industries","How It Works","About","FAQ","Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/\s/g,"")}`} className="text-foreground/80 hover:text-foreground">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Get started</div>
            <a
              href="#book"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white"
            >
              Book Discovery Call <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Krenixa. All rights reserved.</div>
          <div>krenixa.online</div>
        </div>
      </div>
    </footer>
  );
}
