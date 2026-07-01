📁 Project Structure
plain
abnon-tangsel/
├── app/
│   ├── (pages)/
│   │   ├── tentang-kami/
│   │   ├── program-kerja/
│   │   ├── berita/
│   │   ├── galeri/
│   │   ├── destinasi-wisata/
│   │   ├── event/
│   │   ├── pendaftaran/
│   │   ├── alumni/
│   │   ├── mitra/
│   │   └── kontak/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # Shadcn-style primitives
│   ├── layout/       # Navbar, Footer, MegaMenu
│   └── sections/     # Page sections
├── lib/
│   ├── utils.ts
│   └── data.ts
├── public/
│   └── images/
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
1. package.json
JSON
{
  "name": "abnon-tangsel",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.15.0",
    "lucide-react": "^0.460.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "class-variance-authority": "^0.7.1"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.7.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "@tailwindcss/typography": "^0.5.15"
  }
}
2. next.config.js
JavaScript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
3. tsconfig.json
JSON
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
4. tailwind.config.ts
TypeScript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: "#0E4D45",
          900: "#12665C",
          800: "#167E72",
        },
        gold: {
          500: "#C7A35A",
          400: "#D4B76E",
          600: "#B08D4A",
        },
        ivory: "#FAF7F2",
        neutral: {
          dark: "#1B1B1B",
          light: "#F8F8F8",
        },
        success: "#16A34A",
        warning: "#F59E0B",
        error: "#DC2626",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-hero": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["48px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        h2: ["36px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["30px", { lineHeight: "1.3" }],
        body: ["18px", { lineHeight: "1.6" }],
        small: ["14px", { lineHeight: "1.5" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(14, 77, 69, 0.08)",
        card: "0 4px 24px 0 rgba(27, 27, 27, 0.06)",
        elevated: "0 12px 40px 0 rgba(14, 77, 69, 0.12)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
5. app/globals.css
css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 11%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 11%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 11%;
    --primary: 173 70% 18%;
    --primary-foreground: 40 33% 97%;
    --secondary: 42 42% 57%;
    --secondary-foreground: 0 0% 11%;
    --muted: 40 33% 97%;
    --muted-foreground: 0 0% 40%;
    --accent: 40 33% 97%;
    --accent-foreground: 173 70% 18%;
    --destructive: 0 72% 51%;
    --destructive-foreground: 0 0% 100%;
    --border: 40 20% 88%;
    --input: 40 20% 88%;
    --ring: 173 70% 18%;
    --radius: 0.75rem;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply bg-ivory text-neutral-dark font-body text-body;
    font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display font-semibold text-neutral-dark;
  }

  ::selection {
    @apply bg-emerald-950/20 text-emerald-950;
  }
}

@layer components {
  .container-enterprise {
    @apply mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12;
  }

  .text-balance {
    text-wrap: balance;
  }

  .glassmorphism {
    @apply bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-white/20;
  }

  .section-padding {
    @apply py-20 md:py-28 lg:py-32;
  }

  .heading-display {
    @apply font-display font-bold text-display-hero text-neutral-dark tracking-tight;
  }

  .heading-1 {
    @apply font-display font-bold text-h1 text-neutral-dark;
  }

  .heading-2 {
    @apply font-display font-semibold text-h2 text-neutral-dark;
  }

  .heading-3 {
    @apply font-display font-semibold text-h3 text-neutral-dark;
  }

  .body-large {
    @apply font-body text-body text-neutral-dark/80 leading-relaxed;
  }

  .label-small {
    @apply font-jakarta text-small font-semibold uppercase tracking-widest text-gold-500;
  }

  .btn-primary {
    @apply inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-950 px-8 py-4 
           font-jakarta font-semibold text-white transition-all duration-300 
           hover:bg-emerald-900 hover:shadow-elevated hover:-translate-y-0.5 
           focus:outline-none focus:ring-2 focus:ring-emerald-950 focus:ring-offset-2;
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-950 
           px-8 py-4 font-jakarta font-semibold text-emerald-950 transition-all duration-300 
           hover:bg-emerald-950 hover:text-white focus:outline-none focus:ring-2 
           focus:ring-emerald-950 focus:ring-offset-2;
  }

  .btn-gold {
    @apply inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-8 py-4 
           font-jakarta font-semibold text-white transition-all duration-300 
           hover:bg-gold-600 hover:shadow-elevated hover:-translate-y-0.5;
  }

  .card-enterprise {
    @apply rounded-xl bg-white p-6 shadow-card transition-all duration-300 
           hover:shadow-elevated hover:-translate-y-1;
  }

  .link-underline {
    @apply relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] 
           after:w-0 after:bg-gold-500 after:transition-all after:duration-300 
           hover:after:w-full;
  }

  .gradient-overlay {
    @apply absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-transparent;
  }
}

@layer utilities {
  .animate-delay-100 { animation-delay: 100ms; }
  .animate-delay-200 { animation-delay: 200ms; }
  .animate-delay-300 { animation-delay: 300ms; }
  .animate-delay-400 { animation-delay: 400ms; }
  .animate-delay-500 { animation-delay: 500ms; }
}
6. lib/utils.ts
TypeScript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("id-ID").format(num);
}
7. lib/data.ts (Complete Mock Data)
TypeScript
export const siteConfig = {
  name: "Abang Nona Tangerang Selatan",
  abbreviation: "ABNON Tangsel",
  tagline: "Ciptakan Kolaborasi Penuh Arti",
  description:
    "Organisasi Duta Pariwisata, Kebudayaan, dan Pemuda resmi Kota Tangerang Selatan yang mengembangkan pemimpin muda untuk mempromosikan potensi kota.",
  url: "https://abnontangsel.id",
  ogImage: "/images/og-image.jpg",
  contact: {
    email: "info@abnontangsel.id",
    phone: "+62 812-3456-7890",
    whatsapp: "6281234567890",
    address:
      "Jl. Pahlawan Seribu, CBD BSD, Tangerang Selatan, Banten 15321",
  },
  social: {
    instagram: "https://instagram.com/abnontangsel",
    tiktok: "https://tiktok.com/@abnontangsel",
    youtube: "https://youtube.com/@abnontangsel",
  },
};

