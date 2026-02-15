import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  color?: "cyan" | "purple" | "pink" | "green";
  label?: string;
  showPercent?: boolean;
  className?: string;
}

const colorMap = {
  cyan: "from-[hsl(185,100%,50%)] to-[hsl(185,100%,35%)]",
  purple: "from-[hsl(270,80%,60%)] to-[hsl(270,80%,45%)]",
  pink: "from-[hsl(330,80%,60%)] to-[hsl(330,80%,45%)]",
  green: "from-[hsl(150,80%,50%)] to-[hsl(150,80%,35%)]",
};

const glowMap = {
  cyan: "shadow-[0_0_10px_hsla(185,100%,50%,0.4)]",
  purple: "shadow-[0_0_10px_hsla(270,80%,60%,0.4)]",
  pink: "shadow-[0_0_10px_hsla(330,80%,60%,0.4)]",
  green: "shadow-[0_0_10px_hsla(150,80%,50%,0.4)]",
};

const ProgressBar = ({ value, color = "cyan", label, showPercent = true, className }: ProgressBarProps) => (
  <div className={cn("w-full", className)}>
    {(label || showPercent) && (
      <div className="flex justify-between items-center mb-1.5">
        {label && <span className="text-xs text-muted-foreground">{label}</span>}
        {showPercent && <span className="text-xs font-bold neon-text-cyan">{Math.round(value)}%</span>}
      </div>
    )}
    <div className="w-full h-2.5 rounded-full bg-muted/50 overflow-hidden">
      <div
        className={cn(
          "h-full rounded-full bg-gradient-to-r progress-bar-animated",
          colorMap[color],
          glowMap[color]
        )}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  </div>
);

export default ProgressBar;
