import { Link } from "react-router-dom";
import { useState } from "react";
import { Dumbbell, Plane, Gamepad2, Users, Globe, MessageCircle, Puzzle, Clock, FileText, Download } from "lucide-react";

const bebasStyle = { fontFamily: "'Bebas Neue', sans-serif" };
const dmSans = { fontFamily: "'DM Sans', sans-serif" };

function GlassCard({ children, className = "" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.38)",
        backdropFilter: "blur(28px) saturate(200%)",
        WebkitBackdropFilter: "blur(28px) saturate(200%)",
        border: hovered ? "1px solid rgba(255,255,255,0.95)" : "1px solid rgba(255,255,255,0.65)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.95)"
          : "0 8px 32px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.85)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent)" }} />
      {children}
    </div>
  );
}

const techSkills = [
  ".NET", "Java REST API", "Python · ML/DL", "FastAPI",
  "JavaScript", "React", "Laravel", "CSS / HTML / Tailwind",
];

const softSkills = [
  { icon: Users, label: "Teamwork" },
  { icon: Globe, label: "Adaptability" },
  { icon: MessageCircle, label: "Communication" },
  { icon: Puzzle, label: "Problem Solving" },
  { icon: Clock, label: "Time Management" },
];

const hobbies = [
  {
    Icon: Dumbbell,
    title: "Workout",
    desc: "The gym is my reset button. Consistent effort → visible progress. Sounds familiar.",
  },
  {
    Icon: Plane,
    title: "Travelling",
    desc: "Learning from different cultures and ways of life while on the move.",
  },
  {
    Icon: Gamepad2,
    title: "Gaming",
    desc: "Strategy and competitive games — focused on thinking, timing, and decision-making.",
  },
];

