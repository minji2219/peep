export interface Hint {
  category: string;
  hint: string;
}

export interface selectedQuestion {
  chosenDate: string;
  id: number;
  questionDto: questionDto;
  type: string;
  writerGender: string;
  hint: Hint[] | null;
}

export interface receivedQuestion {
  commonQuestions: commonQuestions[];
  randomQuestions: randomQuestions[];
}

export interface commonQuestions {
  id: number;
  grade: number;
  myClass: number;
  schoolDto: schoolDto;
  questionDto: questionDto;
}

export interface randomQuestions {
  id: number;
  questionDto: questionDto;
  whether: boolean;
}

interface schoolDto {
  educationOffice: string;
  id: number;
  schoolName: string;
}

interface questionDto {
  content: string;
}
