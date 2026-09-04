const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        border-t border-white/[0.06]
        bg-[#050505]
        px-6
        py-24
        text-white
        sm:px-10
        lg:px-16
        lg:py-32
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glow */}
        <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.025] blur-[150px]" />

        <div className="absolute right-[-200px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.025] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between border-b border-white/[0.06] pb-6">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-medium tracking-[0.3em] text-cyan-400/70">
              02
            </span>

            <span className="h-px w-10 bg-white/20" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/50">
              About
            </span>
          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/25 sm:block">
            Developer · Trader
          </span>
        </div>

        {/* Main Content */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
              Who I am
            </p>

            <h2
              className="
                mt-6
                max-w-3xl
                text-5xl
                font-bold
                leading-[0.92]
                tracking-[-0.06em]
                sm:text-6xl
                lg:text-7xl
              "
            >
              Code with logic.
              <br />

              <span className="text-white/25">
                Trade with discipline.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/50 sm:text-base">
              I'm Pankaj Kale, a Full Stack Python & AI Developer and an active
              market enthusiast. I work at the intersection of technology,
              problem-solving, and financial markets.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-8 text-white/40 sm:text-base">
              On the development side, I build modern web applications,
              scalable backend systems, APIs, and AI-powered products. On the
              trading side, I study market structure, price action, risk
              management, and opportunities across multiple financial markets.
            </p>

            {/* Stats */}
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <p className="text-2xl font-bold tracking-tight text-white">
                  2+
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white/30">
                  Years Trading
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <p className="text-2xl font-bold tracking-tight text-white">
                  Full
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white/30">
                  Stack Development
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <p className="text-2xl font-bold tracking-tight text-white">
                  AI
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white/30">
                  AI Solutions
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {/* Development Card */}
            <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[8px] uppercase tracking-[0.3em] text-cyan-400/60">
                    01
                  </span>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                    Software Development
                  </h3>
                </div>

                <span className="text-xl text-white/20 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/40">
                Building production-ready applications using Python, FastAPI,
                Django, React, TypeScript, PostgreSQL and modern AI
                technologies.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Python",
                  "FastAPI",
                  "Django",
                  "React",
                  "TypeScript",
                  "PostgreSQL",
                  "AI / LLM",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[8px] uppercase tracking-[0.15em] text-white/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Trading Card */}
            <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.04]">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[8px] uppercase tracking-[0.3em] text-emerald-400/60">
                    02
                  </span>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                    Financial Markets
                  </h3>
                </div>

                <span className="text-xl text-white/20 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/40">
                2+ years of market study and trading experience with a focus on
                price action, market structure, risk management and disciplined
                execution.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Stock Market",
                  "Options",
                  "Forex",
                  "XAUUSD",
                  "Price Action",
                  "Risk Management",
                ].map((market) => (
                  <span
                    key={market}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[8px] uppercase tracking-[0.15em] text-white/40"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-7">
              <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                My Approach
              </p>

              <p className="mt-4 text-lg font-medium leading-8 tracking-tight text-white/75">
                "Understand the problem. Build with logic. Manage risk.
                Execute with discipline."
              </p>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default About;