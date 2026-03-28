"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const hours = [
  { days: "Wednesday – Thursday", time: "4pm – 9pm" },
  { days: "Friday – Saturday", time: "4pm – 10pm" },
  { days: "Sunday", time: "Closed" },
  { days: "Monday – Tuesday", time: "Closed" },
  { days: "Happy Hour", time: "Daily 4pm – 6pm" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      {/* Desktop: CSS background-attachment fixed for true parallax */}
      {/* Mobile: position fixed div */}
      <div className="hidden md:block fixed inset-0 -z-10" style={{backgroundImage:'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=85)',backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'}} />
      <div className="md:hidden fixed inset-0 -z-10" style={{backgroundImage:'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=85)',backgroundSize:'400% auto',backgroundPosition:'center top',backgroundRepeat:'no-repeat'}} />
      <div className="fixed inset-0 bg-black/60 -z-5" />

      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold text-[var(--cream)] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Us
          </h1>
          <p className="text-[var(--cream)] opacity-70 text-base max-w-lg mx-auto">
            Questions, private events, large party reservations — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Form + Info ─────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <ScrollReveal>
              <div>
                <h2
                  className="text-2xl font-semibold text-[var(--charcoal)] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Send Us a Message
                </h2>
                <p className="text-xs text-[var(--text-muted)] mb-6">
                  We'll get back to you within 24 hours.
                </p>

                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const body = [
                    `Name: ${fd.get('firstName')} ${fd.get('lastName')}`,
                    `Email: ${fd.get('email')}`,
                    `Phone: ${fd.get('phone') || 'Not provided'}`,
                    `Subject: ${fd.get('subject')}`,
                    ``,
                    `Message:`,
                    fd.get('message')
                  ].join('\n');
                  const subject = encodeURIComponent(`Contact from Website: ${fd.get('subject')}`);
                  window.location.href = `mailto:info@themonarch.us?subject=${subject}&body=${encodeURIComponent(body)}`;
                }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="firstName"
                        className="text-xs font-medium tracking-wider uppercase text-[var(--charcoal)]"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="px-4 py-2.5 bg-[var(--warm-white)] border border-[var(--charcoal)] border-opacity-10 text-sm text-[var(--charcoal)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all placeholder:text-[var(--text-muted)]"
                        placeholder="John"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="lastName"
                        className="text-xs font-medium tracking-wider uppercase text-[var(--charcoal)]"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="px-4 py-2.5 bg-[var(--warm-white)] border border-[var(--charcoal)] border-opacity-10 text-sm text-[var(--charcoal)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all placeholder:text-[var(--text-muted)]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium tracking-wider uppercase text-[var(--charcoal)]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="px-4 py-2.5 bg-[var(--warm-white)] border border-[var(--charcoal)] border-opacity-10 text-sm text-[var(--charcoal)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all placeholder:text-[var(--text-muted)]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="text-xs font-medium tracking-wider uppercase text-[var(--charcoal)]"
                    >
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="px-4 py-2.5 bg-[var(--warm-white)] border border-[var(--charcoal)] border-opacity-10 text-sm text-[var(--charcoal)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all placeholder:text-[var(--text-muted)]"
                      placeholder="(405) 000-0000"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-medium tracking-wider uppercase text-[var(--charcoal)]"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="px-4 py-2.5 bg-[var(--warm-white)] border border-[var(--charcoal)] border-opacity-10 text-sm text-[var(--charcoal)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all appearance-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Reservation Question</option>
                      <option value="private-event">Private Event / Large Party</option>
                      <option value="feedback">Feedback</option>
                      <option value="catering">Catering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-medium tracking-wider uppercase text-[var(--charcoal)]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="px-4 py-2.5 bg-[var(--warm-white)] border border-[var(--charcoal)] border-opacity-10 text-sm text-[var(--charcoal)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all resize-none placeholder:text-[var(--text-muted)]"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-[var(--charcoal)] text-[var(--cream)] text-sm font-medium tracking-wider uppercase md:hover:bg-[var(--gold)] md:hover:text-[var(--charcoal)] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Info Panel */}
            <ScrollReveal delay={0.15}>
              <div className="space-y-6">
                {/* Address */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={18} className="text-[var(--gold)]" strokeWidth={1.5} />
                    <h3
                      className="text-base font-semibold text-[var(--charcoal)]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Location
                    </h3>
                  </div>
                  <a
                    href="https://maps.google.com/?q=502+S+Main+St+Stillwater+OK+74074"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-muted)] leading-relaxed block md:hover:text-[var(--gold)] transition-colors"
                  >
                    502 S Main St<br />Stillwater, OK 74074
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone size={18} className="text-[var(--gold)]" strokeWidth={1.5} />
                    <h3
                      className="text-base font-semibold text-[var(--charcoal)]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Phone
                    </h3>
                  </div>
                  <a
                    href="tel:+14057142002"
                    className="text-sm text-[var(--text-muted)] md:hover:text-[var(--gold)] transition-colors"
                  >
                    (405) 714-2002
                  </a>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={18} className="text-[var(--gold)]" strokeWidth={1.5} />
                    <h3
                      className="text-base font-semibold text-[var(--charcoal)]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Email
                    </h3>
                  </div>
                  <a
                    href="mailto:info@themonarch.us"
                    className="text-sm text-[var(--text-muted)] md:hover:text-[var(--gold)] transition-colors"
                  >
                    info@themonarch.us
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock size={18} className="text-[var(--gold)]" strokeWidth={1.5} />
                    <h3
                      className="text-base font-semibold text-[var(--charcoal)]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Hours
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {hours.map((h) => (
                      <li
                        key={h.days}
                        className="flex justify-between items-center pb-1.5 border-b border-[var(--charcoal)] border-opacity-5"
                      >
                        <span className="text-sm text-[var(--charcoal)]">{h.days}</span>
                        <span className="text-sm text-[var(--text-muted)]">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Map */}
                <div className="rounded-sm overflow-hidden h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.4!2d-97.0584!3d36.1156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a3177a57524969%3A0x70b23b9b82c33d5!2s502+S+Main+St+Stillwater+OK!5e0!3m2!1sen!2sus!4v1700000000000!5m1!1e1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Monarch location on Google Maps"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
