import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm"
    >
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <div className="mt-6 flex items-center gap-3">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-400"
        >
          Ver proyecto
          <ExternalLink className="h-4 w-4" />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-brand-400 hover:text-brand-400"
        >
          GitHub
          <Github className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
