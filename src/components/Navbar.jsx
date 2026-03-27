const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full pt-4 px-4 sm:px-6">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-slate-900/40 px-6 py-3 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <a href="#home" className="text-lg font-bold tracking-tight text-white transition hover:opacity-80">
          osdague<span className="text-brand-400">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-brand-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
