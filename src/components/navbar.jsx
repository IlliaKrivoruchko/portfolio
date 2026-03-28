import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const bebasStyle = { fontFamily: "'Bebas Neue', sans-serif" };
const dmSans = { fontFamily: "'DM Sans', sans-serif" };

const links = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "CV", to: "/cv" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let timeout;
    const onScroll = () => {
      setScrolled(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setScrolled(false), 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* ── DESKTOP NAV (md+) ── */}
      <nav
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between transition-all duration-500"
        style={{
          padding: scrolled ? "8px 32px" : "18px 32px",
          background: "rgba(255,255,255,0.45)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderBottom: "1px solid rgba(255,255,255,0.7)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        <Link to="/" style={{ ...bebasStyle, fontSize: "1.4rem", color: "#0f172a", letterSpacing: "0.05em", textDecoration: "none" }}>
          Illia
        </Link>

        <div className="flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="transition-colors duration-200"
              style={{ ...dmSans, fontSize: "1rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#64748b", textDecoration: "none" }}
              onMouseEnter={e => e.target.style.color = "#0f172a"}
              onMouseLeave={e => e.target.style.color = "#64748b"}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── MOBILE TOP BAR ── */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderBottom: "1px solid rgba(255,255,255,0.75)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}
      >
        <span style={{ ...bebasStyle, fontSize: "1.2rem", color: "#0f172a" }}>Illia</span>
        <button onClick={() => setMobileOpen(true)} className="flex flex-col gap-1.5 p-2" aria-label="Open menu">
          <span className="block w-5 h-0.5 rounded-full" style={{ background: "#0f172a" }} />
          <span className="block w-5 h-0.5 rounded-full" style={{ background: "#0f172a" }} />
          <span className="block w-3 h-0.5 rounded-full" style={{ background: "#0f172a" }} />
        </button>
      </div>

      {/* ── MOBILE FULL-SCREEN MENU ── */}
      <div
        className="md:hidden fixed inset-0 z-[100] flex flex-col transition-all duration-500"
        style={{
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(40px) saturate(200%)",
          WebkitBackdropFilter: "blur(40px) saturate(200%)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
          transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className="flex justify-between items-center px-6 py-5">
          <span style={{ ...bebasStyle, fontSize: "1.4rem", color: "#0f172a" }}>Illia</span>
          <button onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2l16 16M18 2L2 18" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 gap-10">
          {links.map((l, i) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              style={{
                ...bebasStyle,
                fontSize: "3.5rem",
                color: "#0f172a",
                textDecoration: "none",
                letterSpacing: "0.05em",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s ${i * 0.07}s, transform 0.4s ${i * 0.07}s`,
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}