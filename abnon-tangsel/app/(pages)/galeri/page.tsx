import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Dokumentasi foto dan video kegiatan Abnon Tangsel.",
};

const galleries = [
  { title: "Grand Final 2024", count: 48, category: "Grand Final" },
  { title: "Open Trip Serpong", count: 32, category: "Pariwisata" },
  { title: "ANTS Goes To School", count: 56, category: "Pendidikan" },
  { title: "Festival Budaya", count: 40, category: "Budaya" },
  { title: "Behind The Scenes", count: 24, category: "Dokumentasi" },
  { title: "Podcast Session", count: 18, category: "Digital" },
];

export default function GaleriPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-emerald-950 py-20 md:py-28">
        <div className="container-enterprise text-center">
          <h1 className="font-display font-bold text-4xl md:text-h1 text-white mb-6">
            Galeri <span className="text-gold-500">Dokumentasi</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Kumpulan foto dan video dokumentasi kegiatan Abnon Tangsel.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-enterprise">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((gallery) => (
              <div
                key={gallery.title}
                className="group relative aspect-square bg-emerald-950/5 rounded-xl overflow-hidden cursor-pointer hover:shadow-elevated transition-all duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-emerald-950/15 font-display text-7xl font-bold">
                    {gallery.title[0]}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-gold-500 text-xs font-jakarta font-semibold uppercase tracking-wider">
                    {gallery.category}
                  </span>
                  <h3 className="font-display font-semibold text-xl text-white mt-1">
                    {gallery.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-1">{gallery.count} foto</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
