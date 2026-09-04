import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth - 0.5) * 20,
        y: (event.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Main Glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[150px]" />

        {/* Trading Glow */}
        <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-500/[0.035] blur-[130px]" />

        {/* Corner Glow */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-500/[0.05] blur-[130px]" />

        {/* Horizontal Line */}
        <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 sm:px-10 lg:px-14">
        {/* Hero Content */}
        <div className="flex flex-1 items-center pb-8 pt-24 lg:pb-10 lg:pt-28">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
            {/* LEFT CONTENT */}
            <div>
              {/* Eyebrow */}
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <span className="h-px w-10 bg-cyan-400/60" />

                <span className="text-[10px] uppercase tracking-[0.35em] text-white/65">
                  Full Stack Python · AI · Market Analysis
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="max-w-5xl text-6xl font-bold leading-[0.88] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[7.2rem]">
                BUILD.
                <br />

                <span className="bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">
                  ANALYZE.
                </span>
                <br />

                <span className="text-white/20">EXECUTE.</span>
              </h1>

              {/* Description */}
              <p className="mt-9 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                I'm Pankaj Kale — a Full Stack Python & AI Developer who also
                actively works with financial markets, combining technology,
                data, and market analysis to build practical digital solutions.
              </p>

              {/* Focus Areas */}
              <div className="mt-7 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {/* Development */}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 backdrop-blur-xl">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-cyan-400/60">
                    Development
                  </p>

                  <p className="mt-1.5 text-[11px] font-medium text-white/75">
                    Full Stack
                  </p>
                </div>

                {/* AI */}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 backdrop-blur-xl">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-violet-400/60">
                    Intelligence
                  </p>

                  <p className="mt-1.5 text-[11px] font-medium text-white/75">
                    AI / LLM / RAG
                  </p>
                </div>

                {/* Trading */}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 backdrop-blur-xl">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-emerald-400/60">
                    Markets
                  </p>

                  <p className="mt-1.5 text-[11px] font-medium text-white/75">
                    Stocks / Options
                  </p>
                </div>

                {/* Forex */}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 backdrop-blur-xl">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-amber-400/60">
                    Forex
                  </p>

                  <p className="mt-1.5 text-[11px] font-medium text-white/75">
                    XAUUSD · 2 Years
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-8 rounded-full bg-white px-6 py-3.5 text-xs font-semibold tracking-wide !text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(255,255,255,0.12)]"
                >
                  EXPLORE WORK

                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-xs font-semibold tracking-wide text-white/65 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:text-white"
                >
                  LET'S TALK
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="https://github.com/pankaj5252"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] uppercase tracking-[0.25em] text-white/35 transition-colors hover:text-white"
                >
                  GitHub ↗
                </a>

                <span className="h-1 w-1 rounded-full bg-white/20" />

                <a
                  href="https://www.linkedin.com/in/pankaj-kale-410893409/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] uppercase tracking-[0.25em] text-white/35 transition-colors hover:text-white"
                >
                  LinkedIn ↗
                </a>

                <span className="h-1 w-1 rounded-full bg-white/20" />

                <a
                  href="https://wa.me/919021373247"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] uppercase tracking-[0.25em] text-white/35 transition-colors hover:text-emerald-400"
                >
                  WhatsApp ↗
                </a>
              </div>
            </div>

            {/* RIGHT INTERACTIVE VISUAL */}
            <div className="relative hidden h-[540px] items-center justify-center lg:flex">
              {/* Outer Ring */}
              <div
                className="absolute h-[460px] w-[460px] rounded-full border border-white/[0.06] transition-transform duration-700"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
              />

              {/* Middle Ring */}
              <div
                className="absolute h-[350px] w-[350px] rounded-full border border-white/[0.08] transition-transform duration-700"
                style={{
                  transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
                }}
              />

              {/* Inner Ring */}
              <div className="absolute h-[235px] w-[235px] rounded-full border border-white/10" />

              {/* Center Core */}
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[0_0_100px_rgba(34,211,238,0.06)] backdrop-blur-xl">
                <div className="absolute inset-5 rounded-full border border-white/10" />

                <div className="relative text-center">
                  <div className="mb-3 text-[9px] uppercase tracking-[0.4em] text-white/30">
                    Developer
                  </div>

                  <div className="text-4xl font-bold tracking-[-0.08em]">
                    PK
                  </div>

                  <div className="mt-2 text-[8px] uppercase tracking-[0.3em] text-white/30">
                    Code × Markets
                  </div>
                </div>
              </div>

              {/* Orbit Dots */}
              <div className="absolute left-[16%] top-[18%] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

              <div className="absolute bottom-[17%] right-[14%] h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.8)]" />

              <div className="absolute right-[10%] top-[36%] h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />

              {/* Backend Card */}
              <div className="absolute left-0 top-[13%] rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Backend
                </p>

                <p className="mt-2 text-xs font-medium text-white/80">
                  Python / FastAPI
                </p>
              </div>

              {/* Frontend Card */}
              <div className="absolute right-0 top-[22%] rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Frontend
                </p>

                <p className="mt-2 text-xs font-medium text-white/80">
                  React / TypeScript
                </p>
              </div>

              {/* Trading Card */}
              <div className="absolute bottom-[17%] left-[2%] rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] px-5 py-4 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2">
                <p className="text-[9px] uppercase tracking-[0.2em] text-emerald-400/60">
                  Markets
                </p>

                <p className="mt-2 text-xs font-medium text-white/80">
                  Stocks / Options
                </p>
              </div>

              {/* Forex Card */}
              <div className="absolute bottom-[8%] right-[2%] rounded-2xl border border-amber-400/10 bg-amber-400/[0.035] px-5 py-4 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2">
                <p className="text-[9px] uppercase tracking-[0.2em] text-amber-400/60">
                  Forex
                </p>

                <p className="mt-2 text-xs font-medium text-white/80">
                  XAUUSD · 2Y Experience
                </p>
              </div>

              {/* AI Card */}
              <div className="absolute left-[24%] top-[5%] rounded-xl border border-violet-400/10 bg-violet-400/[0.025] px-4 py-3 backdrop-blur-xl">
                <p className="text-[8px] uppercase tracking-[0.2em] text-violet-400/60">
                  AI
                </p>

                <p className="mt-1.5 text-[10px] font-medium text-white/70">
                  LLM / RAG
                </p>
              </div>

              {/* Side Label */}
              <div className="absolute right-[-30px] top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
                <span className="text-[8px] uppercase tracking-[0.5em] text-white/20">
                  Code · Data · Markets
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="border-t border-white/[0.06] py-5">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                Focus
              </p>

              <p className="mt-1 text-[10px] text-white/60">
                Full Stack Development
              </p>
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                AI
              </p>

              <p className="mt-1 text-[10px] text-white/60">
                LLM · RAG · AI Products
              </p>
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                Markets
              </p>

              <p className="mt-1 text-[10px] text-white/60">
                Stocks · Options
              </p>
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                Forex / XAUUSD
              </p>

              <p className="mt-1 text-[10px] text-white/60">
                 2 Years
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;