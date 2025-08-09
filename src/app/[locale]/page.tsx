import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1">
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}