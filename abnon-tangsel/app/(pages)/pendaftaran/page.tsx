import { Metadata } from "next";
import { faqs } from "@/lib/data";
import { Check, Clock, FileText, Users, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pendaftaran",
  description: "Informasi pendaftaran Abang Nona Tangerang Selatan 2025.",
};

const requirements = [
  "Warga Negara Indonesia",
  "Berdomisili di Tangerang Selatan atau memiliki keterkaitan kuat",
  "Usia 17-30 tahun",
  "Minimal lulusan SMA/SMK sederajat",
  "Sehat jasmani dan rohani",
  "Tidak sedang terikat kontrak dengan agensi manapun",
];

const timeline = [
  { phase: "Pendaftaran", date: "1-30 Juni 2025" },
  { phase: "Seleksi Administrasi", date: "1-5 Juli 2025" },
  { phase: "Tes Tulis & Wawancara", date: "10-15 Juli 2025" },
  { phase: "Bootcamp", date: "20-25 Juli 2025" },
  { phase: "Grand Final", date: "17 Agustus 2025" },
];

export default function PendaftaranPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-emerald-950 py-20 md:py-28">
        <div className="container-enterprise text-center">
          <h1 className="font-display font-bold text-4xl md:text-h1 text-white mb-6">
            Pendaftaran <span className="text-gold-500">2025</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Bergabunglah dengan generasi pemimpin muda Tangerang Selatan.
            Pendaftaran gratis dan terbuka untuk semua.
          </p>
          <Button variant="gold" size="lg">
            Daftar Sekarang
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-3 mb-6">Persyaratan</h2>
              <div className="bg-white rounded-xl p-8 shadow-card space-y-4">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-950/5 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-950" />
                    </div>
                    <span className="text-neutral-dark/80">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="heading-3 mb-6">Jadwal Seleksi</h2>
              <div className="bg-white rounded-xl p-8 shadow-card space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <p className="font-jakarta font-semibold text-neutral-dark">{item.phase}</p>
                      <p className="text-sm text-neutral-dark/60">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-light">
        <div className="container-enterprise max-w-3xl">
          <div className="text-center mb-12">
            <span className="label-small mb-4 block">FAQ</span>
            <h2 className="heading-2">Pertanyaan Umum</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-card overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-jakarta font-semibold text-neutral-dark hover:text-emerald-950 transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-950/5 flex items-center justify-center text-sm font-bold text-emerald-950">
                      {i + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gold-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 pl-16">
                  <p className="text-neutral-dark/70 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
