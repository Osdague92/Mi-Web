function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-slate-500 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} Oscar Guerra. Todos los derechos reservados.</p>
        <a href="https://osdague.dev" className="transition hover:text-brand-400">
          osdague.dev
        </a>
      </div>
    </footer>
  );
}

export default Footer;
