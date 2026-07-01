import { Metadata } from "next";
import { partners } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mitra",
  description: "Kolaborasi strategis Abnon Tangsel dengan pemerintah dan swasta.",
};

const categories = ["Government", "Tourism", "Media", "Sponsor"];

export default function MitraPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-emerald-950 py-20 md:py-28">
        <div className="container-enterprise text-center">
          <h1 className="font-display font-bold text-4xl md:text-h1 text-white mb-6">
            Mitra <span className="text-gold-500">Kolaborasi</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Bersama mitra strategis, kami membangun Tangerang Selatan yang lebih
            baik.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-enterprise">
          {categories.map((cat) => {
            const catPartners = partners.filter((p) => p.category === cat);
            if (catPartners.length === 0) return null;
            return (
              <div key={cat} className="mb-16 last:mb-0">
                <h2 className="heading-3 mb-8 capitalize">{cat} Partners</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {catPartners.map((partner) => (
                    <div
                      key={partner.name}
                      className="bg-white rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col items-center text-center gap-4"
                    >
                      <div className="w-20 h-20 rounded-xl bg-emerald-950/5 flex items-center justify-center">
                        <span className="text-emerald-950 font-display font-bold text-2xl">{partner.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-jakarta font-semibold text-sm text-neutral-dark">{partner.name}</p>
                        <p className="text-xs text-neutral-dark/50">{partner.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
