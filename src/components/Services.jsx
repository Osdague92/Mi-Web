import { motion } from 'framer-motion';
import { services } from '../data/services';

function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-3xl font-bold text-white">Servicios</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Soluciones web enfocadas en rendimiento, diseño limpio y resultados reales para tu negocio.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <Icon className="mb-4 h-8 w-8 text-brand-400" />
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
