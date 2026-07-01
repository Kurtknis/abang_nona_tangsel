"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container-enterprise">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-emerald-950 p-8 md:p-16 text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-800/30 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              Jadilah Bagian dari <span className="text-gold-500">Perubahan</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Bergabunglah dengan Abang Nona Tangerang Selatan dan jadilah
              pemimpin muda yang berkontribusi nyata bagi pariwisata dan
              kebudayaan kota.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/pendaftaran/">
                  Daftar Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-emerald-950"
                asChild
              >
                <Link href="/kontak/">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
