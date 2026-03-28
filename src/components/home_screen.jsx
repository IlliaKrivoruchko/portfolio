import { Link } from "react-router-dom";
import { useState } from "react";



const bebasStyle = { fontFamily: "'Bebas Neue', sans-serif" };
const dmSans = { fontFamily: "'DM Sans', sans-serif" };

function GlassCard({ children, large = false }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${large ? "md:col-span-2 p-10 md:p-12" : "p-8"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.38)",
        backdropFilter: "blur(28px) saturate(200%)",
        WebkitBackdropFilter: "blur(28px) saturate(200%)",
        border: hovered ? "1px solid rgba(255,255,255,0.95)" : "1px solid rgba(255,255,255,0.65)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)"
          : "0 8px 32px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.85)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent)" }}
      />
      {children}
    </div>
  );
}

function Header() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">

      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 py-32 relative z-10">

        {/* ЛЕВАЯ ЧАСТЬ */}
        <div className="flex-1 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full" style={{
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.85)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            ...dmSans,
          }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-500 text-sm tracking-[0.2em] uppercase">
              Available for Hire · 2027
            </span>
          </div>

          {/* Заголовок */}
          <h1 className="text-[5rem] md:text-[7rem] lg:text-[9rem] leading-none mb-6 tracking-wide" style={{ ...bebasStyle, color: "#0f172a" }}>
            Web<br />
            <span style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Developer
            </span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md mx-auto" style={dmSans}>
            I'm <span className="text-slate-800 font-medium">Illia</span> — student of APPAI at Thomas More.
            Building clean, purposeful web experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-sm md:text-base justify-center">
            <Link to="/projects" className="px-8 py-3 rounded-full  font-medium tracking-wide transition-all duration-300 hover:opacity-85"
              style={{ background: "#0f172a", color: "#fff", ...dmSans }}>
              View Projects
            </Link>
            <Link to="/contact" className="px-8 py-3 rounded-full  font-light tracking-wide transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.5)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.85)",
                color: "#334155",
                ...dmSans,
              }}>
              Get in Touch
            </Link>
          </div>
        </div>

      
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)" }} />
    </section>
  );
}

function Projects() {
  const myProjects = [
    {
  title: "SKIL 1 Project",
  context: "Thomas More · Second Year · 1st Semester",
  description: "Software Modeling and Design (SMD) project focused on analyzing a software system and defining its core components. The project included creating use case diagrams, identifying system requirements, and designing a database model. We worked on understanding user interactions and translating them into structured system models.",
  tags: ["Software Modeling", "Database Design", "Use Cases", "Requirements Analysis", "Teamwork"],
},
    {
  title: "SKIL 2 — Current",
  context: "Client Project · 2nd Semester",
  description: "Developing a Laravel-based application based on requirements provided by another team. Working in a Scrum environment to implement features and deliver iterative improvements.",
  tags: ["Laravel", "Scrum", "Teamwork"],
},
    {
      title: "Personal Portfolio",
      context: "Self-driven Project",
      description: "Modern web portfolio built with React and Tailwind to showcase technical skills.",
      tags: ["React", "Tailwind", "Vite"],
    },
    {
  title: "EcoRise",
  context: "Game Jam · Side Project",
  description: "Built a browser-based strategy game in a 2–3 day game jam using JavaScript and HTML. The game focused on balancing expansion and resource generation while keeping the carbon footprint below a critical limit.",
  tags: ["JavaScript", "HTML", "Game Dev"],
}
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-6">
          <div>
            <p className="text-slate-400 text-sm  tracking-[0.3em] uppercase mb-4" style={dmSans}>
              Selected Works
            </p>
            <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] leading-none tracking-wide"
              style={{ ...bebasStyle, color: "#0f172a" }}>
              Projects
            </h2>
          </div>
          <p className="text-slate-400 max-w-xs text-sm md:text-lg  leading-relaxed md:text-right font-light" style={dmSans}>
            Academic and personal work from my journey at Thomas More.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard large>
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
              <div>
                <span className="text-sm text-slate-400 uppercase tracking-[0.25em]" style={dmSans}>
                  {myProjects[0].context}
                </span>
                <h3 className="text-5xl md:text-6xl mt-4 mb-6 tracking-wide" style={{ ...bebasStyle, color: "#0f172a" }}>
                  {myProjects[0].title}
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light max-w-lg" style={dmSans}>
                  {myProjects[0].description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {myProjects[0].tags.map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full text-slate-600 text-sm md:text-base" style={{
                    background: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(255,255,255,0.95)",
                    backdropFilter: "blur(8px)",
                    ...dmSans,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>

          {myProjects.slice(1).map((project, index) => (
            <GlassCard key={index}>
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="text-sm text-slate-400 uppercase tracking-[0.25em]" style={dmSans}>
                    {project.context}
                  </span>
                  <h3 className="text-3xl mt-3 mb-4 tracking-wide" style={{ ...bebasStyle, color: "#0f172a" }}>
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light" style={dmSans}>
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-slate-600 text-sm md:text-base" style={{
                      background: "rgba(255,255,255,0.65)",
                      border: "1px solid rgba(255,255,255,0.95)",
                      backdropFilter: "blur(8px)",
                      ...dmSans,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Header />
      <Projects />
    </>
  );
}

export default Home;