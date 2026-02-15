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

const areaClasses: Record<string, string> = {
  green: "area-green",
  blue: "area-blue",
  teal: "area-teal",
  emerald: "area-emerald",
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
    <div className={cn("min-h-screen px-4 py-8 max-w-4xl mx-auto", areaClasses[area.color])}>
      <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft className="h-4 w-4" /> Voltar ao Dashboard
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
          style={{ backgroundColor: "var(--area-color-light)" }}
        >
          {area.icon}
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{area.name}</h1>
          <p className="text-sm text-muted-foreground">{studied}/{allSubjects.length} estudados · {practiced}/{allSubjects.length} praticados</p>
        </div>
      </div>

      <div className="edu-card p-5 mb-6">
        <ProgressBar value={allSubjects.length ? (studied / allSubjects.length) * 100 : 0} color={area.color} label="Estudados" className="mb-3" />
        <ProgressBar value={allSubjects.length ? (practiced / allSubjects.length) * 100 : 0} color={area.color} label="Praticados" />
      </div>

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
            <AccordionItem
              key={disc.id}
              value={disc.id}
              className="edu-card px-4 border"
              style={{ borderLeftColor: "var(--area-color)", borderLeftWidth: "3px" }}
            >
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
                        "rounded-xl p-4 border transition-all",
                        status === "complete"
                          ? "bg-primary/5 border-primary/30"
                          : status === "partial"
                            ? "bg-secondary/5 border-secondary/20"
                            : "bg-muted/30 border-border"
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
                                {res.type === "video" && <Youtube className="h-3 w-3 mt-0.5 text-destructive shrink-0" />}
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
        Criado por <span className="text-gradient font-semibold">Jefferson Souza</span>
      </footer>
    </div>
  );
};

export default AreaPage;
