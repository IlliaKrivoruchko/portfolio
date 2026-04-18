import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, GitBranch, Users, User } from "lucide-react";
import { projects } from "./projectsData";

const bebasStyle = { fontFamily: "'Bebas Neue', sans-serif" };
const dmSans = { fontFamily: "'DM Sans', sans-serif" };

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{
        background: "rgba(255,255,255,0.42)",
        backdropFilter: "blur(28px) saturate(200%)",
        WebkitBackdropFilter: "blur(28px) saturate(200%)",
        border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent)" }} />
      {children}
    </div>
  );
}

function Tag({ children, accent = false }) {
  return (
    <span
      className="px-4 py-1.5 rounded-full text-sm md:text-base"
      style={{
        background: accent ? "rgba(99,102,241,0.08)" : "rgba(255,255,255,0.65)",
        border: accent ? "1px solid rgba(99,102,241,0.2)" : "1px solid rgba(255,255,255,0.95)",
        color: accent ? "#6366f1" : "#475569",
        backdropFilter: "blur(8px)",
        ...dmSans,
      }}
    >
      {children}
    </span>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 style={{ ...bebasStyle, fontSize: "4rem", color: "#0f172a" }}>Project not found</h1>
          <Link to="/projects" className="text-slate-400 hover:text-slate-700 mt-4 inline-block" style={dmSans}>
            ← Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-20 md:pb-12">
      <div className="max-w-5xl mx-auto px-6">

        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm md:text-base tracking-widest uppercase transition-colors duration-200 mb-10"
          style={dmSans}
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          All Projects
        </Link>

        {/* ── HERO ── */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-slate-300 text-sm md:text-base tracking-[0.2em]" style={dmSans}>{project.number}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-slate-400 text-sm md:text-base tracking-widest uppercase" style={dmSans}>{project.context}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span
              className="text-sm md:text-base px-3 py-1 rounded-full"
              style={{
                ...dmSans,
                background: project.status === "In Progress" ? "rgba(99,102,241,0.08)" : "rgba(16,185,129,0.08)",
                border: project.status === "In Progress" ? "1px solid rgba(99,102,241,0.2)" : "1px solid rgba(16,185,129,0.2)",
                color: project.status === "In Progress" ? "#6366f1" : "#10b981",
              }}
            >
              {project.status}
            </span>
          </div>

          <h1
            className="leading-none tracking-wide mb-4"
            style={{ ...bebasStyle, fontSize: "clamp(3.5rem, 9vw, 8rem)", color: "#0f172a" }}
          >
            {project.title}
          </h1>
          <p className="text-slate-400 text-base md:text-xl font-light" style={dmSans}>{project.subtitle}</p>
        </div>

        {/* ── META ROW ── */}
        <div className="flex flex-wrap gap-4 mb-16 pb-16"
          style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="flex items-center gap-2">
            {project.type === "Solo Project"
              ? <User size={15} color="#94a3b8" strokeWidth={1.5} />
              : <Users size={15} color="#94a3b8" strokeWidth={1.5} />
            }
            <span className="text-slate-400 text-sm md:text-base" style={dmSans}>{project.type}</span>
          </div>
          <span className="text-slate-200">·</span>
          <span className="text-slate-400 text-sm md:text-base" style={dmSans}>{project.year}</span>
          {project.links.map((l, i) => (
            <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm md:text-base transition-colors duration-200 hover:text-slate-900"
              style={{ color: "#6366f1", ...dmSans }}>
              <ExternalLink size={14} strokeWidth={1.5} />
              {l.label}
            </a>
          ))}
        </div>

        {/* ── BACKGROUND ── */}
        <div className="mb-16">
          <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase mb-6" style={dmSans}>
            Background
          </p>
          <p className="text-slate-600 text-base md:text-xl font-light leading-relaxed" style={dmSans}>
            {project.description}
          </p>
        </div>

        {/* ── MY ROLE ── */}
        <div className="mb-16">
          <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase mb-6" style={dmSans}>
            My Contribution
          </p>
          <div className="border-l-2 pl-8" style={{ borderColor: "rgba(99,102,241,0.3)" }}>
            <p className="text-slate-600 text-base md:text-xl font-light leading-relaxed" style={dmSans}>
              {project.myRole}
            </p>
          </div>
        </div>

        {/* ── BRANCHES ── */}
        {project.branches.length > 0 && (
          <div className="mb-16">
            <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase mb-6" style={dmSans}>
              My Git Branches
            </p>
            <GlassCard className="p-6 md:p-8">
              <div className="flex flex-col">
                {project.branches.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 py-4"
                    style={{ borderBottom: i < project.branches.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}
                  >
                    <GitBranch size={15} color="#6366f1" strokeWidth={1.5} className="flex-shrink-0" />
                    <code className="flex-shrink-0 font-mono text-sm md:text-base" style={{ color: "#6366f1" }}>
                      {b.name}
                    </code>
                    <span className="text-slate-400 text-sm md:text-base font-light" style={dmSans}>
                      — {b.desc}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}

        {/* ── VISUALS ── */}
        {project.visuals !== null && (

        <div className="mb-16">
          <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase mb-6" style={dmSans}>
            Visuals
          </p>
          {project.visuals.length === 0 ? (
            <div
              className="w-full rounded-3xl flex items-center justify-center"
              style={{
                height: "280px",
                background: "rgba(255,255,255,0.25)",
                border: "2px dashed rgba(0,0,0,0.08)",
              }}
            >
              <p className="text-slate-300 text-sm md:text-base font-mono" style={dmSans}>
                Add screenshots to projectsData.js → visuals[]
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.visuals.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-3xl"
                  style={{
                    background: "rgba(255,255,255,0.38)",
                    border: "1px solid rgba(255,255,255,0.65)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
                  }}>
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        )}
        {/* ── SKILLS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pt-16"
          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <div>
            <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase mb-6" style={dmSans}>
              Hard Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {project.hardSkills.map((s, i) => <Tag key={i}>{s}</Tag>)}
            </div>
          </div>
          <div>
            <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase mb-6" style={dmSans}>
              Soft Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {project.softSkills.map((s, i) => <Tag key={i} accent>{s}</Tag>)}
            </div>
          </div>
        </div>

        {/* ── NEXT PROJECT ── */}
        {(() => {
          const idx = projects.findIndex((p) => p.id === id);
          const next = projects[(idx + 1) % projects.length];
          return (
            <div className="pt-16" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
              <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4" style={dmSans}>
                Next Project
              </p>
              <Link
                to={`/projects/${next.id}`}
                className="group flex items-center justify-between transition-colors duration-200"
                style={{ textDecoration: "none" }}
              >
                <h2
                  className="leading-none tracking-wide"
                  style={{ ...bebasStyle, fontSize: "clamp(2rem, 5vw, 4rem)", color: "#0f172a" }}
                >
                  {next.title}
                </h2>
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-slate-900"
                  style={{ background: "rgba(0,0,0,0.06)" }}>
                  <ArrowLeft size={18} color="#94a3b8" strokeWidth={1.5}
                    style={{ transform: "rotate(180deg)" }} />
                </div>
              </Link>
            </div>
          );
        })()}

      </div>
    </section>
  );
} 