import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="mx-auto flex min-h-[85vh] w-full max-w-6xl items-center px-4 py-20 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-3xl"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-400">
          Desarrollador Web
        </p>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          Hola, soy Oscar Guerra.
          <span className="block text-slate-300">Construyo experiencias web modernas y efectivas.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Ayudo a marcas y profesionales a transformar ideas en productos digitales rápidos, limpios y listos
          para escalar.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-400 hover:text-brand-400"
          >
            Hablemos
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
