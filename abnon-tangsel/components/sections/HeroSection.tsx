"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Calendar, Landmark, type LucideIcon } from "lucide-react";
import { stats, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const statIcons: LucideIcon[] = [Users, Calendar, Landmark, MapPin];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-emerald-950">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-800/30 rounded-full blur-3xl" />

      <div className="container-enterprise relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/20 text-gold-400 font-jakarta text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                Organisasi Duta Resmi Kota Tangerang Selatan
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-display-hero text-white leading-[1.1] tracking-tight"
            >
              Abang Nona
              <br />
              <span className="text-gold-500">Tangerang Selatan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl font-body"
            >
              {siteConfig.tagline}. Mengembangkan pemimpin muda untuk
              mempromosikan pariwisata, kebudayaan, dan potensi positif Kota
              Tangerang Selatan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
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
                <Link href="/tentang-kami/">Pelajari Lebih Lanjut</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-emerald-900/50 border border-gold-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto relative rounded-full overflow-hidden bg-gold-500/20">
                    <Image
                      src="/images/masterprofile.png"
                      alt="Abang Nona Tangerang Selatan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-white/60 font-jakarta text-sm">
                    Official Portrait
                    <br />
                    Abnon Tangsel 2025
                  </p>
                </div>
              </div>
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold-500/30 rounded-xl" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = statIcons[index];
            if (!Icon) return null;
            return (
              <div
                key={stat.label}
                className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold-500/30 transition-colors group"
              >
                <Icon className="w-6 h-6 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-display font-bold text-3xl md:text-4xl text-white">
                  {stat.value}
                  <span className="text-gold-500">{stat.suffix}</span>
                </p>
                <p className="font-jakarta text-sm text-white/60 mt-1">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
