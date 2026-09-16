"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { homeFaqs } from "@/lib/site-data";

export function FaqAccordion() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {homeFaqs.map((faq, index) => {
        const isExpanded = expandedFaq === index;
        return (
          <motion.div
            key={faq.q}
            className="border border-gray-800 transition-colors duration-300 hover:border-yellow-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <button
              type="button"
              onClick={() => setExpandedFaq(isExpanded ? null : index)}
              className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors duration-300 hover:bg-yellow-500/5"
              aria-expanded={isExpanded}
            >
              <span className="text-lg font-light text-white">{faq.q}</span>
              <motion.span
                className="mt-1 shrink-0 text-yellow-500"
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                aria-hidden="true"
              >
                {isExpanded ? <Minus className="h-5 w-5" strokeWidth={1.5} /> : <Plus className="h-5 w-5" strokeWidth={1.5} />}
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isExpanded ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 pt-2 font-light leading-relaxed text-gray-400">{faq.a}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
