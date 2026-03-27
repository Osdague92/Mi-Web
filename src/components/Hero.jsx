import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-[90vh] w-full max-w-6xl items-center justify-center px-4 py-20 sm:px-6 overflow-hidden">
      
      {/* Background Blobs */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg">
        <div className="absolute top-0 -left-10 h-72 w-72 animate-blob rounded-full bg-brand-500 opacity-30 mix-blend-screen blur-[100px] filter"></div>
        <div className="animation-delay-2000 absolute top-0 -right-10 h-72 w-72 animate-blob rounded-full bg-accent-purple opacity-30 mix-blend-screen blur-[100px] filter"></div>
        <div className="animation-delay-4000 absolute -bottom-20 left-20 h-72 w-72 animate-blob rounded-full bg-accent-emerald opacity-30 mix-blend-screen blur-[100px] filter"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex max-w-4xl flex-col items-center text-center"
      >
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-400 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500"></span>
          </span>
          Desarrollador Web
        </span>
        
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          Hola, soy <span className="bg-gradient-to-r from-brand-400 via-accent-purple to-accent-emerald bg-clip-text text-transparent">Oscar Guerra</span>.
          <span className="mt-3 block text-slate-300">Creo experiencias digitales.</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Ayudo a marcas y profesionales a transformar ideas en productos rápidos, hermosos y listos para triunfar en la web moderna.
        </p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-brand-500 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:-translate-y-1 hover:bg-brand-400 hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-400/50 hover:bg-white/10 hover:text-brand-400"
          >
            Hablemos
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
