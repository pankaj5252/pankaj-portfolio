const projects = [
  {
    number: "01",
    category: "GENERATIVE AI · RAG",
    title: "Enterprise AI Knowledge & Document Intelligence",
    description:
      "AI-powered document intelligence platform that allows users to upload business documents and interact with them using natural-language queries.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "LangChain",
      "RAG",
      "PostgreSQL",
      "Vector Search",
      "Docker",
    ],
    type: "AI PLATFORM",
  },
  {
    number: "02",
    category: "AI · AUTOMATION",
    title: "AI-Powered Customer Support & Workflow Assistant",
    description:
      "AI-powered customer support assistant designed to understand queries, retrieve relevant information and generate contextual responses while automating repetitive workflows.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "LangChain",
      "LLM",
      "Prompt Engineering",
      "REST APIs",
    ],
    type: "AI ASSISTANT",
  },
  {
    number: "03",
    category: "FULL STACK · SAAS",
    title: "AI Car Rental Platform",
    description:
      "Modern full-stack car rental platform with customer and admin workflows, vehicle management, authentication, bookings and AI-powered capabilities.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "REST APIs",
    ],
    type: "FULL STACK",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
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

        <div className="absolute left-[-200px] top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[150px]" />

        <div className="absolute right-[-200px] bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/[0.03] blur-[150px]" />
      </div>

      {/* Container */}
      <div className="relative mx-auto max-w-[1500px]">

        {/* Header */}
        <div className="mb-16 flex items-center justify-between border-b border-white/[0.06] pb-6">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-medium tracking-[0.3em] text-cyan-400/70">
              05
            </span>

            <span className="h-px w-10 bg-white/20" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/50">
              Selected Work
            </span>
          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/25 sm:block">
            Projects · Experiments · Solutions
          </span>
        </div>

        {/* Intro */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              What I've Built
            </span>

            <h2
              className="
                mt-5
                max-w-2xl
                text-4xl
                font-bold
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Turning ideas
              <br />
              <span className="text-white/35">
                into products.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-sm leading-8 text-white/50 sm:text-base">
              A selection of full-stack and AI projects focused on solving
              practical problems through modern engineering, automation and
              intelligent systems.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-5">
          {projects.map((project) => (
            <article
              key={project.number}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/[0.07]
                bg-white/[0.025]
                p-6
                transition-all
                duration-500
                hover:border-white/[0.14]
                hover:bg-white/[0.04]
                sm:p-8
                lg:p-10
              "
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-64
                  w-64
                  rounded-full
                  bg-cyan-400/[0.025]
                  blur-[100px]
                  transition-all
                  duration-700
                  group-hover:bg-cyan-400/[0.07]
                "
              />

              <div className="relative grid gap-10 lg:grid-cols-[80px_1fr_280px] lg:items-start">

                {/* Number */}
                <div>
                  <span className="text-sm font-medium tracking-[0.15em] text-white/25">
                    {project.number}
                  </span>
                </div>

                {/* Main Content */}
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="text-[8px] uppercase tracking-[0.3em] text-cyan-400/70">
                      {project.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/20" />

                    <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                      {project.type}
                    </span>
                  </div>

                  <h3
                    className="
                      max-w-3xl
                      text-2xl
                      font-semibold
                      leading-tight
                      tracking-[-0.03em]
                      text-white
                      sm:text-3xl
                    "
                  >
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border border-white/[0.08]
                          bg-white/[0.03]
                          px-3
                          py-1.5
                          text-[9px]
                          text-white/50
                          transition-colors
                          duration-300
                          group-hover:text-white/65
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex items-start justify-between lg:flex-col lg:items-end lg:justify-between lg:self-stretch">

                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-full
                      border border-white/[0.08]
                      bg-white/[0.03]
                      text-lg
                      text-white/40
                      transition-all
                      duration-500
                      group-hover:rotate-45
                      group-hover:border-cyan-400/30
                      group-hover:text-cyan-400
                    "
                  >
                    ↗
                  </div>

                  <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/20 lg:block">
                    View Project
                  </span>
                </div>
              </div>

              {/* Bottom Accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-10
                  h-px
                  w-0
                  bg-cyan-400/60
                  transition-all
                  duration-500
                  group-hover:w-16
                "
              />
            </article>
          ))}
        </div>

        {/* Bottom */}
        
      </div>
    </section>
  );
};

export default Projects;