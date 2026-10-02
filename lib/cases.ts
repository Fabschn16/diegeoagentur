/**
 * Fallstudien. Nur echte, freigegebene Projekte mit nachvollziehbarer Methodik eintragen.
 * Solange die Liste leer ist, zeigt die Website einen ehrlichen „In Vorbereitung“-Zustand.
 */
export type CaseStudy = {
  client: string;
  industry: string;
  title: string;
  summary: string;
  metrics: { value: string; label: string }[];
  method: string; // z. B. "120 Prompts · 4 Plattformen · 6 Monate"
  href?: string;
};

export const cases: CaseStudy[] = [];
