"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const Testimonials = () => (
  <motion.section
    id="testimonials"
    className="w-full py-12 md:py-24 lg:py-32"
    variants={fadeIn}
    initial="initial"
    whileInView="whileInView"
    viewport={fadeIn.viewport}
  >
    <div className="w-full px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl text-stone-900 dark:text-amber-50 text-deep-shadow">
        Lo que dicen mis alumnos
      </h2>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        <Card className="cursor-default p-6 bg-amber-50 dark:bg-stone-900 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-amber-400/40 hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-amber-400 hover:ring-2 hover:ring-amber-400/60 after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:transition-all after:duration-300 after:border-2 after:border-transparent group-hover:after:border-amber-400">
          <p className="text-stone-600 dark:text-stone-400">
            &quot;¡Las clases con Yuri son increíbles! Aprendí muchísimo en poco
            tiempo y me sentí muy cómodo desde el primer día.&quot;
          </p>
          <div className="flex items-center justify-between pt-2">
            <Image src="/images/carlos.png" alt="carlos" width={100} height={100} className="rounded-full" />
            <p className="text-right font-semibold text-stone-900 dark:text-amber-50">
              - Carlos, México
            </p>
          </div>
        </Card>
        <Card className="cursor-default p-6 bg-amber-50 dark:bg-stone-900 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-amber-400/40 hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-amber-400 hover:ring-2 hover:ring-amber-400/60 after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:transition-all after:duration-300 after:border-2 after:border-transparent group-hover:after:border-amber-400">
          <p className="text-stone-600 dark:text-stone-400">
            &quot;La mejor decisión para aprender portugués. Yuri es un profesor
            paciente y dedicado, y sus clases son muy entretenidas.&quot;
          </p>
          <div className="flex items-center justify-between pt-2">
            <Image src="/images/laura.png" alt="laura" width={100} height={100} className="rounded-full" />
            <p className="text-right font-semibold text-stone-900 dark:text-amber-50">
              - Laura, Colombia
            </p>
          </div>
        </Card>
        <Card className="cursor-default p-6 bg-amber-50 dark:bg-stone-900 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-amber-400/40 hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-amber-400 hover:ring-2 hover:ring-amber-400/60 after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:transition-all after:duration-300 after:border-2 after:border-transparent group-hover:after:border-amber-400">
          <p className="text-stone-600 dark:text-stone-400">
            &quot;Gracias a Yuri, ahora puedo comunicarme con fluidez en portugués.
            ¡Totalmente recomendado!&quot;
          </p>
          <div className="flex items-center justify-between pt-2">
            <Image src="/images/sofia.png" alt="sofia" width={100} height={100} className="rounded-full" />
            <p className="text-right font-semibold text-stone-900 dark:text-amber-50">
              - Sofía, Argentina
            </p>
          </div>
        </Card>
      </div>
    </div>
  </motion.section>
);

export default Testimonials;
