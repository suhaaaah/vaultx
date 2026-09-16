"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function ServiceFaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.article
            key={faq.q}
            className="border border-gray-800 transition-colors duration-300 hover:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-yellow-500/5"
              aria-expanded={isOpen}
            >
              <span className="font-light text-white">{faq.q}</span>
              <motion.span
                className="shrink-0 text-yellow-500"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                aria-hidden="true"
              >
                {isOpen ? <Minus className="h-5 w-5" strokeWidth={1.5} /> : <Plus className="h-5 w-5" strokeWidth={1.5} />}
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm font-light leading-relaxed text-gray-400">{faq.a}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.article>
        );
      })}
    </div>
  );
}
