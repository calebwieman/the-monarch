"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[var(--charcoal)] shadow-lg transition-all duration-300 py-3 md:py-4 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="The Monarch Logo"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <span
              className="font-serif text-lg md:text-xl font-semibold text-[var(--cream)] tracking-wide hidden sm:block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Monarch
            </span>
          </Link>

          {/* Desktop Nav + Reserve */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wider text-[var(--cream)] uppercase opacity-80 md:hover:opacity-100 md:hover:text-[var(--gold)] transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href="https://tables.hostmeapp.com/restaurants/34277"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-medium tracking-wider uppercase text-[var(--charcoal)] bg-[var(--gold)] rounded-sm md:hover:bg-[var(--cream)] transition-colors duration-300"
            >
              Reserve
            </a>
          </div>

          {/* Mobile Hamburger — 3 lines that morph to X */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer — Yucca style: floating rounded panel, no overlay */}
      <div
        className={`fixed z-50 flex-col ${
          isOpen ? "nav-links nav-links--open" : "nav-links"
        } md:hidden`}
        style={{ top: "76px", right: "1rem", left: "1rem" }}
      >
        <nav className="flex flex-col gap-1 py-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium tracking-wider text-[var(--cream)] uppercase opacity-80 hover:opacity-100 hover:text-[var(--gold)] transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-2 pt-2 border-t border-[var(--gold)] border-opacity-20">
          <a
            href="https://tables.hostmeapp.com/restaurants/34277"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3 text-center text-sm font-bold tracking-wider uppercase text-[var(--charcoal)] bg-[var(--gold)] rounded-full hover:bg-[var(--cream)] transition-colors duration-300"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      {/* Nav toggle + drawer styles */}
      <style jsx>{`
        /* Desktop: hide hamburger */
        @media (min-width: 768px) {
          .nav-toggle {
            display: none !important;
          }
        }

        /* Mobile: show hamburger */
        @media (max-width: 767px) {
          .nav-toggle {
            display: inline-flex;
            width: 44px;
            height: 44px;
            border: 1px solid rgba(201, 168, 76, 0.4);
            border-radius: 50%;
            background: rgba(26, 26, 24, 0.8);
            color: #f5f0e8;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            gap: 4px;
            flex-direction: column;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
        }

        .nav-toggle:hover,
        .nav-toggle:focus-visible {
          border-color: rgba(201, 168, 76, 0.7);
          color: #C9A84C;
        }

        .nav-toggle span {
          width: 18px;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-toggle span:nth-child(2) {
          transition: none;
        }

        .nav-toggle[aria-expanded="true"] span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        .nav-toggle[aria-expanded="true"] span:nth-child(2) {
          opacity: 0;
        }
        .nav-toggle[aria-expanded="true"] span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        /* Mobile drawer — hidden by default */
        .nav-links {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: flex-start;
          gap: 0.25rem;
          padding: 1rem;
          position: fixed;
          background: rgba(26, 26, 24, 0.96);
          border: 1px solid rgba(201, 168, 76, 0.2);
          border-radius: 18px;
          backdrop-filter: blur(18px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
          opacity: 0;
          pointer-events: none;
          transform: translateY(-12px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Open state */
        .nav-links--open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
