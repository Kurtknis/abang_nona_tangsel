import { Metadata } from "next";
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
  MapPin,
  Compass,
  GraduationCap,
  Award,
  Heart,
  BookOpen,
  Mic,
  Video,
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
          <div>
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
          </div>
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
                    <div
                      key={program.id}
                      className="bg-white rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-300"
                    >
                      <div className="flex items-start gap-6">
                        <div className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-3">
                          <Badge variant="emerald">{program.category}</Badge>
                          <h3 className="font-display font-semibold text-xl">{program.title}</h3>
                          <p className="text-neutral-dark/60 leading-relaxed">{program.description}</p>
                        </div>
                      </div>
                    </div>
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
