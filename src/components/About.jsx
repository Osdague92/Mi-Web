import { motion } from 'framer-motion';

function About() {
  const skills = ['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'JavaScript', 'UI/UX'];

  return (
    <section id="about" className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-card relative overflow-hidden rounded-[2.5rem] p-8 sm:p-12 lg:p-16"
      >
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-500/20 mix-blend-screen blur-[100px]"></div>
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent-purple/20 mix-blend-screen blur-[100px]"></div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-brand-400">
            Sobre Mí
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Diseño Inmersivo, <br className="hidden sm:block" /> Código Escalar
          </h2>
          <p className="mx-auto mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            Soy Oscar Guerra, desarrollador web enfocado en crear productos digitales con excelente experiencia
            de usuario y alto rendimiento. Me especializo en React y desarrollo front-end moderno, integrando
            buenas prácticas de arquitectura, accesibilidad y optimización para que cada proyecto sea estable y
            fácil de escalar.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="rounded-full border border-white/5 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