export const navLinks = [
  { label: "Beranda", href: "/" },
  {
    label: "Tentang Kami",
    href: "/tentang-kami/",
    children: [
      { label: "Sejarah", href: "/tentang-kami/#sejarah" },
      { label: "Visi & Misi", href: "/tentang-kami/#visi-misi" },
      { label: "Nilai Utama", href: "/tentang-kami/#nilai" },
      { label: "Struktur Organisasi", href: "/tentang-kami/#struktur" },
    ],
  },
  { label: "Profil", href: "/profil/" },
  {
    label: "Program Kerja",
    href: "/program-kerja/",
    children: [
      { label: "Pariwisata", href: "/program-kerja/#pariwisata" },
      { label: "Pendidikan", href: "/program-kerja/#pendidikan" },
      { label: "Sosial", href: "/program-kerja/#sosial" },
      { label: "Digital", href: "/program-kerja/#digital" },
    ],
  },
  { label: "Berita", href: "/berita/" },
  { label: "Galeri", href: "/galeri/" },
  { label: "Destinasi Wisata", href: "/destinasi-wisata/" },
  { label: "Event", href: "/event/" },
  { label: "Pendaftaran", href: "/pendaftaran/" },
  { label: "Alumni", href: "/alumni/" },
  { label: "Mitra", href: "/mitra/" },
  { label: "Kontak", href: "/kontak/" },
];

export const stats = [
  { label: "Total Alumni", value: 156, suffix: "+" },
  { label: "Program Tahunan", value: 24, suffix: "" },
  { label: "Mitra Kolaborasi", value: 38, suffix: "" },
  { label: "Destinasi Binaan", value: 12, suffix: "" },
];

export const programs = [
  {
    id: "tourism",
    category: "Pariwisata",
    title: "Open Trip Tangsel",
    description:
      "Program eksplorasi destinasi wisata Tangerang Selatan yang terbuka untuk masyarakat umum dengan pemanduan duta wisata.",
    icon: "MapPin",
    color: "bg-emerald-950",
    image: "/images/programs/open-trip.jpg",
  },
  {
    id: "tourism-2",
    category: "Pariwisata",
    title: "Jelajah Destinasi Tangsel",
    description:
      "Dokumentasi dan promosi komprehensif destinasi wisata lokal melalui konten digital dan tur berkelanjutan.",
    icon: "Compass",
    color: "bg-emerald-900",
    image: "/images/programs/jelajah.jpg",
  },
  {
    id: "education",
    category: "Pendidikan",
    title: "ANTS Goes To School",
    description:
      "Kunjungan ke sekolah-sekolah untuk memberikan edukasi pariwisata, kebudayaan, dan kepemimpinan kepada pelajar.",
    icon: "GraduationCap",
    color: "bg-gold-500",
    image: "/images/programs/goes-to-school.jpg",
  },
  {
    id: "education-2",
    category: "Pendidikan",
    title: "Tourism Ambassador Class",
    description:
      "Kelas pelatihan intensif untuk calon duta wisata dengan kurikulum komunikasi, protokol, dan promosi pariwisata.",
    icon: "Award",
    color: "bg-gold-600",
    image: "/images/programs/ambassador-class.jpg",
  },
  {
    id: "social",
    category: "Sosial",
    title: "Cerama (Cerdas Bersama)",
    description:
      "Program pengabdian masyarakat berbasis edukasi dan keterampilan untuk komunitas kurang mampu.",
    icon: "Heart",
    color: "bg-emerald-800",
    image: "/images/programs/cerama.jpg",
  },
  {
    id: "social-2",
    category: "Sosial",
    title: "Donasi Buku & Kampanye Lingkungan",
    description:
      "Inisiatif literasi dan pelestarian lingkungan melalui donasi buku serta aksi bersih-bersih.",
    icon: "BookOpen",
    color: "bg-emerald-900",
    image: "/images/programs/donasi.jpg",
  },
  {
    id: "digital",
    category: "Digital",
    title: "Podcast & Webinar",
    description:
      "Produksi konten digital untuk membahas isu pariwisata, kebudayaan, dan kepemimpinan pemuda.",
    icon: "Mic",
    color: "bg-neutral-dark",
    image: "/images/programs/podcast.jpg",
  },
  {
    id: "digital-2",
    category: "Digital",
    title: "Content Creator Academy",
    description:
      "Pelatihan pembuatan konten kreatif digital untuk promosi pariwisata dan kebudayaan daerah.",
    icon: "Video",
    color: "bg-neutral-dark",
    image: "/images/programs/content-creator.jpg",
  },
];

export const events = [
  {
    id: 1,
    title: "Grand Final Abang Nona Tangsel 2025",
    date: "2025-08-17",
    location: "ICE BSD City, Tangerang Selatan",
    category: "Grand Final",
    description:
      "Malam puncak pemilihan Abang Nona Tangerang Selatan 2025 dengan pertunjukan budaya dan penganugerahan.",
    image: "/images/events/grand-final.jpg",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Festival Budaya Nusantara Tangsel",
    date: "2025-07-12",
    location: "Taman Kota 2 BSD, Tangerang Selatan",
    category: "Festival",
    description:
      "Pameran dan pertunjukan seni budaya dari berbagai daerah di Indonesia dalam rangka memperingati Hari Ulang Tahun Kota.",
    image: "/images/events/festival-budaya.jpg",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Open Trip: Jelajah Heritage Cisauk",
    date: "2025-06-28",
    location: "Cisauk, Tangerang Selatan",
    category: "Open Trip",
    description:
      "Tur wisata edukasi ke situs-situs bersejarah di kawasan Cisauk dengan pemanduan duta wisata.",
    image: "/images/events/open-trip.jpg",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Webinar: Digital Marketing untuk UMKM Pariwisata",
    date: "2025-06-15",
    location: "Zoom Meeting",
    category: "Webinar",
    description:
      "Seminar online tentang strategi pemasaran digital untuk pelaku usaha pariwisata lokal.",
    image: "/images/events/webinar.jpg",
    status: "past",
  },
];

