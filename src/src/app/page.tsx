import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Utensils, Wine, Calendar, Clock, MapPin, Phone } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85";

const navFeatures = [
  {
    icon: Utensils,
    title: "Eat",
    description:
      "Savor dishes crafted from scratch with local ingredients and classical French techniques.",
    cta: "View Menu",
    href: "/menu",
  },
  {
    icon: Calendar,
    title: "Reserve",
    description:
      "Join us for an unforgettable evening. Reservations recommended.",
    cta: "Reserve a Table",
    href: "https://tables.hostmeapp.com/restaurants/34277",
    external: true,
  },
  {
    icon: Wine,
    title: "Drink",
    description:
      "Curated wines, craft cocktails, and a thoughtful happy hour menu — daily 4 to 6pm.",
    cta: "See Drinks",
    href: "/menu#drinks",
  },
];

const hours = [
  { days: "Wednesday – Thursday", time: "4pm – 9pm" },
  { days: "Friday – Saturday", time: "4pm – 10pm" },
  { days: "Happy Hour", time: "Daily 4pm – 6pm" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      {/* Desktop: CSS background-attachment fixed for true parallax */}
      {/* Mobile: position fixed div — zoomed 350% for tight crop */}
      <div className="hidden md:block fixed inset-0 -z-10" style={{backgroundImage:'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85)',backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'}} />
      <div className="md:hidden fixed inset-0 -z-10" style={{backgroundImage:'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85)',backgroundSize:'400% auto',backgroundPosition:'center top',backgroundRepeat:'no-repeat'}} />
      <div className="fixed inset-0 bg-black/55 -z-5" />

      <section className="relative min-h-[100dvh] flex items-center justify-center">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ marginTop: '-16vh' }}>
          <p
            className="text-[var(--gold)] text-sm md:text-base tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Stillwater, Oklahoma
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--cream)] mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A New American<br />Experience
          </h1>
          <p
            className="text-[var(--gold)] text-base md:text-lg italic mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pushes the envelope of New American cuisine — scratch cooking, local ingredients, classical techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tables.hostmeapp.com/restaurants/34277"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[var(--gold)] text-[var(--charcoal)] text-sm font-medium tracking-wider uppercase md:hover:bg-[var(--cream)] transition-colors duration-300"
            >
              Reserve a Table
            </a>
            <Link
              href="/menu"
              className="px-8 py-3.5 border border-[var(--cream)] border-opacity-60 text-[var(--cream)] text-sm font-medium tracking-wider uppercase md:hover:bg-[var(--cream)] md:hover:text-[var(--charcoal)] transition-all duration-300"
            >
              View Menu
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
          style={{ animationDuration: '3s' }}
        >
          <div className="w-px h-12 bg-[var(--gold)] opacity-60" />
        </div>
      </section>

      {/* ── Eat / Reserve / Drink ────────────────────────── */}
      <section className="bg-[var(--cream)] py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm tracking-[0.25em] uppercase mb-3">
              What Awaits You
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold text-[var(--charcoal)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Three Reasons to Visit
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {navFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.15}>
                <div className="bg-[var(--warm-white)] p-8 md:p-10 rounded-sm flex flex-col items-center text-center h-full border border-[var(--charcoal)] border-opacity-5 md:hover:border-opacity-20 md:hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[var(--charcoal)] flex items-center justify-center mb-6">
                    <feature.icon size={24} className="text-[var(--gold)]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-2xl font-semibold mb-3 text-[var(--charcoal)]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)] mb-8 flex-1">
                    {feature.description}
                  </p>
                  {feature.external ? (
                    <a
                      href={feature.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium tracking-wider uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 md:hover:text-[var(--charcoal)] md:hover:border-[var(--charcoal)] transition-colors"
                    >
                      {feature.cta}
                    </a>
                  ) : (
                    <Link
                      href={feature.href}
                      className="text-sm font-medium tracking-wider uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 md:hover:text-[var(--charcoal)] md:hover:border-[var(--charcoal)] transition-colors"
                    >
                      {feature.cta}
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Preview ────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-8 bg-[var(--warm-white)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal>
              <div className="flex justify-center">
                <div className="relative w-[516px] h-[480px] overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/monarch-preview-poster.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/monarch-preview.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-[var(--gold)] text-sm tracking-[0.25em] uppercase mb-4">
                Our Story
              </p>
              <h2
                className="text-3xl md:text-5xl font-semibold text-[var(--charcoal)] mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Where Classical Technique<br />Meets Local Ingredients
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-[var(--text-muted)] max-w-[50ch]">
                <p>
                  At The Monarch, every dish begins with a simple philosophy: respect the ingredient, honor the technique, and create something worth remembering.
                </p>
                <p>
                  We cook from scratch — stocks, sauces, breads, and desserts — using locally sourced ingredients whenever the season allows. Our kitchen draws from classical French and Italian traditions while staying firmly rooted in Oklahoma.
                </p>
                <p>
                  The result is a menu that surprises and satisfies, with dishes that are as thoughtful as they are delicious.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium tracking-wider uppercase text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 md:hover:text-[var(--charcoal)] md:hover:border-[var(--charcoal)] transition-colors"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Happy Hour Banner ─────────────────────────────── */}
      <section className="bg-[var(--charcoal)] py-16 md:py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 mb-6">
              <Clock size={18} className="text-[var(--gold)]" />
              <span className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase">
                Daily Happy Hour
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-semibold text-[var(--cream)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              4pm – 6pm
            </h2>
            <p className="text-[var(--cream)] opacity-70 text-base mb-8 max-w-xl mx-auto">
              Join us at the bar for specially priced cocktails, wine, and a curated selection of bites. Available every day at The Monarch.
            </p>
            <a
              href="https://tables.hostmeapp.com/restaurants/34277"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-3.5 bg-[var(--gold)] text-[var(--charcoal)] text-sm font-medium tracking-wider uppercase md:hover:bg-[var(--cream)] transition-colors duration-300"
            >
              Reserve Your Spot
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Hours & Info ──────────────────────────────────── */}
      <section className="bg-[var(--charcoal)] py-16 md:py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Hours & Location */}
            <ScrollReveal className="md:col-span-2">
              <div>
                <p className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-3">
                  Visit Us
                </p>
                <h2
                  className="text-2xl md:text-3xl font-semibold text-[var(--cream)] mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Hours &amp; Location
                </h2>
                <ul className="space-y-3">
                  {hours.map((h) => (
                    <li key={h.days} className="flex justify-between items-center pb-3 border-b border-[var(--cream)] border-opacity-10">
                      <span className="text-sm text-[var(--cream)] font-medium">{h.days}</span>
                      <span className="text-sm text-[var(--cream)] opacity-50">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal delay={0.15}>
              <div>
                <p className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-3">
                  Get in Touch
                </p>
                <h2
                  className="text-2xl md:text-3xl font-semibold text-[var(--cream)] mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Contact
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <MapPin size={16} className="text-[var(--gold)] mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs font-medium text-[var(--cream)]">Address</p>
                      <a
                        href="https://maps.google.com/?q=502+S+Main+St+Stillwater+OK+74074"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--cream)] opacity-50 md:hover:text-[var(--gold)] transition-colors"
                      >
                        502 S Main St<br />Stillwater, OK 74074
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Phone size={16} className="text-[var(--gold)] mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs font-medium text-[var(--cream)]">Phone</p>
                      <a
                        href="tel:+14057142002"
                        className="text-xs text-[var(--cream)] opacity-50 md:hover:text-[var(--gold)] transition-colors"
                      >
                        (405) 714-2002
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <svg className="w-4 h-4 text-[var(--gold)] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <p className="text-xs font-medium text-[var(--cream)]">Email</p>
                      <a
                        href="mailto:info@themonarch.us"
                        className="text-xs text-[var(--cream)] opacity-50 md:hover:text-[var(--gold)] transition-colors"
                      >
                        info@themonarch.us
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="mt-6">
                  <a
                    href="https://tables.hostmeapp.com/restaurants/34277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[var(--gold)] text-[var(--charcoal)] text-xs font-medium tracking-wider uppercase md:hover:bg-[var(--cream)] transition-colors duration-300 w-full md:w-auto"
                  >
                    <Calendar size={14} />
                    Reserve a Table
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
