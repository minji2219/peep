export interface Hint {
  category: string;
  hint: string;
}
// export interface selectedQuestion {
//   key: string;
//   date: string;
//   question: string;
//   hint: Hint[] | null;
//   sex: string;
// }

export interface selectedQuestion {
  id: number;
  questionDto: questionDto;
  chosenDate: string;
  type: string;
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
