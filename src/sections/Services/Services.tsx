import { services } from "../../data/services";

const Services = () => {
  return (
    <section id="services" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
            Services
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Solutions I can build for you.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
            From business websites to complete web applications and
            AI-powered solutions, I help turn ideas into reliable digital
            products.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white/60"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;