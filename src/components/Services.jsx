import { motion } from 'framer-motion';
import { services } from '../data/services';

function Services() {
  return (
    <section id="services" className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Especialidades <span className="text-brand-400">&</span> Servicios
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          Soluciones web técnicas enfocadas en rendimiento estelar, diseño inmersivo y resultados medibles.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card group relative overflow-hidden rounded-3xl p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-400 ring-1 ring-inset ring-brand-500/20 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
