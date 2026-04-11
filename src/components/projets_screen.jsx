import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "./projectsData";

const bebasStyle = { fontFamily: "'Bebas Neue', sans-serif" };
const dmSans = { fontFamily: "'DM Sans', sans-serif" };

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/projects/${project.id}`}
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden transition-all duration-500"
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          background: hovered ? "rgba(255,255,255,0.5)" : "transparent",
          backdropFilter: hovered ? "blur(20px)" : "none",
          WebkitBackdropFilter: hovered ? "blur(20px)" : "none",
          borderRadius: hovered ? "1.5rem" : "0",
          padding: hovered ? "2rem 2.5rem" : "2rem 0",
        }}
      >
        {hovered && (
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent)" }} />
        )}

        <div className="flex items-center justify-between gap-6">
          <span style={{
            ...dmSans,
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            color: hovered ? "#6366f1" : "#cbd5e1",
            flexShrink: 0,
          }}>
            {project.number}
          </span>

          <div className="flex-1 min-w-0">
            <h2
              className="leading-none tracking-wide transition-colors duration-300"
              style={{
                ...bebasStyle,
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                color: hovered ? "#0f172a" : "#1e293b",
              }}
            >
              {project.title}
            </h2>
            {hovered && (
              <p className="text-slate-400 text-sm md:text-base tracking-widest uppercase mt-1" style={dmSans}>
                {project.context}
              </p>
            )}
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="hidden md:block text-sm md:text-base transition-colors duration-300"
              style={{ ...dmSans, color: hovered ? "#94a3b8" : "#cbd5e1" }}>
              {project.year}
            </span>
            <span className="hidden md:block text-sm md:text-base px-3 py-1 rounded-full transition-all duration-300"
              style={{
                ...dmSans,
                background: project.status === "In Progress" ? "rgba(99,102,241,0.08)" : "rgba(16,185,129,0.08)",
                border: project.status === "In Progress" ? "1px solid rgba(99,102,241,0.2)" : "1px solid rgba(16,185,129,0.2)",
                color: project.status === "In Progress" ? "#6366f1" : "#10b981",
                opacity: hovered ? 1 : 0,
              }}>
              {project.status}
            </span>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0"
              style={{
                background: hovered ? "#0f172a" : "rgba(0,0,0,0.05)",
                transform: hovered ? "rotate(0deg)" : "rotate(-45deg)",
              }}
            >
              <ArrowUpRight size={16} color={hovered ? "#fff" : "#94a3b8"} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Раскрывающийся контент */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: hovered ? "120px" : "0", opacity: hovered ? 1 : 0 }}
        >
          <div className="flex flex-wrap gap-2 mt-5 pt-5"
            style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
            {project.hardSkills.slice(0, 5).map((tag, i) => (
              <span key={i} className="px-4 py-1.5 rounded-full text-slate-500 text-sm md:text-base"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.95)",
                  backdropFilter: "blur(8px)",
                  ...dmSans,
                }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section className="pt-28 pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-6">
          <div>
            <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4" style={dmSans}>
              Selected Works
            </p>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] leading-none tracking-wide"
              style={{ ...bebasStyle, color: "#0f172a" }}>
              Projects
            </h1>
          </div>
          <p className="text-slate-400 max-w-xs text-sm md:text-lg leading-relaxed md:text-right font-light" style={dmSans}>
            Academic and personal work from my journey at Thomas More.
          </p>
        </div>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
          {projects.map((p) => <ProjectRow key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}