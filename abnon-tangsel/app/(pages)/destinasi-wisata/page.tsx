import { Metadata } from "next";
import { destinations } from "@/lib/data";
import { MapPin, Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Destinasi Wisata",
  description: "Destinasi wisata unggulan Tangerang Selatan.",
};

const categories = ["Semua", "Wisata Alam", "Wisata Edukasi", "Wisata Kuliner", "Wisata Religi", "Wisata Kreatif"];

export default function DestinasiPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-emerald-950 py-20 md:py-28">
        <div className="container-enterprise text-center">
          <h1 className="font-display font-bold text-4xl md:text-h1 text-white mb-6">
            Destinasi <span className="text-gold-500">Wisata</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Jelajahi keindahan dan kekayaan destinasi wisata Tangerang Selatan.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-enterprise">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-lg border border-emerald-950/10 bg-white font-jakarta text-sm font-medium text-neutral-dark/70 hover:bg-emerald-950 hover:text-white transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <article
                key={dest.id}
                className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-emerald-950/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-emerald-950/20 font-display text-6xl font-bold">
                      {dest.name[0]}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="emerald">{dest.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-lg">
                    <Star className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                    <span className="text-xs font-semibold">{dest.rating}</span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-semibold text-xl">{dest.name}</h3>
                  <p className="text-sm text-neutral-dark/60 leading-relaxed">{dest.description}</p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-sm text-neutral-dark/60">
                      <MapPin className="w-4 h-4 text-gold-500" />
                      <span>{dest.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-dark/60">
                      <Clock className="w-4 h-4 text-gold-500" />
                      <span>{dest.hours}</span>
                    </div>
                  </div>
                  <div className="pt-3 flex items-center justify-between border-t border-neutral-light">
                    <span className="font-jakarta font-semibold text-emerald-950">{dest.price}</span>
                    <button className="text-sm font-jakarta font-semibold text-gold-500 hover:text-gold-600">
                      Lihat Peta
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
