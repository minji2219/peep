import {Question} from 'type/question';

const questions: Question[] = [
  {
    key: '1',
    date: '24.12.06',
    question: '질문1',
    hint: null,
    sex: 'male',
  },
  {
    key: '2',
    date: '24.12.06',
    question: '질문2',
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
    sex: 'male',
  },
  {
    key: '3',
    date: '24.12.06',
    question: '질문3',
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
    sex: 'female',
  },
  {
    key: '4',
    date: '24.12.05',
    question: '질문1',
    hint: null,
    sex: 'female',
  },
  {
    key: '5',
    date: '24.12.05',
    question: '질문2',
    hint: null,
    sex: 'male',
  },
  {
    key: '6',
    date: '24.12.04',
    question: '질문1',
    hint: null,
    sex: 'male',
  },
];

export default questions;
