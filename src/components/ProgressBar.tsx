import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  color?: "green" | "blue" | "teal" | "emerald";
  label?: string;
  showPercent?: boolean;
  className?: string;
}

const colorMap = {
  green: "from-[hsl(152,60%,42%)] to-[hsl(152,55%,55%)]",
  blue: "from-[hsl(205,75%,50%)] to-[hsl(220,70%,55%)]",
  teal: "from-[hsl(170,50%,45%)] to-[hsl(170,45%,55%)]",
  emerald: "from-[hsl(160,55%,38%)] to-[hsl(160,50%,50%)]",
};

const ProgressBar = ({ value, color = "green", label, showPercent = true, className }: ProgressBarProps) => (
  <div className={cn("w-full", className)}>
    {(label || showPercent) && (
      <div className="flex justify-between items-center mb-1.5">
        {label && <span className="text-xs font-medium text-muted-foreground">{label}</span>}
        {showPercent && <span className="text-xs font-bold text-primary">{Math.round(value)}%</span>}
      </div>
    )}
    <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
      <div
        className={cn(
          "h-full rounded-full bg-gradient-to-r progress-bar-animated",
          colorMap[color]
        )}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  </div>
);

export default ProgressBar;
