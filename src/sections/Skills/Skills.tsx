import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
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
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.025] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between border-b border-white/[0.06] pb-6">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-medium tracking-[0.3em] text-cyan-400/70">
              03
            </span>

            <span className="h-px w-10 bg-white/20" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/50">
              Skills
            </span>
          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/25 sm:block">
            Technical · Markets
          </span>
        </div>

        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
            What I work with
          </p>

          <h2
            className="
              mt-5
              text-5xl
              font-bold
              leading-[0.92]
              tracking-[-0.06em]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Tools, technology
            <br />
            <span className="text-white/25">
              & market knowledge.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-white/40 sm:text-base">
            A combination of software engineering, AI technologies and
            financial market knowledge that helps me build, analyze and solve
            real-world problems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <div
              key={category.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-7
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-white/[0.16]
                hover:bg-white/[0.04]
              "
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-[8px] tracking-[0.3em] text-cyan-400/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-lg text-white/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400/50">
                  ↗
                </span>
              </div>

              {/* Category */}
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.035]
                      px-3
                      py-1.5
                      text-[8px]
                      uppercase
                      tracking-[0.15em]
                      text-white/45
                      transition-all
                      duration-300
                      group-hover:border-white/[0.12]
                      group-hover:text-white/65
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom Glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/[0.035] blur-[60px] transition-all duration-500 group-hover:bg-cyan-400/[0.07]" />
            </div>
          ))}
        </div>

        {/* Market Skills */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {/* Trading */}
          <div
            className="
              group
              rounded-3xl
              border border-white/[0.08]
              bg-white/[0.025]
              p-7
              transition-all
              duration-500
              hover:border-emerald-400/20
              hover:bg-white/[0.04]
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[8px] tracking-[0.3em] text-emerald-400/60">
                  MARKET 01
                </span>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  Trading & Markets
                </h3>
              </div>

              <span className="text-xl text-white/10 group-hover:text-emerald-400/50">
                ↗
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Stock Market",
                "Options",
                "Forex",
                "XAUUSD",
                "Price Action",
                "Market Structure",
                "Risk Management",
                "Technical Analysis",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border border-white/[0.08]
                    bg-white/[0.035]
                    px-3
                    py-1.5
                    text-[8px]
                    uppercase
                    tracking-[0.15em]
                    text-white/45
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering */}
          <div
            className="
              group
              rounded-3xl
              border border-white/[0.08]
              bg-white/[0.025]
              p-7
              transition-all
              duration-500
              hover:border-cyan-400/20
              hover:bg-white/[0.04]
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[8px] tracking-[0.3em] text-cyan-400/60">
                  ENGINEERING 02
                </span>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  Development & AI
                </h3>
              </div>

              <span className="text-xl text-white/10 group-hover:text-cyan-400/50">
                ↗
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Python",
                "FastAPI",
                "Django",
                "React",
                "TypeScript",
                "PostgreSQL",
                "REST APIs",
                "AI / LLM",
                "RAG",
                "Git",
                "GitHub",
                "Docker",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border border-white/[0.08]
                    bg-white/[0.035]
                    px-3
                    py-1.5
                    text-[8px]
                    uppercase
                    tracking-[0.15em]
                    text-white/45
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
      </div>
    </section>
  );
};

export default Skills;