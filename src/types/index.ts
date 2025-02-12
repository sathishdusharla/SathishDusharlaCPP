export interface Topic {
  id: string;
  title: string;
  content: string;
  code?: string;
  additionalCode?: string;
  additionalCode2?: string;
  additionalCode3?: string;
  output?: string;
  additionalOutput?: string;
  additionalOutput2?: string;
  additionalOutput3?: string;
  completed: boolean;
  order: number;
  subtopics?: Topic[];
}

export interface User {
  currentTopic: string;
  progress: Record<string, boolean>;
}

export type ThemeMode = 'light' | 'dark';

export interface ContentSection {
  title: string;
  content: string;
  code?: string;
}