import { useParams, Link } from "react-router-dom";
import { enemData } from "@/data/enemData";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import ProgressBar from "@/components/ProgressBar";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowLeft, ExternalLink, Youtube, Lightbulb, BookOpen, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const glowClass: Record<string, string> = {
  cyan: "neon-glow-cyan neon-border-cyan",
  purple: "neon-glow-purple neon-border-purple",
  pink: "neon-glow-pink neon-border-pink",
  green: "neon-glow-green neon-border-green",
};

const AreaPage = () => {
  const { areaId } = useParams<{ areaId: string }>();
  const area = enemData.find(a => a.id === areaId);
  const { getSubjectProgress, toggleStudied, togglePracticed } = useStudyProgress();
  const [filter, setFilter] = useState<"all" | "not-studied" | "not-practiced">("all");

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Área não encontrada.</p>
      </div>
    );
  }

  const allSubjects = area.disciplines.flatMap(d => d.subjects);
  const studied = allSubjects.filter(s => getSubjectProgress(s.id).studied).length;
  const practiced = allSubjects.filter(s => getSubjectProgress(s.id).practiced).length;

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft className="h-4 w-4" /> Voltar ao Dashboard
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{area.icon}</span>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{area.name}</h1>
          <p className="text-sm text-muted-foreground">{studied}/{allSubjects.length} estudados · {practiced}/{allSubjects.length} praticados</p>
        </div>
      </div>

      <ProgressBar value={allSubjects.length ? (studied / allSubjects.length) * 100 : 0} color={area.color} label="Estudados" className="mb-2" />
      <ProgressBar value={allSubjects.length ? (practiced / allSubjects.length) * 100 : 0} color={area.color} label="Praticados" className="mb-4" />

      {/* Filter */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <Button size="sm" variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
          <Filter className="h-3 w-3 mr-1" /> Todos
        </Button>
        <Button size="sm" variant={filter === "not-studied" ? "default" : "outline"} onClick={() => setFilter("not-studied")}>
          Não estudados
        </Button>
        <Button size="sm" variant={filter === "not-practiced" ? "default" : "outline"} onClick={() => setFilter("not-practiced")}>
          Não praticados
        </Button>
      </div>

      {/* Disciplines */}
      <Accordion type="multiple" className="space-y-3">
        {area.disciplines.map(disc => {
          const filteredSubjects = disc.subjects.filter(s => {
            const p = getSubjectProgress(s.id);
            if (filter === "not-studied") return !p.studied;
            if (filter === "not-practiced") return !p.practiced;
            return true;
          });

          if (filteredSubjects.length === 0 && filter !== "all") return null;

          const discStudied = disc.subjects.filter(s => getSubjectProgress(s.id).studied).length;

          return (
            <AccordionItem key={disc.id} value={disc.id} className={cn("glass-card rounded-xl border px-4", glowClass[area.color])}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold text-foreground">{disc.name}</span>
                  <span className="text-xs text-muted-foreground">({discStudied}/{disc.subjects.length})</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  {filteredSubjects.map(subject => {
                    const sp = getSubjectProgress(subject.id);
                    const status = sp.studied && sp.practiced ? "complete" : sp.studied ? "partial" : "none";

                    return (
                      <div key={subject.id} className={cn(
                        "rounded-lg p-3 border transition-colors",
                        status === "complete" ? "border-[hsla(150,80%,50%,0.3)] bg-[hsla(150,80%,50%,0.05)]"
                          : status === "partial" ? "border-[hsla(185,100%,50%,0.2)] bg-[hsla(185,100%,50%,0.03)]"
                          : "border-border bg-muted/20"
                      )}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <span className="font-medium text-sm text-foreground">{subject.name}</span>
                          <div className="flex items-center gap-4">
                            <label className="flex items-center gap-1.5 text-xs cursor-pointer">
                              <Checkbox checked={sp.studied} onCheckedChange={() => toggleStudied(subject.id)} />
                              Estudei
                            </label>
                            <label className="flex items-center gap-1.5 text-xs cursor-pointer">
                              <Checkbox checked={sp.practiced} onCheckedChange={() => togglePracticed(subject.id)} />
                              Pratiquei
                            </label>
                          </div>
                        </div>

                        {/* Resources */}
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="mt-2 text-xs text-muted-foreground hover:text-foreground">
                              <Lightbulb className="h-3 w-3 mr-1" /> Ver Recursos
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 space-y-2">
                            {subject.resources.map((res, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs">
                                {res.type === "site" && <ExternalLink className="h-3 w-3 mt-0.5 text-primary shrink-0" />}
                                {res.type === "video" && <Youtube className="h-3 w-3 mt-0.5 text-accent shrink-0" />}
                                {res.type === "tip" && <Lightbulb className="h-3 w-3 mt-0.5 text-secondary shrink-0" />}
                                <div>
                                  {res.url ? (
                                    <a href={res.url} target="_blank" rel="noopener noreferrer"
                                      className="text-primary hover:underline font-medium">
                                      {res.title}
                                    </a>
                                  ) : (
                                    <span className="font-medium text-secondary">Dica:</span>
                                  )}
                                  <p className="text-muted-foreground">{res.description}</p>
                                </div>
                              </div>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <footer className="text-center text-xs text-muted-foreground mt-8 pb-4">
        Criado por <span className="neon-text-purple font-semibold">Jefferson Souza</span>
      </footer>
    </div>
  );
};

export default AreaPage;
