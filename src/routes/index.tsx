import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  Services, Capabilities, EmployeeAbilities, Industries, HowItWorks,
  WhyKrenixa, About, Booking, Faq, Contact, Footer,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "KRENIXA — We build AI employees for businesses" },
      { name: "description", content: "KRENIXA builds AI Voice Assistants and AI Chatbots that answer calls, qualify leads, book appointments and support customers 24/7." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Capabilities />
        <EmployeeAbilities />
        <Industries />
        <HowItWorks />
        <WhyKrenixa />
        <About />
        <Booking />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
