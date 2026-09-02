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

        {/* Corner Glow */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-500/[0.05] blur-[130px]" />

        {/* Horizontal Line */}
        <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 sm:px-10 lg:px-14">
        {/* Hero Content */}
        <div className="flex flex-1 items-center pt-20 pb-6 lg:pt-24 lg:pb-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            {/* Left Content */}
            <div>
              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-cyan-400/60" />

                <span className="text-[10px] uppercase tracking-[0.35em] text-white/65">
                  Full Stack Python & AI Developer
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="max-w-4xl text-6xl font-bold leading-[0.88] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
                DIGITAL
                <br />

                <span className="bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">
                  EXPERIENCES
                </span>
                <br />

                <span className="text-white/20">ENGINEERED.</span>
              </h1>

              {/* Description */}
              <p className="mt-9 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                I build modern web applications, scalable backend systems and
                AI-powered products that solve real business problems.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-8 rounded-full bg-white px-6 py-3.5 text-xs font-semibold tracking-wide !text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(255,255,255,0.12)]"
                >
                  EXPLORE PROJECTS

                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-xs font-semibold tracking-wide text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:text-white"
                >
                  LET'S TALK
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex items-center gap-5">
                <a
                  href="https://github.com/pankaj5252"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] uppercase tracking-[0.25em] text-white/25 transition-colors hover:text-white"
                >
                  GitHub ↗
                </a>

                <span className="h-1 w-1 rounded-full bg-white/20" />

                <a
                  href="#contact"
                  className="text-[10px] uppercase tracking-[0.25em] text-white/25 transition-colors hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Interactive Visual */}
            <div className="relative hidden h-[500px] items-center justify-center lg:flex">
              {/* Outer Ring */}
              <div
                className="absolute h-[440px] w-[440px] rounded-full border border-white/[0.06] transition-transform duration-700"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
              />

              {/* Middle Ring */}
              <div
                className="absolute h-[340px] w-[340px] rounded-full border border-white/[0.08] transition-transform duration-700"
                style={{
                  transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
                }}
              />

              {/* Inner Ring */}
              <div className="absolute h-[230px] w-[230px] rounded-full border border-white/10" />

              {/* AI Core */}
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[0_0_100px_rgba(34,211,238,0.06)] backdrop-blur-xl">
                <div className="absolute inset-5 rounded-full border border-white/10" />

                <div className="relative text-center">
                  <div className="mb-3 text-[10px] uppercase tracking-[0.4em] text-white/30">
                    Core
                  </div>

                  <div className="text-5xl font-bold tracking-[-0.08em]">
                    AI
                  </div>

                  <div className="mt-2 text-[9px] uppercase tracking-[0.3em] text-white/30">
                    Intelligence
                  </div>
                </div>
              </div>

              {/* Orbit Dots */}
              <div className="absolute left-[17%] top-[18%] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

              <div className="absolute bottom-[18%] right-[15%] h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.8)]" />

              <div className="absolute right-[12%] top-[35%] h-2 w-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)]" />

              {/* Backend Card */}
              <div className="absolute left-0 top-[16%] rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Backend
                </p>

                <p className="mt-2 text-xs font-medium text-white/80">
                  Python / FastAPI
                </p>
              </div>

              {/* Frontend Card */}
              <div className="absolute right-0 top-[24%] rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Frontend
                </p>

                <p className="mt-2 text-xs font-medium text-white/80">
                  React / Angular
                </p>
              </div>

              {/* Database Card */}
              <div className="absolute bottom-[15%] left-[7%] rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Database
                </p>

                <p className="mt-2 text-xs font-medium text-white/80">
                  PostgreSQL
                </p>
              </div>

              {/* AI Card */}
              <div className="absolute bottom-[9%] right-[5%] rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Intelligence
                </p>

                <p className="mt-2 text-xs font-medium text-white/80">
                  LLM / RAG
                </p>
              </div>

              {/* Side Label */}
              <div className="absolute right-[-30px] top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
                <span className="text-[8px] uppercase tracking-[0.5em] text-white/20">
                  Build · Ship · Scale
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;