"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";
import { SocialLinks } from "./social-links";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedMenu(null);
  };

  const toggleSubmenu = (itemId: string) => {
    setExpandedMenu((current) => (current === itemId ? null : itemId));
  };

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-40 bg-black/90 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="site-container flex items-center justify-between py-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center transition-opacity hover:opacity-80" aria-label="VaultX home">
              <img src="/images/vaultx-logo-blue.svg" alt="VaultX" width={132} height={44} className="h-11 w-auto" />
            </Link>
          </motion.div>

          <div className="flex items-center gap-6">
            <SocialLinks className="hidden md:flex" />
            <motion.button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="hamburger-button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="hamburger-line"
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="hamburger-line"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="hamburger-line"
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="menu-panel menu-panel-open"
            aria-hidden={!isOpen}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="site-container flex min-h-full items-center py-24">
              <nav className="w-full space-y-6 md:space-y-10" aria-label="Main navigation">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                  >
                    <div className="group flex w-full items-center gap-4 text-left">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="whitespace-nowrap text-xl font-extralight uppercase tracking-[0.15em] text-white transition-colors duration-500 hover:text-yellow-500 md:text-2xl"
                      >
                        {item.label}
                      </Link>
                      {item.children ? (
                        <motion.button
                          type="button"
                          className="shrink-0 rounded-full p-1 text-yellow-500 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-500"
                          onClick={() => toggleSubmenu(item.id)}
                          aria-label={`${expandedMenu === item.id ? "Collapse" : "Expand"} ${item.label} submenu`}
                          aria-expanded={expandedMenu === item.id}
                          aria-controls={`${item.id}-submenu`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.span
                            className="block"
                            animate={{ rotate: expandedMenu === item.id ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronRight className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                          </motion.span>
                        </motion.button>
                      ) : null}
                    </div>

                    <AnimatePresence initial={false}>
                      {item.children && expandedMenu === item.id ? (
                        <motion.div
                          id={`${item.id}-submenu`}
                          className="mt-4 space-y-3 overflow-hidden border-l border-yellow-500/50 pl-6"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          {item.children.map((child, childIndex) => (
                            <motion.div
                              key={child.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.25, delay: childIndex * 0.04 }}
                            >
                              <Link
                                href={child.href}
                                onClick={closeMenu}
                                className="block text-sm font-light text-gray-400 transition-colors duration-300 hover:text-yellow-500 md:text-base"
                              >
                                {child.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
