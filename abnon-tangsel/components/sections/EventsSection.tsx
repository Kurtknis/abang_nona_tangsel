"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
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
                <p className="text-sm text-neutral-dark/60 line-clamp-2">{event.description}</p>
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
