import NeonTitle from "@/components/NeonTitle";
import AreaCard from "@/components/AreaCard";
import ProgressBar from "@/components/ProgressBar";
import { enemData, countSubjects } from "@/data/enemData";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

const Dashboard = () => {
  const { progress, resetProgress } = useStudyProgress();

  const totalSubjects = countSubjects(enemData);
  const studiedCount = Object.values(progress).filter(p => p.studied).length;
  const practicedCount = Object.values(progress).filter(p => p.practiced).length;
  const completedCount = Object.values(progress).filter(p => p.studied && p.practiced).length;

  const studiedPercent = totalSubjects ? (studiedCount / totalSubjects) * 100 : 0;
  const practicedPercent = totalSubjects ? (practicedCount / totalSubjects) * 100 : 0;

  const getAreaStats = (area: typeof enemData[0]) => {
    const subjects = area.disciplines.flatMap(d => d.subjects);
    const total = subjects.length;
    const studied = subjects.filter(s => progress[s.id]?.studied).length;
    const practiced = subjects.filter(s => progress[s.id]?.practiced).length;
    const completed = subjects.filter(s => progress[s.id]?.studied && progress[s.id]?.practiced).length;
    return {
      totalSubjects: total,
      completedSubjects: completed,
      studiedPercent: total ? (studied / total) * 100 : 0,
      practicedPercent: total ? (practiced / total) * 100 : 0,
    };
  };

  return (
    <div className="min-h-screen px-4 py-8 max-w-5xl mx-auto">
      <NeonTitle />

      {/* Overall progress */}
      <div className="glass-card rounded-xl p-6 mt-8 neon-border-cyan border">
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-bold text-foreground text-lg">Progresso Geral</h2>
          <span className="text-xs text-muted-foreground">
            {completedCount}/{totalSubjects} completos
          </span>
        </div>
        <ProgressBar value={studiedPercent} color="cyan" label="Estudados" className="mb-2" />
        <ProgressBar value={practicedPercent} color="purple" label="Praticados" />
      </div>

      {/* Area cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {enemData.map(area => {
          const stats = getAreaStats(area);
          return (
            <AreaCard key={area.id} area={area} {...stats} />
          );
        })}
      </div>

      {/* Reset + Footer */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            if (confirm("Tem certeza que deseja resetar todo o progresso?")) resetProgress();
          }}
          className="border-destructive/50 text-destructive hover:bg-destructive/10"
        >
          <RotateCcw className="mr-2 h-4 w-4" /> Resetar Progresso
        </Button>
        <footer className="text-xs text-muted-foreground pb-4">
          Criado por <span className="neon-text-purple font-semibold">Jefferson Souza</span>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
