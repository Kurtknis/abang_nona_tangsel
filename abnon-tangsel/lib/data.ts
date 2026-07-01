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
