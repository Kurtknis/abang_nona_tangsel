"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Instagram,
  Youtube,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-dark/10 transition-all duration-500",
          isScrolled ? "shadow-glass py-3" : "py-4"
        )}
      >
        <div className="container-enterprise">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden bg-white">
                <Image
                  src="/images/profile.png"
                  alt="Abang Nona Tangerang Selatan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="hidden md:block">
                <p className="font-display font-bold text-sm leading-tight text-emerald-950">
                  ABANG NONA
                </p>
                <p className="font-jakarta text-[10px] font-semibold tracking-widest text-gold-500 uppercase">
                  Tangerang Selatan
                </p>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg font-jakarta text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-emerald-950 bg-emerald-950/5"
                        : "text-neutral-dark/70 hover:text-emerald-950 hover:bg-emerald-950/5"
                    )}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-elevated border border-emerald-950/5 overflow-hidden"
                      >
                        <div className="p-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-jakarta text-neutral-dark/80 hover:text-emerald-950 hover:bg-emerald-950/5 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-neutral-dark/60 hover:text-emerald-950 hover:bg-emerald-950/5 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-neutral-dark/60 hover:text-emerald-950 hover:bg-emerald-950/5 transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
              <Button size="sm" className="gap-2">
                Daftar Abang Nona
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-emerald-950 hover:bg-emerald-950/5"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ivory pt-24 px-6 pb-8 overflow-y-auto xl:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl font-jakarta font-medium transition-colors",
                      pathname === link.href
                        ? "bg-emerald-950 text-white"
                        : "text-neutral-dark hover:bg-emerald-950/5"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-gold-500/30 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="px-4 py-2 rounded-lg text-sm text-neutral-dark/70 hover:text-emerald-950 hover:bg-emerald-950/5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-4">
              <Button className="w-full">Daftar Abang Nona</Button>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={siteConfig.social.instagram}
                  className="p-3 rounded-full bg-emerald-950/5 text-emerald-950"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  className="p-3 rounded-full bg-emerald-950/5 text-emerald-950"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
