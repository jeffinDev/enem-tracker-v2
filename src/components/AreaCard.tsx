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

const areaStyle = {
  green: "area-green",
  blue: "area-blue",
  teal: "area-teal",
  emerald: "area-emerald",
};

const AreaCard = ({ area, studiedPercent, practicedPercent, totalSubjects, completedSubjects }: AreaCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/area/${area.id}`)}
      className={cn(
        "edu-card p-6 text-left w-full",
        areaStyle[area.color]
      )}
      style={{
        borderLeft: `4px solid var(--area-color)`,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: "var(--area-color-light)" }}
        >
          {area.icon}
        </div>
        <div>
          <h2 className="font-bold text-foreground text-sm md:text-base leading-tight">{area.name}</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {completedSubjects}/{totalSubjects} assuntos completos
          </p>
        </div>
      </div>
      <ProgressBar value={studiedPercent} color={area.color} label="Estudados" className="mb-2" />
      <ProgressBar value={practicedPercent} color={area.color} label="Praticados" />
    </button>
  );
};

export default AreaCard;