export const news = [
  {
    id: 1,
    title: "Abnon Tangsel 2024 Luncurkan Program Digitalisasi Destinasi Wisata",
    excerpt:
      "Inisiatif baru untuk memetakan dan mempromosikan destinasi wisata Tangerang Selatan melalui platform digital interaktif.",
    category: "Digital",
    date: "2025-06-20",
    author: "Tim Redaksi",
    image: "/images/news/digitalisasi.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Kolaborasi dengan Dinas Pariwisata: 5 Destinasi Baru Siap Dibina",
    excerpt:
      "Penandatanganan MoU antara Abnon Tangsel dan Dinas Pariwisata untuk pengembangan destinasi wisata baru.",
    category: "Pariwisata",
    date: "2025-06-15",
    author: "Tim Redaksi",
    image: "/images/news/kolaborasi.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Alumni Abnon Tangsel Raih Penghargaan Duta Wisata Banten 2025",
    excerpt:
      "Prestasi membanggakan dari alumni Abnon Tangsel yang berhasil meraih penghargaan di tingkat provinsi.",
    category: "Prestasi",
    date: "2025-06-10",
    author: "Tim Redaksi",
    image: "/images/news/prestasi.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "ANTS Goes To School: Menginspirasi 2.000 Pelajar di 15 Sekolah",
    excerpt:
      "Laporan kegiatan edukasi pariwisata dan kebudayaan yang telah menjangkau ribuan pelajar di Tangerang Selatan.",
    category: "Pendidikan",
    date: "2025-06-05",
    author: "Tim Redaksi",
    image: "/images/news/goes-to-school.jpg",
    featured: false,
  },
];

export const destinations = [
  {
    id: 1,
    name: "Taman Kota 2 BSD",
    category: "Wisata Alam",
    description:
      "Taman hijau seluas 5 hektar dengan danau buatan, jogging track, dan area rekreasi keluarga.",
    location: "BSD City, Tangerang Selatan",
    hours: "06:00 - 20:00 WIB",
    price: "Gratis",
    image: "/images/destinations/taman-kota.jpg",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Museum Pusaka",
    category: "Wisata Edukasi",
    description:
      "Museum sejarah dan budaya yang menyimpan koleksi artefak dari masa kerajaan hingga kemerdekaan.",
    location: "Ciputat, Tangerang Selatan",
    hours: "09:00 - 16:00 WIB",
    price: "Rp 15.000",
    image: "/images/destinations/museum.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Kampung Kuliner Sawah Lama",
    category: "Wisata Kuliner",
    description:
      "Kawasan kuliner tradisional dengan aneka makanan khas Tangerang dan Banten.",
    location: "Sawah Lama, Tangerang Selatan",
    hours: "10:00 - 22:00 WIB",
    price: "Variatif",
    image: "/images/destinations/kuliner.jpg",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Masjid Raya Al-Azhom",
    category: "Wisata Religi",
    description:
      "Masjid megah dengan arsitektur modern Islami yang menjadi ikon religi Tangerang Selatan.",
    location: "Cikoneng, Tangerang Selatan",
    hours: "04:00 - 22:00 WIB",
    price: "Gratis",
    image: "/images/destinations/masjid.jpg",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Rumah Kreatif Johar",
    category: "Wisata Kreatif",
    description:
      "Pusat kreativitas dan inkubator bisnis untuk seniman, pengrajin, dan pelaku ekonomi kreatif.",
    location: "Pondok Aren, Tangerang Selatan",
    hours: "09:00 - 21:00 WIB",
    price: "Gratis",
    image: "/images/destinations/kreatif.jpg",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Scientia Square Park",
    category: "Wisata Alam",
    description:
      "Taman rekreasi modern dengan wahana outdoor, skate park, dan area bermain anak.",
    location: "Gading Serpong, Tangerang Selatan",
    hours: "07:00 - 21:00 WIB",
    price: "Rp 25.000",
    image: "/images/destinations/scientia.jpg",
    rating: 4.6,
  },
];

export const alumni = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    year: "2023",
    title: "Abang Tangsel 2023",
    education: "Universitas Indonesia - Hubungan Internasional",
    achievement: "Duta Wisata Banten 2024",
    currentRole: "Konsultan Pariwisata di Kemenparekraf",
    image: "/images/alumni/ahmad.jpg",
    quote:
      "Abnon Tangsel mengubah cara pandang saya tentang kepemimpinan dan pengabdian.",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    year: "2022",
    title: "Nona Tangsel 2022",
    education: "Universitas Gadjah Mada - Komunikasi",
    achievement: "Finalis Putri Indonesia 2023",
    currentRole: "Presenter & Content Creator",
    image: "/images/alumni/siti.jpg",
    quote:
      "Kolaborasi dan inovasi adalah nilai yang saya bawa hingga kini.",
  },
  {
    id: 3,
    name: "Raden Bagus",
    year: "2021",
    title: "Abang Tangsel 2021",
    education: "ITB - Teknik Industri",
    achievement: "Young Leader Award 2022",
    currentRole: "Founder Startup Edukasi",
    image: "/images/alumni/raden.jpg",
    quote:
      "Setiap langkah di Abnon adalah investasi untuk masa depan yang lebih baik.",
  },
  {
    id: 4,
    name: "Dewi Kartika",
    year: "2020",
    title: "Nona Tangsel 2020",
    education: "Universitas Padjadjaran - Sosiologi",
    achievement: "Social Entrepreneur Award",
    currentRole: "Direktur NGO Lingkungan",
    image: "/images/alumni/dewi.jpg",
    quote:
      "Abnon mengajarkan saya arti dari dampak nyata bagi masyarakat.",
  },
];

