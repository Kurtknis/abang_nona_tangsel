import { Metadata } from "next";
import { alumni } from "@/lib/data";
import { Search, GraduationCap, Award, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Alumni",
  description: "Jaringan alumni Abnon Tangsel dan kisah sukses mereka.",
};

export default function AlumniPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-emerald-950 py-20 md:py-28">
        <div className="container-enterprise text-center">
          <h1 className="font-display font-bold text-4xl md:text-h1 text-white mb-6">
            Jaringan <span className="text-gold-500">Alumni</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Komunitas alumni Abnon Tangsel yang terus berkontribusi bagi kota dan
            negara.
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
                placeholder="Cari alumni..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-emerald-950/10 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-950/20 font-jakarta"
              />
            </div>
            <select className="px-4 py-3 rounded-xl border border-emerald-950/10 bg-white font-jakarta text-neutral-dark/70 focus:outline-none">
              <option>Semua Angkatan</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumni.map((person) => (
              <article
                key={person.id}
                className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 text-center p-6"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-emerald-950/5 flex items-center justify-center mb-4">
                  <span className="text-emerald-950 font-display font-bold text-3xl">{person.name[0]}</span>
                </div>
                <h3 className="font-display font-semibold text-lg">{person.name}</h3>
                <p className="text-gold-500 text-sm font-jakarta font-medium mb-4">{person.title}</p>
                <div className="space-y-2 text-left text-sm text-neutral-dark/60">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-950 shrink-0 mt-0.5" />
                    <span>{person.education}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>{person.achievement}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-neutral-dark/40 shrink-0 mt-0.5" />
                    <span>{person.currentRole}</span>
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
