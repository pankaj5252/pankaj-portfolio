const Services = () => {
  const services = [
    {
      number: "01",
      category: "Development",
      title: "Full Stack Web Development",
      description:
        "Modern, responsive and scalable web applications built with clean architecture and production-ready technologies.",
      tags: ["React", "TypeScript", "Python", "FastAPI", "Django"],
    },
    {
      number: "02",
      category: "Backend",
      title: "API & Backend Development",
      description:
        "Secure and scalable backend systems, REST APIs, database architecture and integrations designed for real-world applications.",
      tags: ["FastAPI", "Django", "REST API", "PostgreSQL"],
    },
    {
      number: "03",
      category: "AI",
      title: "AI-Powered Solutions",
      description:
        "Practical AI solutions using LLMs, RAG and intelligent automation to improve products, workflows and user experiences.",
      tags: ["AI", "LLM", "RAG", "Automation"],
    },
    {
      number: "04",
      category: "Markets",
      title: "Trading & Market Analysis",
      description:
        "Market analysis focused on price action, market structure, technical analysis and disciplined risk management across financial markets.",
      tags: ["Stocks", "Options", "Forex", "XAUUSD"],
    },
  ];

  return (
    <section
      id="services"
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

        {/* Glows */}
        <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.025] blur-[150px]" />

        <div className="absolute right-[-200px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-emerald-500/[0.02] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between border-b border-white/[0.06] pb-6">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-medium tracking-[0.3em] text-cyan-400/70">
              04
            </span>

            <span className="h-px w-10 bg-white/20" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/50">
              Services
            </span>
          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/25 sm:block">
            What I Can Do
          </span>
        </div>

        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
              Expertise
            </p>

            <h2
              className="
                mt-5
                max-w-4xl
                text-5xl
                font-bold
                leading-[0.92]
                tracking-[-0.06em]
                sm:text-6xl
                lg:text-7xl
              "
            >
              From ideas
              <br />
              <span className="text-white/25">
                to execution.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-8 text-white/40 sm:text-base lg:pb-2">
            I combine software engineering, AI and financial market knowledge
            to build practical digital solutions and approach problems with a
            structured, analytical mindset.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
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
                sm:p-8
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-[8px] tracking-[0.3em] text-cyan-400/60">
                    {service.number}
                  </span>

                  <span className="h-px w-6 bg-white/10" />

                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                    {service.category}
                  </span>
                </div>

                <span className="text-xl text-white/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400/60">
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-10 max-w-md text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/40">
                {service.description}
              </p>

              {/* Tags */}
              <div className="mt-7 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      px-3
                      py-1.5
                      text-[8px]
                      uppercase
                      tracking-[0.15em]
                      text-white/40
                      transition-colors
                      duration-300
                      group-hover:text-white/60
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Line */}
              <div className="mt-8 h-px w-full bg-white/[0.05]" />

              <div className="mt-5 flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                  Available for projects
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-cyan-400/[0.035] blur-[70px] transition-all duration-500 group-hover:bg-cyan-400/[0.07]" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col gap-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
              Have something in mind?
            </p>

            <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Let's turn your idea into reality.
            </h3>
          </div>

          <a
            href="#contact"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-5
              rounded-full
              bg-white
              px-6
              py-3.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              !text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_50px_rgba(255,255,255,0.12)]
            "
          >
            <span>Start a Project</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-sm text-white transition-transform duration-300 group-hover:rotate-45">
              ↗
            </span>
          </a>
        </div>

        {/* Bottom */}
        
      </div>
    </section>
  );
};

export default Services;