import Link from "next/link";
import Image from "next/image";

const hours = [
  { days: "Wednesday – Thursday", time: "4pm – 9pm" },
  { days: "Friday – Saturday", time: "4pm – 10pm" },
  { days: "Happy Hour", time: "Daily 4pm – 6pm" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="The Monarch Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="40px"
                />
              </div>
              <span
                className="text-xl font-semibold text-[var(--cream)]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Monarch
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--cream)] opacity-70 max-w-[28ch]">
              Pushing the envelope of New American cuisine with scratch cooking, local ingredients, and classical techniques.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3
              className="text-sm font-medium tracking-widest uppercase text-[var(--gold)] mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hours
            </h3>
            <ul className="space-y-3">
              {hours.map((h) => (
                <li key={h.days} className="flex justify-between text-sm">
                  <span className="opacity-80">{h.days}</span>
                  <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm font-medium tracking-widest uppercase text-[var(--gold)] mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://maps.google.com/?q=502+S+Main+St+Stillwater+OK+74074"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 md:hover:opacity-100 md:hover:text-[var(--gold)] transition-opacity"
                >
                  502 S Main St<br />Stillwater, OK 74074
                </a>
              </li>
              <li>
                <a
                  href="tel:+14057142002"
                  className="opacity-80 md:hover:opacity-100 md:hover:text-[var(--gold)] transition-opacity"
                >
                  (405) 714-2002
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@themonarch.us"
                  className="opacity-80 md:hover:opacity-100 md:hover:text-[var(--gold)] transition-opacity"
                >
                  info@themonarch.us
                </a>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/themonarch502/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--cream)] opacity-50 md:hover:opacity-100 md:hover:text-[var(--gold)] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/p/The-Monarch-100090657714831/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--cream)] opacity-50 md:hover:opacity-100 md:hover:text-[var(--gold)] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--cream)] border-opacity-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <p>© {new Date().getFullYear()} The Monarch. All rights reserved.</p>
          <p>502 S Main St · Stillwater, OK · (405) 714-2002</p>
        </div>
      </div>
    </footer>
  );
}
