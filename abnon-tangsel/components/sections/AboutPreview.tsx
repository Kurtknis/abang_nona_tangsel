"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const values = [
  {
    icon: Eye,
    title: "Visi",
    desc: "Menciptakan pemimpin muda berdampak yang mempromosikan identitas, budaya, dan potensi pariwisata Tangerang Selatan.",
  },
  {
    icon: Target,
    title: "Misi",
    desc: "Membangun kolaborasi bermakna melalui inovasi, pengabdian masyarakat, dan partisipasi aktif dalam program pemerintah.",
  },
  {
    icon: Heart,
    title: "Nilai",
    desc: "Integritas, Kepemimpinan, Kolaborasi, Inovasi, Pelestarian Budaya, dan Dampak Masyarakat.",
  },
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-emerald-950/10 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto relative rounded-full overflow-hidden bg-emerald-950/10 mb-4">
                    <Image
                      src="/images/profile.png"
                      alt="Abang Nona Tangerang Selatan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-emerald-950/60 font-jakarta text-sm">Dokumentasi Kegiatan</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-500/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-emerald-950/10 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="label-small mb-4 block">Tentang Kami</span>
              <h2 className="heading-2 mb-6">
                Membangun Pemimpin Muda untuk <span className="text-gold-500">Tangerang Selatan</span>
              </h2>
              <p className="body-large">
                Abang Nona Tangerang Selatan bukan sekadar organisasi pageant.
                Kami adalah organisasi kepemimpinan dan kebangsawanan yang
                berfokus pada pengembangan pemuda untuk menjadi perwakilan
                publik, advokat pariwisata, dan promotor kebudayaan kota.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/5 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-emerald-950" />
                  </div>
                  <h4 className="font-jakarta font-semibold text-neutral-dark">{item.title}</h4>
                  <p className="text-sm text-neutral-dark/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <Button asChild>
              <Link href="/tentang-kami/">
                Sejarah Lengkap Organisasi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
