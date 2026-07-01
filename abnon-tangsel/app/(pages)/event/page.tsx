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
                  <h3 className="font-display font-semibold text-lg">{event.title}</h3>
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
                  <p className="text-sm text-neutral-dark/60 line-clamp-2">{event.description}</p>
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
                  <h3 className="font-display font-semibold text-lg text-neutral-dark/70">{event.title}</h3>
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
