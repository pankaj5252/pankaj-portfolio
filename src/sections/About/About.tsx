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
        <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[140px]" />
      </div>

      {/* Container */}
      <div className="relative mx-auto max-w-[1500px]">

        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-medium tracking-[0.3em] text-cyan-400/70">
              02
            </span>

            <span className="h-px w-10 bg-white/20" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/45">
              About Me
            </span>
          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/20 sm:block">
            Developer · Builder · Problem Solver
          </span>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* Left */}
          <div>
            <div className="mb-7">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                Who I Am
              </span>
            </div>

            <h2
              className="
                max-w-2xl
                text-4xl
                font-bold
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Building practical
              <br />
              <span className="text-white/35">
                solutions with code.
              </span>
            </h2>

            {/* Small Accent */}
            <div className="mt-10 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)]" />

              <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                Full Stack Python & AI
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8">

            {/* Intro */}
            <div className="border-l border-cyan-400/30 pl-6">
              <p className="text-base leading-8 text-white/65 sm:text-lg">
                I'm Pankaj Kale, a Full Stack Python & AI Developer focused on
                building modern, scalable, and user-friendly digital solutions.
              </p>
            </div>

            {/* Paragraph */}
            <p className="max-w-2xl text-sm leading-8 text-white/45 sm:text-base">
              I work across the frontend and backend, turning business
              requirements into complete web applications, APIs, and
              AI-powered solutions.
            </p>

            {/* Approach */}
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                  My Approach
                </span>

                <span className="text-[9px] text-cyan-400/60">
                  03
                </span>
              </div>

              <p className="text-sm leading-7 text-white/55">
                My approach is simple: understand the problem, design a clean
                solution, build it with the right technology, and deliver
                something that is reliable and easy to maintain.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="text-xl font-semibold tracking-tight text-white">
                  Full
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-white/25">
                  Stack
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="text-xl font-semibold tracking-tight text-white">
                  AI
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-white/25">
                  Solutions
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="text-xl font-semibold tracking-tight text-white">
                  API
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-white/25">
                  Backend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;