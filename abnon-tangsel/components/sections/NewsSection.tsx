"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import { news } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function NewsSection() {
  const featured = news.find((n) => n.featured);
  const others = news.filter((n) => !n.featured).slice(0, 3);

  return (
    <section className="section-padding bg-neutral-light">
      <div className="container-enterprise">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="label-small mb-4 block">Berita Terkini</span>
            <h2 className="heading-2">
              Update <span className="text-gold-500">Terbaru</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button variant="secondary" asChild>
              <Link href="/berita/">
                Lihat Semua Berita
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featured && (
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="relative aspect-[16/10] bg-emerald-950/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-emerald-950/20 font-display text-6xl font-bold">
                    {featured.title[0]}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="emerald">Featured</Badge>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-sm text-neutral-dark/50">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {featured.author}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-2xl text-neutral-dark group-hover:text-emerald-950 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-neutral-dark/60 leading-relaxed">{featured.excerpt}</p>
                <Link
                  href={`/berita/#${featured.id}`}
                  className="inline-flex items-center gap-1 font-jakarta font-semibold text-emerald-950 hover:text-gold-500 transition-colors"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          )}

          <div className="space-y-6">
            {others.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex gap-6 bg-white rounded-xl p-4 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-emerald-950/10 shrink-0 flex items-center justify-center overflow-hidden">
                  <span className="text-emerald-950/20 font-display text-2xl font-bold">
                    {article.title[0]}
                  </span>
                </div>
                <div className="flex flex-col justify-center space-y-2">
                  <Badge variant="outline" className="w-fit">{article.category}</Badge>
                  <h4 className="font-display font-semibold text-base text-neutral-dark group-hover:text-emerald-950 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <span className="text-xs text-neutral-dark/50">{formatDate(article.date)}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
