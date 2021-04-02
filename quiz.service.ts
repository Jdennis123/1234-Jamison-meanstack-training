import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes: Quiz[] = [
    {
      question: 'Which is not a programming language?',
      answer: [
        {option: 'C', correct: false },
        {option: 'Java', correct: false },
        {option: 'HTML', correct: true },
        {option: 'Javascript', correct: false }

      ]
    },
    {
      question: 'Who was the first president of the United States?',
      answer: [
        {option: 'Abraham Lincoln', correct: false },
        {option: 'Valdimir Putin', correct: false },
        {option: 'George Washington', correct: true },
        {option: 'George Washington Carver', correct: false }

      ]
    },
    {
      question: 'How many seasons are there?',
      answer: [
        {option: '1', correct: false },
        {option: '2', correct: false },
        {option: '3', correct: false },
        {option: '4', correct: true }

      ]
    },
    {
      question: 'How many continents are there?',
      answer: [
        {option: '7', correct: true },
        {option: '4', correct: false },
        {option: '5', correct: false },
        {option: '6', correct: false }

      ]
    },
    {
      question: 'Which country is located in Africa?',
      answer: [
        {option: 'India', correct: false },
        {option: 'Nigeria', correct: true },
        {option: 'Greece', correct: false },
        {option: 'Cuba', correct: false }

      ]
    },
    {
      question: 'Which planet is NOT a part of the solarsystem?',
      answer: [
        {option: 'Earth', correct: false },
        {option: 'Jupiter', correct: false },
        {option: 'Cybertron', correct: true },
        {option: 'Neptune', correct: true }

      ]
    },
  ]


  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}