export const partners = [
  { name: "Pemerintah Kota Tangerang Selatan", category: "Government", logo: "/images/partners/pemkot.png" },
  { name: "Dinas Pariwisata Tangsel", category: "Government", logo: "/images/partners/dispar.png" },
  { name: "Dinas Kebudayaan Tangsel", category: "Government", logo: "/images/partners/disbud.png" },
  { name: "Dinas Pemuda & Olahraga", category: "Government", logo: "/images/partners/dispora.png" },
  { name: "ICE BSD", category: "Tourism", logo: "/images/partners/ice.png" },
  { name: "AEON Mall BSD", category: "Tourism", logo: "/images/partners/aeon.png" },
  { name: "Kompas TV", category: "Media", logo: "/images/partners/kompas.png" },
  { name: "Tribun News", category: "Media", logo: "/images/partners/tribun.png" },
];

export const timeline = [
  { year: "2018", title: "Pendirian Organisasi", description: "Abang Nona Tangerang Selatan resmi didirikan sebagai organisasi duta wisata dan kebudayaan." },
  { year: "2019", title: "Program Perdana", description: "Peluncuran program Open Trip Tangsel dan ANTS Goes To School pertama." },
  { year: "2020", title: "Adaptasi Digital", description: "Transformasi program ke platform digital selama pandemi dengan webinar dan podcast." },
  { year: "2021", title: "Ekspansi Mitra", description: "Kolaborasi dengan 20+ institusi pemerintah dan swasta untuk pengembangan pariwisata." },
  { year: "2022", title: "Penghargaan Regional", description: "Abnon Tangsel meraih penghargaan organisasi duta wisata terbaik di Banten." },
  { year: "2023", title: "Pengembangan Destinasi", description: "Pembinaan 10 destinasi wisata unggulan Tangerang Selatan." },
  { year: "2024", title: "Generasi Baru", description: "Peluncuran kurikulum kepemimpinan generasi baru untuk calon anggota." },
  { year: "2025", title: "Inovasi Berkelanjutan", description: "Integrasi teknologi AI dan digital untuk promosi pariwisata kota." },
];

export const faqs = [
  { question: "Apa itu Abang Nona Tangerang Selatan?", answer: "Abang Nona Tangerang Selatan (ABNON Tangsel) adalah organisasi duta pariwisata, kebudayaan, dan pemuda resmi Kota Tangerang Selatan. Organisasi ini merupakan wadah bagi pemuda untuk mengembangkan kepemimpinan dan mempromosikan potensi kota." },
  { question: "Siapa yang boleh mendaftar?", answer: "Warga Negara Indonesia yang berdomisili di Tangerang Selatan atau memiliki keterkaitan kuat dengan kota ini, berusia 17-30 tahun, dan memenuhi kriteria kesehatan serta pendidikan." },
  { question: "Apa saja persyaratan usia?", answer: "Calon peserta harus berusia minimal 17 tahun dan maksimal 30 tahun pada saat pendaftaran dibuka." },
  { question: "Apa manfaat bergabung dengan Abnon Tangsel?", answer: "Pengembangan kepemimpinan, jaringan profesional, akses ke program pemerintah, pelatihan pariwisata dan komunikasi, serta kesempatan untuk berkontribusi langsung bagi kota." },
  { question: "Bagaimana proses seleksi?", answer: "Proses seleksi meliputi administrasi, tes tulis, tes kesehatan, wawancara, dan grand final yang menilai pengetahuan pariwisata, kebudayaan, dan kemampuan publik speaking." },
  { question: "Apakah ada biaya pendaftaran?", answer: "Tidak ada biaya pendaftaran. Abnon Tangsel terbuka untuk semua kalangan tanpa dipungut biaya apapun." },
  { question: "Berapa lama program berlangsung?", answer: "Masa bakti anggota Abnon Tangsel adalah 1 tahun, dengan berbagai program yang berjalan sepanjang tahun." },
  { question: "Kegiatan apa saja yang dilakukan?", answer: "Tourism campaign, festival budaya, school visit, community outreach, podcast, webinar, content creation, dan partisipasi dalam acara pemerintah." },
  { question: "Apakah pelajar bisa mendaftar?", answer: "Ya, pelajar SMA/SMK sederajat dan mahasiswa sangat dianjurkan untuk mendaftar sebagai bagian dari pengembangan pemuda." },
  { question: "Apakah pekerja bisa mendaftar?", answer: "Ya, pekerja atau profesional muda yang memenuhi kriteria usia dan domisili dapat mendaftar." },
  { question: "Bagaimana cara menghubungi panitia?", answer: "Panitia dapat dihubungi melalui email info@abnontangsel.id, WhatsApp +62 812-3456-7890, atau DM Instagram @abnontangsel." },
  { question: "Di mana pengumuman resmi dipublikasikan?", answer: "Semua pengumuman resmi dipublikasikan di website ini, Instagram @abnontangsel, dan surat edaran resmi dari Sekretariat Abnon Tangsel." },
];
8. components/ui/Button.tsx
tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-jakarta font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-950 text-white hover:bg-emerald-900 hover:shadow-elevated hover:-translate-y-0.5 focus:ring-emerald-950",
        secondary:
          "border-2 border-emerald-950 text-emerald-950 hover:bg-emerald-950 hover:text-white focus:ring-emerald-950",
        gold: "bg-gold-500 text-white hover:bg-gold-600 hover:shadow-elevated hover:-translate-y-0.5 focus:ring-gold-500",
        ghost:
          "text-emerald-950 hover:bg-emerald-950/5 focus:ring-emerald-950",
        link: "text-emerald-950 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "px-8 py-4 text-base",
        sm: "px-6 py-3 text-sm",
        lg: "px-10 py-5 text-lg",
        icon: "h-10 w-10 p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
9. components/ui/Badge.tsx
tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "emerald" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-jakarta uppercase tracking-wider",
        variant === "default" && "bg-neutral-light text-neutral-dark",
        variant === "gold" && "bg-gold-500/10 text-gold-600",
        variant === "emerald" && "bg-emerald-950/10 text-emerald-950",
        variant === "outline" && "border border-emerald-950/20 text-emerald-950",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
