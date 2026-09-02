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
      {/* ================= BACKGROUND ================= */}
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
        <div className="absolute right-[-180px] top-1/4 h-[500px] w-[500px] rounded-full bg-violet-500/[0.035] blur-[140px]" />

        <div className="absolute left-[-180px] bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.025] blur-[140px]" />
      </div>

      {/* ================= CONTAINER ================= */}
      <div className="relative mx-auto max-w-[1500px]">

        {/* ================= HEADER ================= */}
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
            Technologies · Tools · Expertise
          </span>
        </div>

        {/* ================= INTRO ================= */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              What I Work With
            </span>

            <h2
              className="
                mt-5
                max-w-xl
                text-4xl
                font-bold
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Technologies I
              <br />
              <span className="text-white/35">
                work with.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-sm leading-8 text-white/50 sm:text-base">
              A practical technology stack focused on building modern
              interfaces, scalable backend systems, APIs, databases and
              AI-powered applications.
            </p>
          </div>
        </div>

        {/* ================= SKILL GRID ================= */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <div
              key={category.title}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border border-white/[0.07]
                bg-white/[0.025]
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-white/[0.14]
                hover:bg-white/[0.04]
              "
            >
              {/* Card Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-cyan-400/[0.04]
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-cyan-400/[0.08]
                "
              />

              {/* Card Header */}
              <div className="relative mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex h-8 w-8
                      items-center justify-center
                      rounded-lg
                      border border-white/[0.08]
                      bg-white/[0.03]
                      text-[8px]
                      font-medium
                      text-white/35
                    "
                  >
                    0{index + 1}
                  </span>

                  <h3 className="text-sm font-semibold tracking-tight text-white/90">
                    {category.title}
                  </h3>
                </div>

                <span className="text-[10px] text-white/15 transition-colors duration-300 group-hover:text-cyan-400/60">
                  ↗
                </span>
              </div>

              {/* Divider */}
              <div className="mb-5 h-px bg-white/[0.06]" />

              {/* Skills */}
              <div className="relative flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border border-white/[0.08]
                      bg-white/[0.035]
                      px-3
                      py-2
                      text-[10px]
                      font-medium
                      text-white/55
                      transition-all
                      duration-300
                      hover:border-cyan-400/20
                      hover:bg-cyan-400/[0.05]
                      hover:text-white
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom Accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-6
                  h-px
                  w-0
                  bg-cyan-400/60
                  transition-all
                  duration-500
                  group-hover:w-10
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;