import {selectedQuestion} from 'type/question';

const questions: selectedQuestion[] = [
  {
    id: 1,
    chosenDate: '24.12.06',
    questionDto: {content: '질문1'},
    hint: null,
    writerGender: 'male',
    type: '',
  },
  {
    id: 2,
    chosenDate: '24.12.06',
    questionDto: {content: '질문2'},
    hint: [
      {
        category: 'personality',
        hint: '발랄',
      },
      {
        category: 'grade',
        hint: '3',
      },
      {
        category: 'class',
        hint: '1',
      },
      {
        category: 'hobby',
        hint: '노래방가기',
      },
      {category: 'name', hint: 'ㄱ'},
    ],
    writerGender: 'male',
    type: '',
  },
  {
    id: 3,
    chosenDate: '24.12.06',
    questionDto: {content: '질문3'},
    hint: [
      {
        category: 'personality',
        hint: '유쾌',
      },
      {
        category: 'grade',
        hint: '2',
      },
      {
        category: 'class',
        hint: '1',
      },
      {
        category: 'hobby',
        hint: '축구',
      },
      {category: 'name', hint: 'ㅅ'},
    ],
    writerGender: 'male',
    type: '',
  },
  {
    id: 4,
    chosenDate: '24.12.05',
    questionDto: {content: '질문4'},
    hint: null,
    writerGender: 'male',
    type: '',
  },
  {
    id: 5,
    chosenDate: '24.12.05',
    questionDto: {content: '질문5'},
    hint: null,
    writerGender: 'male',
    type: '',
  },
  {
    id: 6,
    chosenDate: '24.12.04',
    questionDto: {content: '질문6'},
    hint: null,
    writerGender: 'male',
    type: '',
  },
];

export default questions;