export default function About() {
  return (
    <section className="pt-28 pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── HERO ── */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-10 mb-32 md:mb-45">
          <div className="flex-1 text-center md:text-left">
            <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4" style={dmSans}>About Me</p>
            <h1 className="leading-none tracking-wide mb-0" style={{ ...bebasStyle, fontSize: "clamp(4rem, 10vw, 9rem)", color: "#0f172a" }}>
              Hey,<br />I'm{" "}
              <span style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Illia
              </span>
            </h1>
          </div>

          {/* Фото */}
          <div className="flex-shrink-0 relative">
            <div className="absolute -inset-3 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.6)" }} />
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full flex items-center justify-center overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(20px) saturate(150%)",
                WebkitBackdropFilter: "blur(20px) saturate(150%)",
                border: "1px solid rgba(255,255,255,0.75)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              }}>
              <img src="/Illia.webp" alt="Illia photo" className="w-full h-full object-cover" /> 
            </div>
          </div>

          {/* Короткий bio справа */}
          <div className="flex-1 text-center md:text-right">
            <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed" style={dmSans}>
              Ukrainian-born, Belgium-based.<br />
              Student Thomas More.<br />
              Building for the web.
            </p>
          </div>
        </div>

        {/* ── STORY — editorial layout ── */}
        <div className="mb-32">
          <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase mb-6" style={dmSans}>My Story</p>

          {/* Большой pull-quote */}
          <div className="border-l-2 border-slate-200 pl-8 mb-16">
            <p
              className="text-slate-800 font-light leading-snug"
              style={{ ...dmSans, fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
            >
              "Four years ago I packed my life into one bag<br className="hidden md:flex" />
              and moved from Ukraine to Belgium."
            </p>
          </div>

          {/* Текст в 2 колонки */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-16">
            <p className="text-slate-600 text-base md:text-xl leading-relaxed font-light" style={dmSans}>
              I was 17, I didn’t speak Dutch, and I didn’t know anyone. It was both scary and exciting.
Starting from zero taught me something you can’t learn in school — that you can adapt more than you think, and that being uncomfortable is just a part of growing.
            </p>
            <p className="text-slate-600 text-base md:text-xl leading-relaxed font-light" style={dmSans}>
              Computers fascinated me long before Belgium. But the move made IT feel like a{" "}
              <span className="text-slate-900 font-medium">strategic choice</span>, not just a passion.
              A developer's skills travel with them — no diploma re-evaluation, no starting from zero
              in a new country. It's a profession that belongs to you, wherever you are.
            </p>
          </div>

          {/* Dreams & Ambitions — full width editorial */}
          <div className="mt-20 pt-16" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
            <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase mb-10" style={dmSans}>
              Dreams & Ambitions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10">
              <div>
                <h3 className="text-2xl md:text-4xl mb-3 tracking-wide" style={{ ...bebasStyle, color: "#0f172a" }}>Build Things That Matter</h3>
                <p className="text-slate-500 text-base md:text-xl leading-relaxed font-light" style={dmSans}>
                  Whether at a startup, a scale-up, or eventually something of my own — I want to work on products people actually use and love.
                </p>
              </div>
              <div>
  <h3
    className="text-2xl md:text-4xl mb-3 tracking-wide"
    style={{ ...bebasStyle, color: "#0f172a" }}
  >
    Building useful AI tools
  </h3>
  <p
    className="text-slate-500 text-base md:text-xl leading-relaxed font-light"
    style={dmSans}
  >
    I'm interested in creating AI-powered tools that actually solve everyday problems — not just experiments or demos. I want to build products that feel practical, fast, and intuitive to use.
  </p>
</div>
              <div>
                <h3 className="text-2xl md:text-4xl mb-3 tracking-wide" style={{ ...bebasStyle, color: "#0f172a" }}>Stay Curious</h3>
                <p className="text-slate-500 text-base md:text-xl leading-relaxed font-light" style={dmSans}>
                  Graduate strong, ship side projects, visit all countries of Europe. The discipline you build in one area bleeds into everything else.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── HOBBIES — cards with lucide icons ── */}
        <div className="mb-40">
          <p className="text-slate-400 text-sm md:text-base  tracking-[0.3em] uppercase mb-6" style={dmSans}>Outside the Code</p>
          <h2 className="leading-none tracking-wide mb-14" style={{ ...bebasStyle, fontSize: "clamp(3rem, 7vw, 6rem)", color: "#0f172a" }}>
            Hobbies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hobbies.map(({ Icon, title, desc }, i) => (
              <GlassCard key={i} className="p-8">
                <div className="mb-6 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.15)" }}>
                  <Icon size={22} color="#6366f1" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-4xl mb-3 tracking-wide" style={{ ...bebasStyle, color: "#0f172a" }}>{title}</h3>
                <p className="text-slate-500 text-base md:text-xl leading-relaxed font-light" style={dmSans}>{desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* ── SKILLS ── */}
        <div className="mb-40">
          <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase mb-6" style={dmSans}>What I Work With</p>
          <h2 className="leading-none tracking-wide mb-14" style={{ ...bebasStyle, fontSize: "clamp(3rem, 7vw, 6rem)", color: "#0f172a" }}>
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Tech */}
            <div>
              <p className="text-slate-400 text-sm md:text-base tracking-[0.25em] uppercase mb-8" style={dmSans}>Hard SKills</p>
              <div className="flex flex-wrap gap-3">
                {techSkills.map((skill, i) => (
                  <span key={i} className="px-5 py-2.5 rounded-full text-slate-700 text-base md:text-xl font-medium"
                    style={{
                      background: "rgba(255,255,255,0.5)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.8)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      ...dmSans,
                    }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft skills with lucide icons */}
            <div>
              <p className="text-slate-400 text-sm md:text-base tracking-[0.25em] uppercase mb-8" style={dmSans}>Soft Skills</p>
              <div className="flex flex-col">
                {softSkills.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-4 py-4"
                    style={{ borderBottom: i < softSkills.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.15)" }}>
                      <Icon size={15} color="#6366f1" strokeWidth={1.5} />
                    </div>
                    <span className="text-slate-700 text-base md:text-xl font-medium" style={dmSans}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── CV ── */}
        <div className="mb-20">
          <p className="text-slate-400 text-sm md:text-base tracking-[0.3em] uppercase mb-6" style={dmSans}>Resume</p>
          <h2 className="leading-none tracking-wide mb-12" style={{ ...bebasStyle, fontSize: "clamp(3rem, 7vw, 6rem)", color: "#0f172a" }}>
            My CV
          </h2>
          <GlassCard className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.15)" }}>
                  <FileText size={22} color="#6366f1" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl tracking-wide mb-1" style={{ ...bebasStyle, color: "#0f172a" }}>
                    Illia — Web Developer
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base font-light" style={dmSans}>
                    Applied Computer Science · Thomas More · Geel
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/cv"
                  className="px-8 py-3 rounded-full text-sm md:text-base font-medium tracking-wide transition-all duration-300 hover:opacity-85 text-center"
                  style={{ background: "#0f172a", color: "#fff", ...dmSans }}>
                  View CV
                </Link>
                <a href="/CV_Illia.pdf" download="CV_Illia.pdf"
                  className="px-8 py-3 rounded-full text-sm md:text-base font-light tracking-wide transition-all duration-300 text-center flex items-center justify-center gap-2"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.85)",
                    color: "#334155",
                    ...dmSans,
                  }}>
                  <Download size={14} strokeWidth={1.5} />
                  Download PDF
                </a>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
}