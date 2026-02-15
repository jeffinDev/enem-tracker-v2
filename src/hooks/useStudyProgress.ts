import { useState, useEffect, useCallback } from "react";

export interface SubjectProgress {
  studied: boolean;
  practiced: boolean;
}

export type ProgressMap = Record<string, SubjectProgress>;

const STORAGE_KEY = "enem-tracker-v2-progress";

function loadProgress(): ProgressMap {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function useStudyProgress() {
  const [progress, setProgress] = useState<ProgressMap>(loadProgress);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const toggleStudied = useCallback((subjectId: string) => {
    setProgress(prev => ({
      ...prev,
      [subjectId]: {
        studied: !prev[subjectId]?.studied,
        practiced: prev[subjectId]?.practiced || false,
      }
    }));
  }, []);

  const togglePracticed = useCallback((subjectId: string) => {
    setProgress(prev => ({
      ...prev,
      [subjectId]: {
        studied: prev[subjectId]?.studied || false,
        practiced: !prev[subjectId]?.practiced,
      }
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress({});
  }, []);

  const getSubjectProgress = useCallback((subjectId: string): SubjectProgress => {
    return progress[subjectId] || { studied: false, practiced: false };
  }, [progress]);

  return { progress, toggleStudied, togglePracticed, resetProgress, getSubjectProgress };
}
