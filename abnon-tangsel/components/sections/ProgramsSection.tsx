"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Compass,
  GraduationCap,
  Award,
  Heart,
  BookOpen,
  Mic,
  Video,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { programs } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Compass,
  GraduationCap,
  Award,
  Heart,
  BookOpen,
  Mic,
  Video,
};

export default function ProgramsSection() {
  return (
    <section className="section-padding bg-neutral-light">
      <div className="container-enterprise">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="label-small mb-4 block">Program Kerja</span>
          <h2 className="heading-2 mb-4">
            Kolaborasi Penuh <span className="text-gold-500">Arti</span>
          </h2>
          <p className="body-large">
            Berbagai program strategis yang mencakup pariwisata, pendidikan,
            sosial, dan digital untuk mengembangkan potensi kota dan pemuda.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = iconMap[program.icon] || MapPin;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${program.color}`} />
                <div className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <Badge variant="emerald" className="mb-3">
                  {program.category}
                </Badge>
                <h3 className="font-display font-semibold text-lg mb-2 text-neutral-dark group-hover:text-emerald-950 transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm text-neutral-dark/60 leading-relaxed mb-4">
                  {program.description}
                </p>
                <Link
                  href="/program-kerja/"
                  className="inline-flex items-center gap-1 text-sm font-jakarta font-semibold text-emerald-950 hover:text-gold-500 transition-colors"
                >
                  Detail Program
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
