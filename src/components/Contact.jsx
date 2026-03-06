import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-3xl font-bold text-white">Contacto</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          ¿Tienes una idea o proyecto? Envíame un mensaje y te responderé lo antes posible.
        </p>
      </motion.div>

      <motion.form
        name="contacto"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="mt-8 space-y-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
      >
        <input type="hidden" name="form-name" value="contacto" />
        <p className="hidden">
          <label>
            No completar: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
        >
          Enviar mensaje
        </button>
      </motion.form>
    </section>
  );
}

export default Contact;
