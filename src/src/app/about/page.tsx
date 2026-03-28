
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const heroImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85";

const storyImage =
  "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=900&q=85";

const values = [
  {
    title: "Scratch Cooking",
    description:
      "We make everything in-house — from our stocks and sauces to our breads and desserts. No shortcuts, no compromises.",
  },
  {
    title: "Local Ingredients",
    description:
      "We build relationships with Oklahoma farmers, ranchers, and foragers. The best flavors start close to home.",
  },
  {
    title: "Classical Technique",
    description:
      "French and Italian foundations guide our kitchen. Precision, patience, and respect for tradition produce the best results.",
  },
  {
    title: "Thoughtful Hospitality",
    description:
      "Dining at The Monarch is an experience — attentive service, curated music, warm lighting, and genuine care for every guest.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      {/* Desktop: CSS background-attachment fixed for true parallax */}
      {/* Mobile: position fixed div */}
      <div className="hidden md:block fixed inset-0 -z-10" style={{backgroundImage:'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85)',backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'}} />
      <div className="md:hidden fixed inset-0 -z-10" style={{backgroundImage:'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85)',backgroundSize:'400% auto',backgroundPosition:'center top',backgroundRepeat:'no-repeat'}} />
      <div className="fixed inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent -z-5" />

      <section className="relative h-[88vh] min-h-[550px] flex items-end overflow-hidden">
        <div className="relative z-10 px-6 md:px-8 pb-16 max-w-4xl mx-auto w-full">
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-3">
            Our Story
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold text-[var(--cream)] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About The Monarch
          </h1>
        </div>
      </section>

      {/* ── Story ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-8 bg-[var(--warm-white)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={storyImage}
                  alt="Chef preparing a dish at The Monarch"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-[var(--gold)] text-sm tracking-[0.25em] uppercase mb-4">
                Our Philosophy
              </p>
              <h2
                className="text-3xl md:text-5xl font-semibold text-[var(--charcoal)] mb-8 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Cooking Worth<br />Remembering
              </h2>
              <div className="space-y-5 text-sm leading-relaxed text-[var(--text-muted)]">
                <p>
                  The Monarch was built on a belief that Stillwater deserves a restaurant that doesn't compromise. Not on ingredients. Not on technique. Not on hospitality.
                </p>
                <p>
                  We push the envelope of New American cuisine — drawing from classical French and Italian kitchens while staying firmly planted in Oklahoma. Our team sources from local farms, makes everything from scratch, and plates each dish with care.
                </p>
                <p>
                  Dining here isn't just a meal. It's an evening. Warm lighting, curated music, thoughtful service, and food that tells a story — every plate is our way of welcoming you into our home.
                </p>
                <p>
                  We cook for the guest in front of us, and we don't rest until they're genuinely taken care of.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-8 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm tracking-[0.25em] uppercase mb-3">
              What We Stand For
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold text-[var(--charcoal)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Pillars
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="border-t-2 border-[var(--gold)] pt-6">
                  <h3
                    className="text-xl font-semibold text-[var(--charcoal)] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-8 bg-[var(--warm-white)]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-sm tracking-[0.25em] uppercase mb-3">
              The People Behind The Plates
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold text-[var(--charcoal)] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet Our Team
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-muted)] max-w-xl mx-auto mb-8">
              The Monarch is more than a restaurant — it's a family of passionate cooks, servers, and hospitality professionals united by a shared vision: to create something truly special in Stillwater.
            </p>
            <div className="mt-8">
              <a
                href="https://tables.hostmeapp.com/restaurants/34277"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-3.5 bg-[var(--gold)] text-[var(--charcoal)] text-sm font-medium tracking-wider uppercase md:hover:bg-[var(--charcoal)] md:hover:text-[var(--cream)] transition-colors duration-300"
              >
                Reserve a Table
              </a>
              <p className="text-sm text-[var(--text-muted)] mt-4">
                The best way to meet our team? Come dine with us.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-[var(--charcoal)] py-16 px-6 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[var(--cream)] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Come Experience It
          </h2>
          <p className="text-[var(--cream)] opacity-60 text-sm mb-8">
            We'd love to welcome you. Reserve your table and see what sets The Monarch apart.
          </p>
          <a
            href="https://tables.hostmeapp.com/restaurants/34277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3.5 bg-[var(--gold)] text-[var(--charcoal)] text-sm font-medium tracking-wider uppercase md:hover:bg-[var(--cream)] transition-colors duration-300"
          >
            Reserve a Table
          </a>
        </div>
      </section>
    </>
  );
}
