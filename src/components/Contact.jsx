import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 lg:py-12"
        >
          <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-brand-400">
            Contacto
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Trabajemos juntos.</h2>
          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            ¿Tienes un proyecto en mente o necesitas escalar un producto existente? Envíame un mensaje y descubramos cómo puedo ayudarte a alcanzar tus objetivos con una solución web de primer nivel.
          </p>
        </motion.div>

        <div className="lg:col-span-3">
          <motion.form
            name="contacto"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card space-y-6 rounded-3xl p-8 sm:p-10"
          >
            <input type="hidden" name="form-name" value="contacto" />
            <p className="hidden">
              <label>
                No completar: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="name" className="mb-2.5 block text-sm font-semibold text-slate-300">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Ej. Jane Doe"
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white placeholder-slate-500 backdrop-blur-sm outline-none transition-all duration-300 focus:border-brand-500 focus:bg-black/40 focus:ring-1 focus:ring-brand-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2.5 block text-sm font-semibold text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@ejemplo.com"
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white placeholder-slate-500 backdrop-blur-sm outline-none transition-all duration-300 focus:border-brand-500 focus:bg-black/40 focus:ring-1 focus:ring-brand-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2.5 block text-sm font-semibold text-slate-300">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Cuéntame sobre tu proyecto..."
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white placeholder-slate-500 backdrop-blur-sm outline-none transition-all duration-300 focus:border-brand-500 focus:bg-black/40 focus:ring-1 focus:ring-brand-500"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 px-6 py-4 text-sm font-bold text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
            >
              Enviar mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