10. components/ui/Card.tsx
tsx
import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl bg-white shadow-card transition-all duration-300 hover:shadow-elevated",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-display font-semibold text-xl leading-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-neutral-dark/60 leading-relaxed", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
11. components/layout/Navbar.tsx
tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Instagram,
  Youtube,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glassmorphism shadow-glass py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-enterprise">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg bg-emerald-950 flex items-center justify-center overflow-hidden">
                <span className="text-gold-500 font-display font-bold text-lg md:text-xl">
                  A
                </span>
              </div>
              <div className="hidden md:block">
                <p className="font-display font-bold text-sm leading-tight text-emerald-950">
                  ABANG NONA
                </p>
                <p className="font-jakarta text-[10px] font-semibold tracking-widest text-gold-500 uppercase">
                  Tangerang Selatan
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg font-jakarta text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-emerald-950 bg-emerald-950/5"
                        : "text-neutral-dark/70 hover:text-emerald-950 hover:bg-emerald-950/5"
                    )}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-elevated border border-emerald-950/5 overflow-hidden"
                      >
                        <div className="p-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-jakarta text-neutral-dark/80 hover:text-emerald-950 hover:bg-emerald-950/5 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden xl:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-neutral-dark/60 hover:text-emerald-950 hover:bg-emerald-950/5 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-neutral-dark/60 hover:text-emerald-950 hover:bg-emerald-950/5 transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
              <Button size="sm" className="gap-2">
                Daftar Abang Nona
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-emerald-950 hover:bg-emerald-950/5"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ivory pt-24 px-6 pb-8 overflow-y-auto xl:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl font-jakarta font-medium transition-colors",
                      pathname === link.href
                        ? "bg-emerald-950 text-white"
                        : "text-neutral-dark hover:bg-emerald-950/5"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-gold-500/30 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="px-4 py-2 rounded-lg text-sm text-neutral-dark/70 hover:text-emerald-950 hover:bg-emerald-950/5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-4">
              <Button className="w-full">Daftar Abang Nona</Button>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={siteConfig.social.instagram}
                  className="p-3 rounded-full bg-emerald-950/5 text-emerald-950"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  className="p-3 rounded-full bg-emerald-950/5 text-emerald-950"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
