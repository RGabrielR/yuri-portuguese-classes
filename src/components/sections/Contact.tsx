"use client";

import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export default function Contact() {
  const t = useTranslations("Contact");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setFormSubmitted(true);
    } else {
      alert("Por favor, completa tu nombre y email.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 border-t border-stone-200 dark:border-stone-800"
      variants={fadeIn}
      initial="initial"
      whileInView="whileInView"
      viewport={fadeIn.viewport}
    >
      <div className="w-full grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-stone-900 dark:text-amber-50 text-deep-shadow">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-[600px] text-stone-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-stone-400">
            {t("subtitle")}
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          {formSubmitted ? (
            <div className="calendly-container min-h-[680px]">
              <InlineWidget url="URL_DE_TU_CALENDLY" />
            </div>
          ) : (
            <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder={t("name")}
                className="max-w-lg flex-1 px-4 py-2 border border-stone-300 rounded-md dark:bg-stone-800 dark:text-amber-50 dark:border-stone-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder={t("email")}
                className="max-w-lg flex-1 px-4 py-2 border border-stone-300 rounded-md dark:bg-stone-800 dark:text-amber-50 dark:border-stone-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-950"
              >
                {t("schedule")}
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
};

