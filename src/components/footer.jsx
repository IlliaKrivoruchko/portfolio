function Footer() {
  return (
    
    <footer className="relative py-12" style={{
      borderTop: "1px solid rgba(0,0,0,0.06)",
      background: "rgba(255,255,255,0.35)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
    }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm md:text-base">
        <span className="text-slate-400  tracking-[0.2em] uppercase">
          Illia © 2026
        </span>
        <div className="hidden md:block h-px flex-1 mx-8"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }} />
        <div className="flex items-center gap-8">
  {[
    { label: "GitHub", to: "https://github.com/IlliaKrivoruchko" },
    { label: "LinkedIn", to: "https://www.linkedin.com/in/illia-kryvoruchko-12b247332/" },
    { label: "Email", to: "mailto:illadarmenko@gmail.com" },
  ].map((link) => (
    <a
      key={link.label}
      href={link.to}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-slate-800 tracking-[0.15em] uppercase transition-colors duration-300"
    >
      {link.label}
    </a>
  ))}
</div>
      </div>
    </footer>
  );
}

export default Footer;