12. components/layout/Footer.tsx
tsx
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
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gold-500/20 flex items-center justify-center">
                <span className="text-gold-500 font-display font-bold text-2xl">
                  A
                </span>
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">
                  ABANG NONA
                </p>
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

          {/* Navigation */}
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

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-jakarta font-semibold text-sm uppercase tracking-wider text-gold-500 mb-6">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                <span className="text-sm text-white/70">
                  {siteConfig.contact.address}
                </span>
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

      {/* Bottom Bar */}
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
13. components/sections/HeroSection.tsx
tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Calendar, Landmark } from "lucide-react";
import { stats, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const statIcons = [Users, Calendar, Landmark, MapPin];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-emerald-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-800/30 rounded-full blur-3xl" />

      <div className="container-enterprise relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/20 text-gold-400 font-jakarta text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                Organisasi Duta Resmi Kota Tangerang Selatan
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-display-hero text-white leading-[1.1] tracking-tight"
            >
              Abang Nona
              <br />
              <span className="text-gold-500">Tangerang Selatan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl font-body"
            >
              {siteConfig.tagline}. Mengembangkan pemimpin muda untuk
              mempromosikan pariwisata, kebudayaan, dan potensi positif Kota
              Tangerang Selatan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="gold" size="lg" asChild>
                <Link href="/pendaftaran/">
                  Daftar Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-emerald-950"
                asChild
              >
                <Link href="/tentang-kami/">Pelajari Lebih Lanjut</Link>
              </Button>
            </motion.div>
          </div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-emerald-900/50 border border-gold-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gold-500/20 flex items-center justify-center">
                    <span className="text-gold-500 font-display font-bold text-4xl">
                      A
                    </span>
                  </div>
                  <p className="text-white/60 font-jakarta text-sm">
                    Official Portrait
                    <br />
                    Abnon Tangsel 2025
                  </p>
                </div>
              </div>
              {/* Decorative Frame */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold-500/30 rounded-xl" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <div
                key={stat.label}
                className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold-500/30 transition-colors group"
              >
                <Icon className="w-6 h-6 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-display font-bold text-3xl md:text-4xl text-white">
                  {stat.value}
                  <span className="text-gold-500">{stat.suffix}</span>
                </p>
                <p className="font-jakarta text-sm text-white/60 mt-1">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
14. components/sections/AboutPreview.tsx
tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const values = [
  {
    icon: Eye,
    title: "Visi",
    desc: "Menciptakan pemimpin muda berdampak yang mempromosikan identitas, budaya, dan potensi pariwisata Tangerang Selatan.",
  },
  {
    icon: Target,
    title: "Misi",
    desc: "Membangun kolaborasi bermakna melalui inovasi, pengabdian masyarakat, dan partisipasi aktif dalam program pemerintah.",
  },
  {
    icon: Heart,
    title: "Nilai",
    desc: "Integritas, Kepemimpinan, Kolaborasi, Inovasi, Pelestarian Budaya, dan Dampak Masyarakat.",
  },
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-emerald-950/10 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-emerald-950/10 flex items-center justify-center mb-4">
                    <span className="text-emerald-950 font-display font-bold text-3xl">
                      A
                    </span>
                  </div>
                  <p className="text-emerald-950/60 font-jakarta text-sm">
                    Dokumentasi Kegiatan
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-500/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-emerald-950/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="label-small mb-4 block">Tentang Kami</span>
              <h2 className="heading-2 mb-6">
                Membangun Pemimpin Muda untuk{" "}
                <span className="text-gold-500">Tangerang Selatan</span>
              </h2>
              <p className="body-large">
                Abang Nona Tangerang Selatan bukan sekadar organisasi pageant.
                Kami adalah organisasi kepemimpinan dan kebangsawanan yang
                berfokus pada pengembangan pemuda untuk menjadi perwakilan
                publik, advokat pariwisata, dan promotor kebudayaan kota.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/5 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-emerald-950" />
                  </div>
                  <h4 className="font-jakarta font-semibold text-neutral-dark">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-dark/60 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <Button asChild>
              <Link href="/tentang-kami/">
                Sejarah Lengkap Organisasi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
15. components/sections/ProgramsSection.tsx
tsx
"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Compass,
  GraduationCap,
  Award,
  Heart,
  BookOpen,
  Mic,
  Video,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { programs } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Compass,
  GraduationCap,
  Award,
  Heart,
  BookOpen,
  Mic,
  Video,
};

export default function ProgramsSection() {
  return (
    <section className="section-padding bg-neutral-light">
      <div className="container-enterprise">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="label-small mb-4 block">Program Kerja</span>
          <h2 className="heading-2 mb-4">
            Kolaborasi Penuh <span className="text-gold-500">Arti</span>
          </h2>
          <p className="body-large">
            Berbagai program strategis yang mencakup pariwisata, pendidikan,
            sosial, dan digital untuk mengembangkan potensi kota dan pemuda.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = iconMap[program.icon] || MapPin;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 ${program.color}`}
                />
                <div
                  className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <Badge variant="emerald" className="mb-3">
                  {program.category}
                </Badge>
                <h3 className="font-display font-semibold text-lg mb-2 text-neutral-dark group-hover:text-emerald-950 transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm text-neutral-dark/60 leading-relaxed mb-4">
                  {program.description}
                </p>
                <Link
                  href="/program-kerja/"
                  className="inline-flex items-center gap-1 text-sm font-jakarta font-semibold text-emerald-950 hover:text-gold-500 transition-colors"
                >
                  Detail Program
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
16. components/sections/EventsSection.tsx
tsx
"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { events } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function EventsSection() {
  const upcoming = events.filter((e) => e.status === "upcoming").slice(0, 3);

  return (
    <section className="section-padding bg-ivory">
      <div className="container-enterprise">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="label-small mb-4 block">Agenda</span>
            <h2 className="heading-2">
              Event <span className="text-gold-500">Mendatang</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button variant="secondary" asChild>
              <Link href="/event/">
                Lihat Semua Event
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] bg-emerald-950/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-emerald-950/30 font-display text-4xl font-bold">
                    {event.category[0]}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="gold">{event.category}</Badge>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-display font-semibold text-xl text-neutral-dark group-hover:text-emerald-950 transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-neutral-dark/60">
                    <Calendar className="w-4 h-4 text-gold-500" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-dark/60">
                    <MapPin className="w-4 h-4 text-gold-500" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-dark/60 line-clamp-2">
                  {event.description}
                </p>
                <Link
                  href={`/event/#${event.id}`}
                  className="inline-flex items-center gap-1 text-sm font-jakarta font-semibold text-emerald-950 hover:text-gold-500 transition-colors"
                >
                  Detail Event
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
17. components/sections/NewsSection.tsx
tsx
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
          {/* Featured Article */}
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
                <p className="text-neutral-dark/60 leading-relaxed">
                  {featured.excerpt}
                </p>
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

          {/* Side Articles */}
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
                  <Badge variant="outline" className="w-fit">
                    {article.category}
                  </Badge>
                  <h4 className="font-display font-semibold text-base text-neutral-dark group-hover:text-emerald-950 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <span className="text-xs text-neutral-dark/50">
                    {formatDate(article.date)}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
18. components/sections/TourismSection.tsx
tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { destinations } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

export default function TourismSection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-enterprise">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="label-small mb-4 block">Destinasi Wisata</span>
          <h2 className="heading-2 mb-4">
            Jelajahi <span className="text-gold-500">Tangerang Selatan</span>
          </h2>
          <p className="body-large">
            Temukan keindahan dan kekayaan destinasi wisata yang dibina dan
            dipromosikan oleh Abnon Tangsel.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.slice(0, 6).map((dest, index) => (
            <motion.article
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] bg-emerald-950/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-emerald-950/20 font-display text-5xl font-bold">
                    {dest.name[0]}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="emerald">{dest.category}</Badge>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                  <Star className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                  <span className="text-xs font-semibold">{dest.rating}</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-display font-semibold text-lg text-neutral-dark group-hover:text-emerald-950 transition-colors">
                  {dest.name}
                </h3>
                <div className="flex items-start gap-2 text-sm text-neutral-dark/60">
                  <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <span>{dest.location}</span>
                </div>
                <p className="text-sm text-neutral-dark/60 line-clamp-2">
                  {dest.description}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-sm font-jakarta font-semibold text-emerald-950">
                    {dest.price}
                  </span>
                  <Link
                    href="/destinasi-wisata/"
                    className="inline-flex items-center gap-1 text-sm font-jakarta font-semibold text-gold-500 hover:text-gold-600 transition-colors"
                  >
                    Detail
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/destinasi-wisata/"
            className="inline-flex items-center gap-2 text-emerald-950 font-jakarta font-semibold hover:text-gold-500 transition-colors"
          >
            Lihat Semua Destinasi
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
19. components/sections/AlumniSection.tsx
tsx
"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import { alumni } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export default function AlumniSection() {
  return (
    <section className="section-padding bg-emerald-950 text-white overflow-hidden">
      <div className="container-enterprise">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gold-500/20 text-gold-400 font-jakarta text-sm font-semibold mb-4">
              Alumni Spotlight
            </span>
            <h2 className="font-display font-bold text-3xl md:text-h2 text-white">
              Kisah Sukses <span className="text-gold-500">Alumni</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button
              variant="secondary"
              className="border-white/30 text-white hover:bg-white hover:text-emerald-950"
              asChild
            >
              <Link href="/alumni/">
                Jaringan Alumni
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alumni.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gold-500/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-gold-500/30 mb-4" />
              <p className="text-sm text-white/70 leading-relaxed mb-6 italic">
                &ldquo;{person.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                  <span className="text-gold-500 font-display font-bold">
                    {person.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-jakarta font-semibold text-white text-sm">
                    {person.name}
                  </p>
                  <p className="text-xs text-gold-500">{person.title}</p>
                  <p className="text-xs text-white/50 mt-0.5">
                    {person.currentRole}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
20. components/sections/PartnersSection.tsx
tsx
"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/data";

export default function PartnersSection() {
  return (
    <section className="py-16 md:py-20 bg-neutral-light">
      <div className="container-enterprise">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="label-small mb-4 block">Mitra Kami</span>
          <h2 className="heading-2">Kolaborasi Strategis</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-lg bg-emerald-950/5 flex items-center justify-center">
                <span className="text-emerald-950 font-display font-bold text-xl">
                  {partner.name[0]}
                </span>
              </div>
              <div className="text-center">
                <p className="font-jakarta font-semibold text-sm text-neutral-dark">
                  {partner.name}
                </p>
                <p className="text-xs text-neutral-dark/50">{partner.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
21. components/sections/CTASection.tsx
tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container-enterprise">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-emerald-950 p-8 md:p-16 text-center"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-800/30 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              Jadilah Bagian dari{" "}
              <span className="text-gold-500">Perubahan</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Bergabunglah dengan Abang Nona Tangerang Selatan dan jadilah
              pemimpin muda yang berkontribusi nyata bagi pariwisata dan
              kebudayaan kota.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/pendaftaran/">
                  Daftar Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-emerald-950"
                asChild
              >
                <Link href="/kontak/">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
22. app/layout.tsx
tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.abbreviation}`,
    template: `%s | ${siteConfig.abbreviation}`,
  },
  description: siteConfig.description,
  keywords: [
    "Abang Nona Tangsel",
    "Duta Wisata Tangerang Selatan",
    "Pariwisata Tangsel",
    "Kebudayaan Tangsel",
    "Pemuda Tangerang Selatan",
    "ABNON",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              alternateName: siteConfig.abbreviation,
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo.png`,
              sameAs: [
                siteConfig.social.instagram,
                siteConfig.social.youtube,
                siteConfig.social.tiktok,
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.contact.phone,
                contactType: "customer service",
                areaServed: "ID",
                availableLanguage: "Indonesian",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.contact.address,
                addressLocality: "Tangerang Selatan",
                addressRegion: "Banten",
                addressCountry: "ID",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
23. app/page.tsx (Homepage)
tsx
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ProgramsSection from "@/components/sections/ProgramsSection";
import EventsSection from "@/components/sections/EventsSection";
import NewsSection from "@/components/sections/NewsSection";
import TourismSection from "@/components/sections/TourismSection";
import AlumniSection from "@/components/sections/AlumniSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProgramsSection />
      <EventsSection />
      <NewsSection />
      <TourismSection />
      <AlumniSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}
24. app/tentang-kami/page.tsx
tsx
import { Metadata } from "next";
import { motion } from "framer-motion";
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
      {/* Header */}
      <section className="bg-emerald-950 py-20 md:py-28">
        <div className="container-enterprise text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-ivory" id="visi-misi">
        <div className="container-enterprise">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 md:p-10 shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-950/5 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-emerald-950" />
              </div>
              <h2 className="heading-3 mb-4">Visi</h2>
              <p className="body-large">
                Menciptakan pemimpin muda berdampak yang mempromosikan identitas,
                budaya, potensi pariwisata, dan citra positif Tangerang Selatan
                melalui kolaborasi, inovasi, dan pengabdian masyarakat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 md:p-10 shadow-card"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-neutral-light" id="nilai">
        <div className="container-enterprise">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-small mb-4 block">Nilai Utama</span>
            <h2 className="heading-2">Prinsip yang Kami Pegang</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-950/5 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-emerald-950" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-dark/60 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-ivory" id="sejarah">
        <div className="container-enterprise">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-small mb-4 block">Perjalanan Kami</span>
            <h2 className="heading-2">Timeline Organisasi</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-emerald-950/10 md:-translate-x-px" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-dark/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
25. app/program-kerja/page.tsx
tsx
import { Metadata } from "next";
import { motion } from "framer-motion";
import { programs } from "@/lib/data";
import {
  MapPin,
  Compass,
  GraduationCap,
  Award,
  Heart,
  BookOpen,
  Mic,
  Video,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Program Kerja",
  description:
    "Program strategis Abnon Tangsel dalam bidang pariwisata, pendidikan, sosial, dan digital.",
};

const iconMap: Record<string, React.ElementType> = {
  MapPin, Compass, GraduationCap, Award, Heart, BookOpen, Mic, Video,
};

const categories = [
  { id: "pariwisata", label: "Pariwisata" },
  { id: "pendidikan", label: "Pendidikan" },
  { id: "sosial", label: "Sosial" },
  { id: "digital", label: "Digital" },
];

export default function ProgramKerjaPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-emerald-950 py-20 md:py-28">
        <div className="container-enterprise text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-gold-500/20 text-gold-400 font-jakarta text-sm font-semibold mb-6">
              Program Strategis
            </span>
            <h1 className="font-display font-bold text-4xl md:text-h1 text-white mb-6">
              Program <span className="text-gold-500">Kerja</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Inisiatif konkret yang mencakup pariwisata, pendidikan, sosial, dan
              digital untuk kemajuan Tangerang Selatan.
            </p>
          </motion.div>
        </div>
      </section>

      {categories.map((cat) => {
        const catPrograms = programs.filter((p) => p.category === cat.label);
        return (
          <section key={cat.id} className="section-padding bg-ivory" id={cat.id}>
            <div className="container-enterprise">
              <div className="mb-12">
                <h2 className="heading-2 mb-2">{cat.label}</h2>
                <div className="w-16 h-1 bg-gold-500 rounded-full" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {catPrograms.map((program, index) => {
                  const Icon = iconMap[program.icon] || MapPin;
                  return (
                    <motion.div
                      key={program.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-300"
                    >
                      <div className="flex items-start gap-6">
                        <div className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-3">
                          <Badge variant="emerald">{program.category}</Badge>
                          <h3 className="font-display font-semibold text-xl">
                            {program.title}
                          </h3>
                          <p className="text-neutral-dark/60 leading-relaxed">
                            {program.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
26. app/berita/page.tsx
tsx
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
          {/* Search & Filter */}
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

          {/* Featured */}
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

          {/* Grid */}
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
                  <p className="text-sm text-neutral-dark/60 line-clamp-2">
                    {article.excerpt}
                  </p>
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
27. app/galeri/page.tsx
tsx
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
            {galleries.map((gallery, index) => (
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
                  <p className="text-white/70 text-sm mt-1">
                    {gallery.count} foto
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
28. app/destinasi-wisata/page.tsx
tsx
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
                  <h3 className="font-display font-semibold text-xl">
                    {dest.name}
                  </h3>
                  <p className="text-sm text-neutral-dark/60 leading-relaxed">
                    {dest.description}
                  </p>
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
                    <span className="font-jakarta font-semibold text-emerald-950">
                      {dest.price}
                    </span>
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
29. app/event/page.tsx
tsx
import { Metadata } from "next";
import { events } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Event",
  description: "Kalender event dan kegiatan Abnon Tangsel.",
};

export default function EventPage() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <div className="pt-24 pb-20">
      <section className="bg-emerald-950 py-20 md:py-28">
        <div className="container-enterprise text-center">
          <h1 className="font-display font-bold text-4xl md:text-h1 text-white mb-6">
            Kalender <span className="text-gold-500">Event</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Jadwal lengkap event dan kegiatan Abnon Tangsel.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-enterprise">
          <h2 className="heading-3 mb-8">Event Mendatang</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {upcoming.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-emerald-950/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-emerald-950/20 font-display text-6xl font-bold">
                      {event.title[0]}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold">{event.category}</Badge>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-semibold text-lg">
                    {event.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-neutral-dark/60">
                      <Calendar className="w-4 h-4 text-gold-500" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-dark/60">
                      <MapPin className="w-4 h-4 text-gold-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-dark/60 line-clamp-2">
                    {event.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-jakarta font-semibold text-emerald-950 hover:text-gold-500"
                  >
                    Detail Event
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <h2 className="heading-3 mb-8">Event Sebelumnya</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {past.map((event) => (
              <article
                key={event.id}
                className="bg-white/60 rounded-xl overflow-hidden shadow-card opacity-75"
              >
                <div className="relative aspect-[16/10] bg-emerald-950/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-emerald-950/10 font-display text-6xl font-bold">
                      {event.title[0]}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-semibold text-lg text-neutral-dark/70">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-neutral-dark/50">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)}</span>
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
30. app/pendaftaran/page.tsx
tsx
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
            {/* Requirements */}
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

            {/* Timeline */}
            <div>
              <h2 className="heading-3 mb-6">Jadwal Seleksi</h2>
              <div className="bg-white rounded-xl p-8 shadow-card space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <p className="font-jakarta font-semibold text-neutral-dark">
                        {item.phase}
                      </p>
                      <p className="text-sm text-neutral-dark/60">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-neutral-light">
        <div className="container-enterprise max-w-3xl">
          <div className="text-center mb-12">
            <span className="label-small mb-4 block">FAQ</span>
            <h2 className="heading-2">Pertanyaan Umum</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl shadow-card overflow-hidden"
              >
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
                  <p className="text-neutral-dark/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
31. app/alumni/page.tsx
tsx
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
                  <span className="text-emerald-950 font-display font-bold text-3xl">
                    {person.name[0]}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg">
                  {person.name}
                </h3>
                <p className="text-gold-500 text-sm font-jakarta font-medium mb-4">
                  {person.title}
                </p>
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
32. app/mitra/page.tsx
tsx
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
                        <span className="text-emerald-950 font-display font-bold text-2xl">
                          {partner.name[0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-jakarta font-semibold text-sm text-neutral-dark">
                          {partner.name}
                        </p>
                        <p className="text-xs text-neutral-dark/50">
                          {partner.category}
                        </p>
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
33. app/kontak/page.tsx
tsx
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
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-3 mb-6">Informasi Kontak</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-950" />
                    </div>
                    <div>
                      <p className="font-jakarta font-semibold text-neutral-dark mb-1">
                        Alamat
                      </p>
                      <p className="text-neutral-dark/60">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/5 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-emerald-950" />
                    </div>
                    <div>
                      <p className="font-jakarta font-semibold text-neutral-dark mb-1">
                        Email
                      </p>
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
                      <p className="font-jakarta font-semibold text-neutral-dark mb-1">
                        Telepon / WhatsApp
                      </p>
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
                <h3 className="font-jakarta font-semibold text-neutral-dark mb-4">
                  Media Sosial
                </h3>
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

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-card">
              <h2 className="heading-3 mb-6">Kirim Pesan</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-jakarta font-medium text-sm text-neutral-dark mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-emerald-950/10 focus:outline-none focus:ring-2 focus:ring-emerald-950/20 font-jakarta"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block font-jakarta font-medium text-sm text-neutral-dark mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-emerald-950/10 focus:outline-none focus:ring-2 focus:ring-emerald-950/20 font-jakarta"
                      placeholder="email@anda.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-jakarta font-medium text-sm text-neutral-dark mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-emerald-950/10 focus:outline-none focus:ring-2 focus:ring-emerald-950/20 font-jakarta"
                    placeholder="Subjek pesan"
                  />
                </div>
                <div>
                  <label className="block font-jakarta font-medium text-sm text-neutral-dark mb-2">
                    Pesan
                  </label>
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
34. app/profil/page.tsx
tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil",
  description: "Profil anggota Abang Nona Tangerang Selatan.",
};

export default function ProfilPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-emerald-950 py-20 md:py-28">
        <div className="container-enterprise text-center">
          <h1 className="font-display font-bold text-4xl md:text-h1 text-white mb-6">
            Profil <span className="text-gold-500">Anggota</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Kenali lebih dekat para duta wisata dan kebudayaan Tangerang Selatan.
          </p>
        </div>
      </section>
      <section className="section-padding bg-ivory">
        <div className="container-enterprise text-center">
          <p className="text-neutral-dark/60">Halaman profil sedang dalam pengembangan.</p>
        </div>
      </section>
    </div>
  );
}
🚀 Build & Deploy Instructions
bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for static export
npm run build

# 4. Deploy /dist folder to Vercel, Netlify, or GitHub Pages