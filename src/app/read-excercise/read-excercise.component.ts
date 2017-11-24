import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QUESTIONS } from "../QuestionsMock";
import { Question } from "../Question";
import { MMSETest } from '../MMSETest';
import { Answer } from '../Answer';
import { MmsetestService } from "../mmsetest.service";

@Component({
  selector: 'app-read-excercise',
  templateUrl: './read-excercise.component.html',
  styleUrls: ['./read-excercise.component.css']
})
export class ReadExcerciseComponent implements OnInit {

  currentAnswer: string = "unknown";
  currentQuestion: Question;
  score: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private mmseService: MmsetestService) { }

  ngOnInit() {
    var questionId = +this.activatedRoute.snapshot.paramMap.get('qId');
    for (var question of QUESTIONS) {
      if (question.id == questionId) {
        this.currentQuestion = question;
        break;
      }
    }
    var context = this;
    var msg = new SpeechSynthesisUtterance(this.currentQuestion.description);
    msg.lang = 'nl-NL';
    msg.rate = 0.8;
    window.speechSynthesis.speak(msg);

    this.currentAnswer = "Niet geklikt!";
    this.score = 0;
  }

  klik(): void {  	
    this.currentAnswer = "Er is geklikt";
    this.score = 1;
    document.getElementById('klik').textContent = this.currentAnswer;
  }

  finalizeAnswer(): void {
    var testId = +this.activatedRoute.snapshot.paramMap.get('tId');
    var test = this.mmseService.getMMSETest(testId);
    var answer = new Answer();
    answer.questionid = this.currentQuestion.id;
    answer.score = this.score;
    answer.value = this.currentAnswer;
    console.log(this.currentAnswer);

    test.answers[answer.questionid] = answer;
    this.router.navigate(["/questionlist/" + testId.toString()]);
  }

}
