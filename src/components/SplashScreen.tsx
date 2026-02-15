import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 100);
    const t2 = setTimeout(() => setPhase("exit"), 2800);
    const t3 = setTimeout(onFinish, 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onFinish]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700",
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
      style={{ background: "linear-gradient(135deg, hsl(152,60%,8%) 0%, hsl(205,75%,10%) 50%, hsl(160,50%,6%) 100%)" }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,197,94,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "gridMove 20s linear infinite",
          }}
        />
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${120 + i * 60}px`,
              height: `${120 + i * 60}px`,
              background: i % 2 === 0
                ? "radial-gradient(circle, hsla(152,60%,42%,0.15), transparent 70%)"
                : "radial-gradient(circle, hsla(205,75%,50%,0.12), transparent 70%)",
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `floatOrb ${6 + i * 2}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        {/* 3D Title */}
        <div
          className={cn(
            "transition-all duration-1000 ease-out",
            phase === "enter" ? "opacity-0 translate-y-8 scale-90" : "opacity-100 translate-y-0 scale-100"
          )}
          style={{ perspective: "1200px" }}
        >
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-2"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "linear-gradient(135deg, hsl(152,60%,50%) 0%, hsl(205,75%,55%) 50%, hsl(170,50%,50%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              transform: "rotateX(5deg) rotateY(-2deg)",
              transformStyle: "preserve-3d",
              textShadow: "none",
              filter: "drop-shadow(0 0 40px hsla(152,60%,42%,0.3)) drop-shadow(0 0 80px hsla(205,75%,50%,0.15))",
            }}
          >
            ENEM Tracker
          </h1>
          <div
            className="text-lg sm:text-xl md:text-2xl font-semibold tracking-widest uppercase"
            style={{
              color: "hsla(152,60%,60%,0.7)",
              transform: "rotateX(5deg) rotateY(-2deg)",
              transformStyle: "preserve-3d",
              letterSpacing: "0.3em",
            }}
          >
            V2
          </div>
        </div>

        {/* Subtitle */}
        <p
          className={cn(
            "mt-6 text-sm sm:text-base transition-all duration-1000 delay-500",
            phase === "enter" ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          )}
          style={{ color: "hsla(210,20%,70%,0.7)" }}
        >
          Seu companheiro de estudos para o ENEM 🎓
        </p>

        {/* Creator credit */}
        <div
          className={cn(
            "mt-8 transition-all duration-1000 delay-700",
            phase === "enter" ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          )}
        >
          <p className="text-xs" style={{ color: "hsla(210,20%,60%,0.5)" }}>
            Criado por
          </p>
          <p
            className="text-sm font-semibold mt-1"
            style={{
              background: "linear-gradient(135deg, hsl(152,60%,50%), hsl(205,75%,55%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Jefferson Souza
          </p>
        </div>

        {/* Loading bar */}
        <div
          className={cn(
            "mt-10 mx-auto h-1 rounded-full overflow-hidden transition-all duration-700 delay-300",
            phase === "enter" ? "opacity-0 w-0" : "opacity-100 w-48 sm:w-64"
          )}
          style={{ background: "hsla(152,60%,42%,0.15)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(152,60%,42%), hsl(205,75%,50%))",
              animation: "loadBar 2.5s ease-in-out forwards",
              animationDelay: "0.3s",
              width: "0%",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, -40px) scale(1.2); }
        }
        @keyframes loadBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
