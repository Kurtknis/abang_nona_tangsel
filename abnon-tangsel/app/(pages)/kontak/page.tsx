import { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { Mail, Phone, MapPin, Instagram, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi Abang Nona Tangerang Selatan.",
};

export default function KontakPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-emerald-950 py-20 md:py-28">
        <div className="container-enterprise text-center">
          <h1 className="font-display font-bold text-4xl md:text-h1 text-white mb-6">
            Hubungi <span className="text-gold-500">Kami</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Silakan hubungi kami untuk informasi lebih lanjut, kerja sama, atau
            pertanyaan.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="heading-3 mb-6">Informasi Kontak</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-950" />
                    </div>
                    <div>
                      <p className="font-jakarta font-semibold text-neutral-dark mb-1">Alamat</p>
                      <p className="text-neutral-dark/60">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/5 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-emerald-950" />
                    </div>
                    <div>
                      <p className="font-jakarta font-semibold text-neutral-dark mb-1">Email</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-neutral-dark/60 hover:text-emerald-950 transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/5 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-emerald-950" />
                    </div>
                    <div>
                      <p className="font-jakarta font-semibold text-neutral-dark mb-1">Telepon / WhatsApp</p>
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                        className="text-neutral-dark/60 hover:text-emerald-950 transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-jakarta font-semibold text-neutral-dark mb-4">Media Sosial</h3>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.social.instagram}
                    className="p-3 rounded-xl bg-emerald-950 text-white hover:bg-gold-500 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    className="p-3 rounded-xl bg-emerald-950 text-white hover:bg-gold-500 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-10 shadow-card">
              <h2 className="heading-3 mb-6">Kirim Pesan</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-jakarta font-medium text-sm text-neutral-dark mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-emerald-950/10 focus:outline-none focus:ring-2 focus:ring-emerald-950/20 font-jakarta"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block font-jakarta font-medium text-sm text-neutral-dark mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-emerald-950/10 focus:outline-none focus:ring-2 focus:ring-emerald-950/20 font-jakarta"
                      placeholder="email@anda.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-jakarta font-medium text-sm text-neutral-dark mb-2">Subjek</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-emerald-950/10 focus:outline-none focus:ring-2 focus:ring-emerald-950/20 font-jakarta"
                    placeholder="Subjek pesan"
                  />
                </div>
                <div>
                  <label className="block font-jakarta font-medium text-sm text-neutral-dark mb-2">Pesan</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-emerald-950/10 focus:outline-none focus:ring-2 focus:ring-emerald-950/20 font-jakarta resize-none"
                    placeholder="Tulis pesan Anda..."
                  />
                </div>
                <Button className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
