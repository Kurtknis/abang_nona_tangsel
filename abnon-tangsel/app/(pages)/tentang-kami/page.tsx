import { Metadata } from "next";
import { timeline } from "@/lib/data";
import { Target, Eye, Heart, Shield, Lightbulb, Users, Leaf, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Sejarah, visi, misi, dan nilai utama Abang Nona Tangerang Selatan.",
};

const coreValues = [
  { icon: Shield, title: "Integritas", desc: "Bertindak dengan jujur, bertanggung jawab, dan profesional." },
  { icon: Users, title: "Kepemimpinan", desc: "Menjadi teladan yang menginspirasi perubahan positif." },
  { icon: Handshake, title: "Kolaborasi", desc: "Membangun kemitraan lintas komunitas dan sektor." },
  { icon: Lightbulb, title: "Inovasi", desc: "Menciptakan solusi kreatif dan program berdampak." },
  { icon: Heart, title: "Pelestarian Budaya", desc: "Melindungi dan mempromosikan warisan budaya lokal." },
  { icon: Leaf, title: "Dampak Masyarakat", desc: "Menghasilkan manfaat bermakna bagi masyarakat." },
];

export default function TentangKamiPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-emerald-950 py-20 md:py-28">
        <div className="container-enterprise text-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-gold-500/20 text-gold-400 font-jakarta text-sm font-semibold mb-6">
              Profil Organisasi
            </span>
            <h1 className="font-display font-bold text-4xl md:text-h1 text-white mb-6">
              Tentang <span className="text-gold-500">Kami</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Mengenal lebih dekat sejarah, visi, misi, dan nilai-nilai yang
              menjadi fondasi Abang Nona Tangerang Selatan.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory" id="visi-misi">
        <div className="container-enterprise">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-card">
              <div className="w-14 h-14 rounded-xl bg-emerald-950/5 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-emerald-950" />
              </div>
              <h2 className="heading-3 mb-4">Visi</h2>
              <p className="body-large">
                Menciptakan pemimpin muda berdampak yang mempromosikan identitas,
                budaya, potensi pariwisata, dan citra positif Tangerang Selatan
                melalui kolaborasi, inovasi, dan pengabdian masyarakat.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-10 shadow-card">
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold-600" />
              </div>
              <h2 className="heading-3 mb-4">Misi</h2>
              <ul className="space-y-3 body-large">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                  Mempromosikan destinasi wisata Tangerang Selatan.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                  Melestarikan dan memperkenalkan budaya lokal.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                  Mendorong pengembangan kepemimpinan pemuda.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                  Membangun kolaborasi bermakna dengan komunitas dan institusi.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                  Mendukung program pemerintah melalui partisipasi aktif.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                  Mengembangkan inisiatif digital dan kreatif untuk promosi kota.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-light" id="nilai">
        <div className="container-enterprise">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-small mb-4 block">Nilai Utama</span>
            <h2 className="heading-2">Prinsip yang Kami Pegang</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-950/5 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-emerald-950" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{value.title}</h3>
                <p className="text-neutral-dark/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory" id="sejarah">
        <div className="container-enterprise">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-small mb-4 block">Perjalanan Kami</span>
            <h2 className="heading-2">Timeline Organisasi</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-emerald-950/10 md:-translate-x-px" />
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold-500 border-4 border-ivory md:-translate-x-1.5 mt-1.5" />
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div
                    className={`bg-white rounded-xl p-6 shadow-card ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 rounded-lg bg-emerald-950 text-white font-jakarta font-bold text-sm mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-dark/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
