import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe, LayoutTemplate, User, Building2, ShoppingBag, CalendarCheck,
  MessageCircle, Camera, ThumbsUp, Send, Mail, MessageSquare,
  Plug, Workflow, Users, Calendar, Zap, Cog,
  LayoutDashboard, Database, Boxes, UserCircle2, Code2, Cloud,
  Server, UploadCloud, ShieldCheck, Globe2, Gauge, Activity,
  Wrench, Bug, Lock, Rocket, Sparkles, ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/sections";
import { Section, SectionHeader, GlassCard } from "@/components/site/primitives";

const FORM_URL = "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__m7vLJtUODJOSjZaUUxSWFNPT0EyOFFZMkFHMVAwRS4u";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [
      { title: "Digital Solutions — KRENIXA" },
      { name: "description", content: "Beyond AI Voice Assistants and AI Chatbots, KRENIXA provides complete digital solutions — websites, messaging automation, business automation, custom software, cloud deployment, and support." },
      { property: "og:title", content: "Digital Solutions — KRENIXA" },
      { property: "og:description", content: "Complete digital solutions to help businesses build, automate, and scale." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Digital Solutions — KRENIXA" },
      { name: "twitter:description", content: "Complete digital solutions to help businesses build, automate, and scale." },
    ],
  }),
});

type Card = { icon: React.ComponentType<{ className?: string }>; title: string; desc: string };
type Group = { eyebrow: string; title: React.ReactNode; accent: string; cards: Card[] };

const groups: Group[] = [
  {
    eyebrow: "Section 01",
    title: <>Website <span className="text-gradient">Development</span></>,
    accent: "from-primary to-cyan",
    cards: [
      { icon: Globe, title: "Business Websites", desc: "Fast, modern sites that convert visitors into customers." },
      { icon: LayoutTemplate, title: "Landing Pages", desc: "High-performance pages purpose-built for campaigns." },
      { icon: User, title: "Portfolio Websites", desc: "Showcase your work with elegant, animated design." },
      { icon: Building2, title: "Corporate Websites", desc: "Enterprise-grade websites for established brands." },
      { icon: ShoppingBag, title: "E-Commerce Websites", desc: "Complete online stores with payments and inventory." },
      { icon: CalendarCheck, title: "Booking Websites", desc: "Appointment-first sites with live scheduling built in." },
    ],
  },
  {
    eyebrow: "Section 02",
    title: <>Messaging <span className="text-gradient">Automation</span></>,
    accent: "from-cyan to-purple",
    cards: [
      { icon: MessageCircle, title: "WhatsApp Automation", desc: "Automated replies, campaigns and lead flows on WhatsApp." },
      { icon: Camera, title: "Instagram Automation", desc: "DM automation, comment replies and story funnels." },
      { icon: ThumbsUp, title: "Facebook Automation", desc: "Messenger bots, lead capture and ad-response automation." },
      { icon: Send, title: "Telegram Automation", desc: "Bots and broadcast systems for Telegram channels." },
      { icon: Mail, title: "Email Automation", desc: "Sequences, drip campaigns and transactional email flows." },
      { icon: MessageSquare, title: "SMS Automation", desc: "Two-way SMS conversations and notification systems." },
    ],
  },
  {
    eyebrow: "Section 03",
    title: <>Business <span className="text-gradient">Automation</span></>,
    accent: "from-purple to-primary",
    cards: [
      { icon: Plug, title: "CRM Integration", desc: "Connect HubSpot, Salesforce, Zoho, GoHighLevel and more." },
      { icon: Workflow, title: "Workflow Automation", desc: "Automate repetitive tasks across your entire stack." },
      { icon: Users, title: "Lead Management", desc: "Capture, qualify and route leads to the right team." },
      { icon: Calendar, title: "Calendar Integration", desc: "Two-way sync with Google, Outlook and booking tools." },
      { icon: Zap, title: "API Integration", desc: "Connect any tool with custom, reliable API workflows." },
      { icon: Cog, title: "Business Process Automation", desc: "End-to-end automation of your core operations." },
    ],
  },
  {
    eyebrow: "Section 04",
    title: <>Custom <span className="text-gradient">Software</span></>,
    accent: "from-primary to-purple",
    cards: [
      { icon: LayoutDashboard, title: "Admin Dashboards", desc: "Real-time dashboards tailored to your business KPIs." },
      { icon: Database, title: "CRM Systems", desc: "Custom CRMs designed around how your team actually works." },
      { icon: Boxes, title: "ERP Systems", desc: "Unified systems for operations, inventory and finance." },
      { icon: UserCircle2, title: "Client Portals", desc: "Secure portals for onboarding, files and collaboration." },
      { icon: Code2, title: "Custom Web Applications", desc: "Bespoke web apps built for your unique workflows." },
      { icon: Cloud, title: "SaaS Platforms", desc: "Full-stack SaaS products from MVP to scale." },
    ],
  },
  {
    eyebrow: "Section 05",
    title: <>Cloud & <span className="text-gradient">Deployment</span></>,
    accent: "from-cyan to-primary",
    cards: [
      { icon: Server, title: "Hosting", desc: "Reliable, scalable hosting tuned for performance." },
      { icon: UploadCloud, title: "Cloud Deployment", desc: "AWS, GCP, Azure and edge deployments done right." },
      { icon: ShieldCheck, title: "SSL", desc: "Secure every request with modern SSL and HTTPS." },
      { icon: Globe2, title: "Domain Configuration", desc: "DNS, subdomains and email routing configured cleanly." },
      { icon: Gauge, title: "Performance Optimization", desc: "Sub-second loads with caching, CDN and tuning." },
      { icon: Activity, title: "Monitoring", desc: "Uptime, error and performance monitoring 24/7." },
    ],
  },
  {
    eyebrow: "Section 06",
    title: <>Support & <span className="text-gradient">Maintenance</span></>,
    accent: "from-purple to-cyan",
    cards: [
      { icon: Wrench, title: "Monthly Maintenance", desc: "Predictable monthly care to keep everything healthy." },
      { icon: Bug, title: "Bug Fixes", desc: "Rapid diagnosis and resolution of issues as they arise." },
      { icon: Lock, title: "Security Updates", desc: "Ongoing patches to keep your software secure." },
      { icon: Gauge, title: "Performance Optimization", desc: "Continuous tuning as your traffic and data grow." },
      { icon: Rocket, title: "Feature Enhancements", desc: "New features and improvements on a steady cadence." },
    ],
  },
];

function SolutionsPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero */}
        <Section className="!pt-40 md:!pt-48">
          <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 mx-auto h-96 max-w-4xl rounded-full bg-primary/20 blur-[120px]" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand animate-pulse" />
                Solutions
              </span>
            </div>
            <h1 className="text-balance font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
              Digital <span className="text-gradient">Solutions</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Beyond AI Voice Assistants and AI Chatbots, KRENIXA provides complete digital solutions to help businesses build, automate, and scale.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand animate-gradient px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50"
              >
                Book Free AI Discovery Call <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/50 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-foreground/5"
              >
                Back to Home
              </a>
            </div>
          </motion.div>
        </Section>

        {/* Sections */}
        {groups.map((g, gi) => (
          <Section key={g.eyebrow} className={gi === 0 ? "!pt-0" : "!pt-0"}>
            <SectionHeader eyebrow={g.eyebrow} title={g.title} />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.cards.map((c, i) => (
                <GlassCard key={c.title} index={i} className="!p-7">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${g.accent} text-white shadow-md`}>
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-5 text-lg font-bold">{c.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{c.desc}</div>
                </GlassCard>
              ))}
            </div>
          </Section>
        ))}

        {/* Bottom CTA */}
        <Section className="!pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="glass relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-10 text-center md:p-14"
          >
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex justify-center">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-lg">
                  <Sparkles className="h-6 w-6" />
                </span>
              </div>
              <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl md:text-5xl">
                Need a <span className="text-gradient">Custom Solution?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
                Let's discuss your business requirements and build the right digital solution together.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand animate-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50"
                >
                  Book Free AI Discovery Call <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
