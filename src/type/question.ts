export interface Hint {
  category: string;
  hint: string;
}
export interface Question {
  key: string;
  date: string;
  question: string;
  hint: Hint[] | null;
  sex: string;
}
