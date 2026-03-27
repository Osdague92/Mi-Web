import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="glass-card group flex flex-col justify-between rounded-3xl p-7 sm:p-9 relative overflow-hidden"
    >
      <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      <div className="relative z-10 flex-1">
        <h3 className="text-2xl font-bold tracking-tight text-white">{project.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-slate-400">{project.description}</p>
      </div>

      <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-5 py-2.5 text-sm font-semibold text-brand-400 ring-1 ring-inset ring-brand-500/30 transition-all hover:bg-brand-500 hover:text-white hover:ring-brand-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]"
        >
          Ver proyecto
          <ExternalLink className="h-4 w-4" />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10 hover:text-white"
        >
          Código fuente
          <Github className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
