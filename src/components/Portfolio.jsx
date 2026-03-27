import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function Portfolio() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-brand-400">
          Portfolio
        </span>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trabajo Destacado</h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          Una selección de proyectos recientes creados con atención al detalle y mejores prácticas de la industria.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
