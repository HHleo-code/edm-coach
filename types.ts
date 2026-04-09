export interface DeepProcessStep {
  label: string;
  description: string;
}

export interface Tip {
  label: string;
  text: string;
}

export interface QuestionData {
  title: string;
  text: string;
  deepProcess: DeepProcessStep[];
  tip: Tip;
}

export interface StepData {
  id: number;
  label: string;
  title: string;
  questions: QuestionData[];
}

export interface CheatsheetEmotionMapping {
  emotion: string;
  question: string;
  need: string;
}

export interface CheatsheetSection {
  title: string;
  type: 'list' | 'table' | 'block';
  content: string[] | CheatsheetEmotionMapping[];
  style?: 'positive' | 'negative';
}
