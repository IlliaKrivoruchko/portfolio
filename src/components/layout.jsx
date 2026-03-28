import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";


export default function Layout() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #e0f2fe 0%, #f5f3ff 45%, #ecfdf5 100%)",
    }}>
      {/* Общий слой blob-ов на всю страницу */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "-10%", left: "-15%",
          width: "60vw", height: "60vw",
          background: "radial-gradient(circle, #a5f3fc 0%, #67e8f9 40%, transparent 70%)",
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
          filter: "blur(70px)", opacity: 0.6,
        }} />
        <div style={{
          position: "absolute", top: "5%", right: "-15%",
          width: "50vw", height: "50vw",
          background: "radial-gradient(circle, #c4b5fd 0%, #a78bfa 50%, transparent 70%)",
          borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%",
          filter: "blur(60px)", opacity: 0.5,
        }} />
        <div style={{
          position: "absolute", top: "35%", left: "15%",
          width: "45vw", height: "45vw",
          background: "radial-gradient(circle, #bbf7d0 0%, #86efac 50%, transparent 70%)",
          borderRadius: "50% 50% 40% 60% / 40% 60% 50% 50%",
          filter: "blur(65px)", opacity: 0.45,
        }} />
        <div style={{
          position: "absolute", top: "60%", right: "10%",
          width: "40vw", height: "40vw",
          background: "radial-gradient(circle, #bfdbfe 0%, #93c5fd 50%, transparent 70%)",
          borderRadius: "40% 60% 60% 40%",
          filter: "blur(65px)", opacity: 0.5,
        }} />
        <div style={{
          position: "absolute", bottom: "5%", left: "-5%",
          width: "40vw", height: "40vw",
          background: "radial-gradient(circle, #fde68a 0%, #fcd34d 50%, transparent 70%)",
          borderRadius: "60% 40% 40% 60%",
          filter: "blur(60px)", opacity: 0.35,
        }} />
        <div style={{
          position: "absolute", bottom: "20%", right: "25%",
          width: "35vw", height: "35vw",
          background: "radial-gradient(circle, #fce7f3 0%, #f9a8d4 50%, transparent 70%)",
          borderRadius: "60% 40% 50% 50%",
          filter: "blur(55px)", opacity: 0.45,
        }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }} className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}