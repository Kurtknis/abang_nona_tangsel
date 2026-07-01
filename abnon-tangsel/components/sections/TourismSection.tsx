"use client";

import { motion } from "framer-motion";
import { MapPin, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { destinations } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

export default function TourismSection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-enterprise">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="label-small mb-4 block">Destinasi Wisata</span>
          <h2 className="heading-2 mb-4">
            Jelajahi <span className="text-gold-500">Tangerang Selatan</span>
          </h2>
          <p className="body-large">
            Temukan keindahan dan kekayaan destinasi wisata yang dibina dan
            dipromosikan oleh Abnon Tangsel.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.slice(0, 6).map((dest, index) => (
            <motion.article
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] bg-emerald-950/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-emerald-950/20 font-display text-5xl font-bold">
                    {dest.name[0]}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="emerald">{dest.category}</Badge>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                  <Star className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                  <span className="text-xs font-semibold">{dest.rating}</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-display font-semibold text-lg text-neutral-dark group-hover:text-emerald-950 transition-colors">
                  {dest.name}
                </h3>
                <div className="flex items-start gap-2 text-sm text-neutral-dark/60">
                  <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <span>{dest.location}</span>
                </div>
                <p className="text-sm text-neutral-dark/60 line-clamp-2">{dest.description}</p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-sm font-jakarta font-semibold text-emerald-950">{dest.price}</span>
                  <Link
                    href="/destinasi-wisata/"
                    className="inline-flex items-center gap-1 text-sm font-jakarta font-semibold text-gold-500 hover:text-gold-600 transition-colors"
                  >
                    Detail
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/destinasi-wisata/"
            className="inline-flex items-center gap-2 text-emerald-950 font-jakarta font-semibold hover:text-gold-500 transition-colors"
          >
            Lihat Semua Destinasi
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
