import { Link } from "react-router-dom";
import { Download, ArrowLeft } from "lucide-react";

const bebasStyle = { fontFamily: "'Bebas Neue', sans-serif" };
const dmSans = { fontFamily: "'DM Sans', sans-serif" };

export default function CV() {
  return (
    <section className="pt-24 pb-20 md:pb-12 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-xs tracking-widest uppercase transition-colors duration-200 mb-6"
              style={dmSans}
            >
              <ArrowLeft size={13} strokeWidth={1.5} />
              Back to About
            </Link>
            <h1
              className="leading-none tracking-wide"
              style={{ ...bebasStyle, fontSize: "clamp(3rem, 7vw, 6rem)", color: "#0f172a" }}
            >
              My CV
            </h1>
          </div>

        </div>

        {/* PDF Viewer */}
        <div
          className="w-full overflow-hidden rounded-3xl"
          style={{
            background: "rgba(255,255,255,0.38)",
            backdropFilter: "blur(28px) saturate(200%)",
            WebkitBackdropFilter: "blur(28px) saturate(200%)",
            border: "1px solid rgba(255,255,255,0.65)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.85)",
          }}
        >
          {/* Блик сверху */}
          <div className="h-px w-full"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent)" }} />

          <iframe
            src="/CV_Illia.pdf"
            title="Illia CV"
            className="w-full"
            style={{ height: "85vh", border: "none" }}
          />
        </div>

        
      </div>
    </section>
  );
}