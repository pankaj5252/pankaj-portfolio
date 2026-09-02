const Contact = () => {
  const whatsappMessage = encodeURIComponent(
    "Hi Pankaj, I would like to discuss a project with you."
  );

  return (
    <section
      id="contact"
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

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between border-b border-white/[0.06] pb-6">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-medium tracking-[0.3em] text-cyan-400/70">
              06
            </span>

            <span className="h-px w-10 bg-white/20" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/50">
              Contact
            </span>
          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/25 sm:block">
            Let's Build Something
          </span>
        </div>

        {/* Main */}
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          {/* Left */}
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              Have a project in mind?
            </span>

            <h2
              className="
                mt-6
                max-w-4xl
                text-5xl
                font-bold
                leading-[0.9]
                tracking-[-0.06em]
                sm:text-6xl
                lg:text-8xl
              "
            >
              Let's build
              <br />

              <span className="text-white/30">
                something great.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/45 sm:text-base">
              Have an idea, business requirement or product you want to build?
              Let's discuss it and turn it into a practical digital solution.
            </p>

            {/* CTA */}
            <a
              href="mailto:pbkale25@gmail.com"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-5
                rounded-full
                bg-white
                px-6
                py-4
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                !text-black
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(255,255,255,0.12)]
              "
            >
              <span>Start a Conversation</span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-sm
                  text-white
                  transition-transform
                  duration-500
                  group-hover:rotate-45
                "
              >
                ↗
              </span>
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-end">
            {/* Availability Card */}
            <div
              className="
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-7
                backdrop-blur-xl
              "
            >
              {/* Availability */}
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/50">
                  Available for freelance work
                </span>
              </div>

              <div className="my-7 h-px bg-white/[0.06]" />

              {/* Email */}
              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                  Email
                </p>

                <a
                  href="mailto:pbkale25@gmail.com"
                  className="
                    mt-2
                    block
                    text-sm
                    text-white/70
                    transition-colors
                    hover:text-white
                  "
                >
                  pbkale25@gmail.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="mt-7">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                  WhatsApp
                </p>

                <a
                  href={`https://wa.me/919021373247?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-2
                    block
                    text-sm
                    text-white/70
                    transition-colors
                    hover:text-emerald-400
                  "
                >
                  +91 90213 73247 ↗
                </a>
              </div>

              {/* Social */}
              <div className="mt-7">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                  Connect
                </p>

                <div className="mt-3 flex flex-wrap gap-3">
                  {/* GitHub */}
                  <a
                    href="https://github.com/pankaj5252"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      px-4
                      py-2.5
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-white/50
                      transition-all
                      hover:border-white/20
                      hover:text-white
                    "
                  >
                    GitHub ↗
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/pankaj-kale-410893409/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      px-4
                      py-2.5
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-white/50
                      transition-all
                      hover:border-white/20
                      hover:text-white
                    "
                  >
                    LinkedIn ↗
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:pbkale25@gmail.com"
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      px-4
                      py-2.5
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-white/50
                      transition-all
                      hover:border-white/20
                      hover:text-white
                    "
                  >
                    Email ↗
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/919021373247?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      px-4
                      py-2.5
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-white/50
                      transition-all
                      hover:border-emerald-400/30
                      hover:text-emerald-400
                    "
                  >
                    WhatsApp ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/[0.06] pt-6">
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/40">
            Open to freelance projects · Full Stack · AI · Python
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;