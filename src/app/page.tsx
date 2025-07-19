"use client";

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-stone-200 dark:border-stone-800">
        <p className="text-xs text-stone-600 dark:text-stone-400">
          © {new Date().getFullYear()} Yuri Clases de Portugués. Todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  );
}
