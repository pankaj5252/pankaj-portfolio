const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#050505] px-6 py-12 text-white sm:px-10 lg:px-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* ================= TOP ================= */}
        <div className="grid gap-10 border-b border-white/[0.07] pb-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035]">
                <span className="text-[11px] font-bold tracking-tight">
                  PK
                </span>

                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              </div>

              <div>
                <p className="text-sm font-semibold tracking-tight text-white">
                  Pankaj Kale
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.3em] text-white/40">
                  Full Stack · AI · Trading
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
              Full Stack Python & AI Developer with a strong interest in
              financial markets, trading systems, automation and technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[8px] font-medium uppercase tracking-[0.3em] text-white/35">
              Navigation
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="#home"
                className="w-fit text-xs text-white/60 transition-colors duration-300 hover:text-white"
              >
                Home
              </a>

              <a
                href="#about"
                className="w-fit text-xs text-white/60 transition-colors duration-300 hover:text-white"
              >
                About
              </a>

              <a
                href="#skills"
                className="w-fit text-xs text-white/60 transition-colors duration-300 hover:text-white"
              >
                Skills
              </a>

              <a
                href="#services"
                className="w-fit text-xs text-white/60 transition-colors duration-300 hover:text-white"
              >
                Services
              </a>

              <a
                href="#projects"
                className="w-fit text-xs text-white/60 transition-colors duration-300 hover:text-white"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="w-fit text-xs text-white/60 transition-colors duration-300 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-5 text-[8px] font-medium uppercase tracking-[0.3em] text-white/35">
              Connect
            </p>

            <div className="flex flex-col gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/pankaj5252"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-xs text-white/60 transition-colors duration-300 hover:text-white"
              >
                GitHub ↗
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pankaj-kale-410893409/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-xs text-white/60 transition-colors duration-300 hover:text-white"
              >
                LinkedIn ↗
              </a>

              {/* Email */}
              <a
                href="mailto:pbkale25@gmail.com"
                className="w-fit text-xs text-white/60 transition-colors duration-300 hover:text-white"
              >
                Email ↗
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919021373247"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-xs text-white/60 transition-colors duration-300 hover:text-white"
              >
                WhatsApp ↗
              </a>
            </div>

            {/* Availability */}
            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                Available for freelance
              </span>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
            © 2026 Pankaj Kale. All rights reserved.
          </p>

          {/* Built With */}
          <div className="flex flex-wrap items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-white/25">
            <span>Built with</span>

            <span className="text-white/50">
             Pankaj kale
            </span>

            <span>·</span>

            <span className="text-white/50">
              &
            </span>

            <span>·</span>

            <span className="text-white/50">
              Team
            </span>
          </div>

          {/* Back To Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="group flex w-fit items-center gap-3 text-[8px] uppercase tracking-[0.2em] text-white/35 transition-colors duration-300 hover:text-white"
          >
            <span>Back to top</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;