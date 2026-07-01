import { Metadata } from "next";
import { news } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Berita",
  description: "Berita terkini dan update aktivitas Abnon Tangsel.",
};

const categories = ["Semua", "Pariwisata", "Pendidikan", "Digital", "Prestasi", "Sosial"];

export default function BeritaPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-emerald-950 py-20 md:py-28">
        <div className="container-enterprise text-center">
          <h1 className="font-display font-bold text-4xl md:text-h1 text-white mb-6">
            Berita & <span className="text-gold-500">Artikel</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Update terkini seputar aktivitas, program, dan prestasi Abnon
            Tangerang Selatan.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-enterprise">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-dark/40" />
              <input
                type="text"
                placeholder="Cari berita..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-emerald-950/10 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-950/20 font-jakarta"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 rounded-lg border border-emerald-950/10 bg-white font-jakarta text-sm font-medium text-neutral-dark/70 hover:bg-emerald-950 hover:text-white transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {news.find((n) => n.featured) && (
            <div className="mb-12">
              <article className="grid lg:grid-cols-2 gap-8 bg-white rounded-xl overflow-hidden shadow-card">
                <div className="relative aspect-[16/10] lg:aspect-auto bg-emerald-950/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-emerald-950/20 font-display text-8xl font-bold">
                      {news[0].title[0]}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="emerald" className="w-fit mb-4">
                    Featured
                  </Badge>
                  <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                    {news[0].title}
                  </h2>
                  <p className="text-neutral-dark/60 leading-relaxed mb-6">
                    {news[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-neutral-dark/50 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(news[0].date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {news[0].author}
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 font-jakarta font-semibold text-emerald-950 hover:text-gold-500 transition-colors"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.filter((n) => !n.featured).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="relative aspect-[16/10] bg-emerald-950/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-emerald-950/20 font-display text-5xl font-bold">
                      {article.title[0]}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline">{article.category}</Badge>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-neutral-dark/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg group-hover:text-emerald-950 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-neutral-dark/60 line-clamp-2">{article.excerpt}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-jakarta font-semibold text-emerald-950 hover:text-gold-500 transition-colors"
                  >
                    Baca
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
