import { Instagram } from "lucide-react";

const NeonTitle = () => (
  <div className="text-center py-8">
    <div className="perspective-1000 mb-3">
      <h1
        className="transform-3d text-4xl md:text-6xl font-extrabold tracking-tight text-gradient"
        style={{
          transform: "rotateX(4deg) rotateY(-1deg)",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        ENEM Tracker V2
      </h1>
    </div>
    <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
      Seu companheiro de estudos para o ENEM 🎓
    </p>
    <div className="flex items-center justify-center gap-4 mt-4">
      <a
        href="https://instagram.com/jeffinvfx"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
      >
        <Instagram className="h-3.5 w-3.5" /> @jeffinvfx
      </a>
      <span className="text-border">•</span>
      <a
        href="https://instagram.com/EnemTracker"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-secondary transition-colors"
      >
        <Instagram className="h-3.5 w-3.5" /> @EnemTracker
      </a>
    </div>
  </div>
);

export default NeonTitle;
