"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export default function Features() {
  const t = useTranslations("Features");
  return (
  <motion.section
    id="features"
    className="w-full py-8 md:py-10 lg:py-10"
    variants={fadeIn}
    initial="initial"
    whileInView="whileInView"
    viewport={fadeIn.viewport}
  >
    <div className="w-full px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm dark:bg-stone-800 text-amber-700 dark:text-amber-200">
            {t("title")}
          </div>
          <h2 className="cursor-default text-3xl font-bold tracking-tighter sm:text-5xl text-stone-900 dark:text-amber-50 text-deep-shadow">
            {t("title")}
          </h2>
          <p className="cursor-default max-w-[1000px] text-black  bg-blue-700 p-3 rounded-2xl shadow-2xl shadow-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            {t("subtitle")}
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        <div
          className="cursor-default group relative grid gap-1 bg-white/80 dark:bg-stone-900/80 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-amber-400/40 hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-amber-400 hover:ring-2 hover:ring-amber-400/60 after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:transition-all after:duration-300 after:border-2 after:border-transparent group-hover:after:border-amber-400"
        >
          <h3 className="text-xl font-bold text-stone-900 dark:text-amber-50">
            {t("feature1_title")}
          </h3>
          <p className="text-stone-600 dark:text-stone-400">
            {t("feature1_description")}
          </p>
        </div>
        <div
          className="cursor-default group relative grid gap-1 bg-white/80 dark:bg-stone-900/80 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-amber-400/40 hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-amber-400 hover:ring-2 hover:ring-amber-400/60 after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:transition-all after:duration-300 after:border-2 after:border-transparent group-hover:after:border-amber-400"
        >
          <h3 className="text-xl font-bold text-stone-900 dark:text-amber-50">
            {t("feature2_title")}
          </h3>
          <p className="text-stone-600 dark:text-stone-400">
            {t("feature2_description")}
          </p>
        </div>
        <div
          className="cursor-default group relative grid gap-1 bg-white/80 dark:bg-stone-900/80 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-amber-400/40 hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-amber-400 hover:ring-2 hover:ring-amber-400/60 after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:transition-all after:duration-300 after:border-2 after:border-transparent group-hover:after:border-amber-400"
        >
          <h3 className="text-xl font-bold text-stone-900 dark:text-amber-50">
            {t("feature3_title")}
          </h3>
          <p className="text-stone-600 dark:text-stone-400">
            {t("feature3_description")}
          </p>
        </div>
      </div>
    </div>
  </motion.section>
);}
