import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import ProgressBar from "./ProgressBar";
import type { Area } from "@/data/enemData";

interface AreaCardProps {
  area: Area;
  studiedPercent: number;
  practicedPercent: number;
  totalSubjects: number;
  completedSubjects: number;
}

const borderMap = {
  cyan: "neon-border-cyan neon-glow-cyan",
  purple: "neon-border-purple neon-glow-purple",
  pink: "neon-border-pink neon-glow-pink",
  green: "neon-border-green neon-glow-green",
};

const AreaCard = ({ area, studiedPercent, practicedPercent, totalSubjects, completedSubjects }: AreaCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/area/${area.id}`)}
      className={cn(
        "glass-card rounded-xl p-6 text-left w-full transition-all duration-300",
        "hover:scale-[1.03] hover:brightness-110 cursor-pointer",
        "border",
        borderMap[area.color]
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{area.icon}</span>
        <div>
          <h2 className="font-bold text-foreground text-sm md:text-base leading-tight">{area.name}</h2>
          <p className="text-xs text-muted-foreground mt-0.5">{completedSubjects}/{totalSubjects} assuntos</p>
        </div>
      </div>
      <ProgressBar value={studiedPercent} color={area.color} label="Estudados" className="mb-2" />
      <ProgressBar value={practicedPercent} color={area.color} label="Praticados" />
    </button>
  );
};

export default AreaCard;
