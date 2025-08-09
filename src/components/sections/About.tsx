"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { useTranslations } from "next-intl";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export default function About() {
  const t = useTranslations("About");
  return (
  <motion.section
    id="about"
    className="w-full py-12 md:py-24 lg:py-32 bg-amber-50 dark:bg-stone-900"
    variants={fadeIn}
    initial="initial"
    whileInView="whileInView"
    viewport={fadeIn.viewport}
  >
    <div className="w-full relative grid items-center justify-center gap-4 px-4 text-center md:px-6">
      {/* Imagen decorativa flotante */}
      <Image
        src="/images/natal.jpg"
        alt="natal"
        width={320}
        height={180}
        className="absolute left-[-40px] top-0 md:left-[-80px] md:top-0 rounded-2xl shadow-2xl shadow-black opacity-70 z-0 rotate-[-6deg] pointer-events-none"
        style={{ filter: "blur(1px)" }}
      />
      <Image
        src="/images/buenosaires.jpg"
        alt="buenosaires"
        width={320}
        height={180}
        className="absolute right-[-40px] top-0 md:right-[-80px] md:top-0 rounded-2xl shadow-2xl shadow-black opacity-70 z-0 rotate-[6deg] pointer-events-none"
        style={{ filter: "blur(1px)" }}
      />
      <Image
        src="/images/buenosaires2.jpg"
        alt="buenosaires2"
        width={320}
        height={180}
        className="absolute left-[-40px] bottom-0 md:left-[-80px] md:bottom-0 rounded-2xl shadow-2xl shadow-black opacity-70 z-0 rotate-[6deg] pointer-events-none"
        style={{ filter: "blur(1px)" }}
      />
      <Image
        src="/images/saopaulo.jpeg"
        alt="saopaulo"
        width={320}
        height={180}
        className="absolute right-[-40px] bottom-0 md:right-[-80px] md:bottom-0 rounded-2xl shadow-2xl shadow-black opacity-70 z-0 rotate-[-6deg] pointer-events-none"
        style={{ filter: "blur(1px)" }}
      />
      {/* Contenido principal */}
      <div className="space-y-3 relative z-10">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-stone-900 dark:text-amber-50 text-deep-shadow">
          {t("title")}
        </h2>
        <p className="cursor-default mx-auto max-w-[1000px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed
          text-stone-900 dark:text-amber-50
          bg-white/80 dark:bg-stone-900/80
          p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-stone-200 dark:border-stone-700">
          {t("description")}
        </p>
      </div>
      <div className="mx-auto w-full max-w-sm space-y-2 relative z-10">
        <Avatar
          src="/images/yuri.jpg"
          alt="Yuri"
          className="w-24 h-24 mx-auto"
        />
        <div className="flex justify-center space-x-4">
          <p className="text-stone-600 dark:text-stone-400">
            {t("experience")}
          </p>
        </div>
      </div>
    </div>
  </motion.section>
);}
