"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/data";

export default function PartnersSection() {
  return (
    <section className="py-16 md:py-20 bg-neutral-light">
      <div className="container-enterprise">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="label-small mb-4 block">Mitra Kami</span>
          <h2 className="heading-2">Kolaborasi Strategis</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-lg bg-emerald-950/5 flex items-center justify-center">
                <span className="text-emerald-950 font-display font-bold text-xl">{partner.name[0]}</span>
              </div>
              <div className="text-center">
                <p className="font-jakarta font-semibold text-sm text-neutral-dark">{partner.name}</p>
                <p className="text-xs text-neutral-dark/50">{partner.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
