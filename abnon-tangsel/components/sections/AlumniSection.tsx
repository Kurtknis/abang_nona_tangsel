"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import { alumni } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export default function AlumniSection() {
  return (
    <section className="section-padding bg-emerald-950 text-white overflow-hidden">
      <div className="container-enterprise">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gold-500/20 text-gold-400 font-jakarta text-sm font-semibold mb-4">
              Alumni Spotlight
            </span>
            <h2 className="font-display font-bold text-3xl md:text-h2 text-white">
              Kisah Sukses <span className="text-gold-500">Alumni</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button
              variant="secondary"
              className="border-white/30 text-white hover:bg-white hover:text-emerald-950"
              asChild
            >
              <Link href="/alumni/">
                Jaringan Alumni
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alumni.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gold-500/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-gold-500/30 mb-4" />
              <p className="text-sm text-white/70 leading-relaxed mb-6 italic">
                &ldquo;{person.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                  <span className="text-gold-500 font-display font-bold">{person.name[0]}</span>
                </div>
                <div>
                  <p className="font-jakarta font-semibold text-white text-sm">{person.name}</p>
                  <p className="text-xs text-gold-500">{person.title}</p>
                  <p className="text-xs text-white/50 mt-0.5">{person.currentRole}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
