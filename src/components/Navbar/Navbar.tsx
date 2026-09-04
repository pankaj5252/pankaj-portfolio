import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { number: "01", label: "Projects", href: "#projects" },
    { number: "02", label: "About", href: "#about" },
    { number: "03", label: "Markets", href: "#markets" },
    { number: "04", label: "Skills", href: "#skills" },
    { number: "05", label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px]">

        {/* ================= NAVBAR ================= */}
        <nav className="relative flex h-[72px] items-center justify-between rounded-full border border-white/[0.1] bg-[#050505]/80 px-3 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:px-4">

          {/* Top Highlight */}
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* ================= LOGO ================= */}
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="group/logo flex items-center gap-3"
          >
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition-all duration-500 group-hover/logo:border-cyan-400/40 group-hover/logo:bg-cyan-400/[0.06]">

              {/* Inner Ring */}
              <span className="absolute inset-1.5 rounded-full border border-white/[0.06]" />

              {/* Initials */}
              <span className="relative text-[11px] font-bold tracking-[-0.05em] text-white">
                PK
              </span>

              {/* Online Status */}
              <span className="absolute right-0 top-1 h-2 w-2 rounded-full border-2 border-[#050505] bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            </div>

            {/* Logo Text */}
            <div className="hidden sm:block">
              <p className="text-[13px] font-semibold tracking-[-0.02em] text-white">
                Pankaj Kale
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.32em] text-white/40">
                Code · AI · Markets
              </p>
            </div>
          </a>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-white/[0.08] bg-white/[0.035] p-1 md:flex">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group/item relative flex items-center gap-2 rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-white/[0.08]"
              >
                {/* Number */}
                <span className="text-[7px] font-medium text-white/30 transition-colors duration-300 group-hover/item:text-cyan-400">
                  {item.number}
                </span>

                {/* Label */}
                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 group-hover/item:text-white">
                  {item.label}
                </span>

                {/* Hover Indicator */}
                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 group-hover/item:w-3" />
              </a>
            ))}

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="ml-auto flex items-center gap-2">

            {/* Availability */}
            <div className="hidden items-center gap-2 rounded-full border border-emerald-400/[0.12] bg-emerald-400/[0.04] px-4 py-3 lg:flex">

              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[7px] uppercase tracking-[0.25em] text-white/45">
                Available
              </span>

            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="group/cta relative hidden h-12 items-center gap-4 overflow-hidden rounded-full bg-white px-5 text-[9px] font-bold uppercase tracking-[0.18em] !text-black transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)] sm:flex"
            >
              <span className="!text-black">
                Let's Talk
              </span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-sm text-white transition-transform duration-500 group-hover/cta:rotate-45">
                ↗
              </span>
            </a>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] transition-all duration-300 hover:border-white/20 md:hidden"
            >
              <div className="flex w-4 flex-col gap-1.5">

                <span
                  className={`h-px w-full bg-white transition-all duration-300 ${
                    isOpen
                      ? "translate-y-[4px] rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`h-px w-full bg-white transition-all duration-300 ${
                    isOpen
                      ? "-rotate-45"
                      : ""
                  }`}
                />

              </div>
            </button>

          </div>
        </nav>

        {/* ================= MOBILE NAVIGATION ================= */}
        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            isOpen
              ? "mt-3 max-h-[750px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[28px] border border-white/[0.1] bg-[#070707]/95 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">

            {/* Mobile Header */}
            <div className="flex items-center justify-between px-4 py-3">

              <span className="text-[8px] uppercase tracking-[0.3em] text-white/35">
                Navigation
              </span>

              <span className="text-[8px] uppercase tracking-[0.2em] text-cyan-400/70">
                PK · 2026
              </span>

            </div>

            <div className="h-px bg-white/[0.07]" />

            {/* Mobile Links */}
            <div className="py-2">

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 hover:bg-white/[0.05]"
                >

                  <div className="flex items-center gap-5">

                    {/* Number */}
                    <span className="text-[8px] text-white/30 transition-colors group-hover:text-cyan-400">
                      {item.number}
                    </span>

                    {/* Label */}
                    <span className="text-xs uppercase tracking-[0.22em] text-white/65 transition-colors group-hover:text-white">
                      {item.label}
                    </span>

                  </div>

                  {/* Arrow */}
                  <span className="text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400">
                    ↗
                  </span>

                </a>
              ))}

            </div>

            {/* Mobile CTA */}
            <div className="border-t border-white/[0.07] pt-3">

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-[9px] font-bold uppercase tracking-[0.2em] !text-black transition-all duration-300 hover:bg-white/90"
              >

                <span className="!text-black">
                  Start a Project
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-sm text-white transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>

              </a>

            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center gap-5 px-4 py-5">

              <a
                href="https://github.com/pankaj5252"
                target="_blank"
                rel="noreferrer"
                className="text-[8px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
              >
                GitHub
              </a>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <a
                href="https://www.linkedin.com/in/pankaj-kale-410893409/"
                target="_blank"
                rel="noreferrer"
                className="text-[8px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
              >
                LinkedIn
              </a>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <a
                href="https://wa.me/919021373247"
                target="_blank"
                rel="noreferrer"
                className="text-[8px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-emerald-400"
              >
                WhatsApp
              </a>

            </div>

          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;