"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    // ① full‑width section, no container
    <motion.section
      id="hero"
      className="flex min-h-screen w-full m-0 p-0 bg-[url('/images/bg-image.svg')] bg-cover bg-center"
      variants={fadeIn}
      initial="initial"
      animate="whileInView"
    >
      {/* ② LEFT: text block (50 vw) */}
      <div className="flex w-[60vw] flex-col justify-center px-6 space-y-4 ">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-stone-900 dark:text-amber-50 text-deep-shadow bg-blue-950 p-3 rounded-2xl shadow-2xl shadow-black">
          {t("title")}
        </h1>
        <p className="max-w-[60ch] md:text-xl text-black  bg-blue-700 p-3 rounded-2xl shadow-2xl shadow-black">
          {t("subtitle")}
        </p>
      </div>

      {/* ③ RIGHT: image (50 vw × 100 vh) */}
      <div className="h-screen w-[40vw] relative">
        <Image
          src="/images/heroimage.png" // 2598 × 4619
          alt="Hero"
          fill
          className="object-contain "
          priority
          sizes="50vw"
        />
      </div>
    </motion.section>
  );
}