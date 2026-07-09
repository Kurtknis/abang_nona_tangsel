import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";

export default function Footer() {
  const mainLinks = navLinks.filter((_, i) => i < 6);
  const otherLinks = navLinks.filter((_, i) => i >= 6);

  return (
    <footer className="bg-emerald-950 text-white">
      <div className="container-enterprise py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white">
                <Image
                  src="/images/masterprofile.png"
                  alt="Abang Nona Tangerang Selatan"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">ABANG NONA</p>
                <p className="font-jakarta text-xs font-semibold tracking-widest text-gold-500 uppercase">
                  Tangerang Selatan
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-gold-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="p-2.5 rounded-full bg-white/10 hover:bg-gold-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-jakarta font-semibold text-sm uppercase tracking-wider text-gold-500 mb-6">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-jakarta font-semibold text-sm uppercase tracking-wider text-gold-500 mb-6">
              Lainnya
            </h4>
            <ul className="space-y-3">
              {otherLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-jakarta font-semibold text-sm uppercase tracking-wider text-gold-500 mb-6">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                <span className="text-sm text-white/70">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-enterprise py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} Abang Nona Tangerang Selatan. All
            rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Dinas Pariwisata Kota Tangerang Selatan
          </p>
        </div>
      </div>
    </footer>
  );
}
