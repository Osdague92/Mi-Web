import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8"
      >
        <h2 className="text-3xl font-bold text-white">Sobre mí</h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-slate-300">
          Soy Oscar Guerra, desarrollador web enfocado en crear productos digitales con excelente experiencia
          de usuario y alto rendimiento. Me especializo en React y desarrollo front-end moderno, integrando
          buenas prácticas de arquitectura, accesibilidad y optimización para que cada proyecto sea estable y
          fácil de mantener.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
