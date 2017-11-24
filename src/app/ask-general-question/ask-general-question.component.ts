import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QUESTIONS } from "../QuestionsMock";
import { Question } from "../Question";
import { MMSETest } from '../MMSETest';
import { Answer } from '../Answer';
import { MmsetestService } from "../mmsetest.service";
import { CheckAnswerService } from "../check-answer.service";

@Component({
  selector: 'app-ask-general-question',
  templateUrl: './ask-general-question.component.html',
  styleUrls: ['./ask-general-question.component.css']
})
export class AskGeneralQuestionComponent implements OnInit {

  currentAnswer: string = "unknown";
  currentQuestion: Question;
  score : number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private mmseService: MmsetestService, private checkAnswerService: CheckAnswerService) { }

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
    msg.onend = function (e) {
      context.startDictation();
    }
  }

  startDictation(): void {
    var context = this;
    const { webkitSpeechRecognition } = (window as any)
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "nl-NL";
      recognition.start();

      recognition.onresult = function (e) {
        recognition.stop();
        context.currentAnswer = e.results[0][0].transcript;
        document.getElementById('answer').textContent = "Antwoord: " + context.currentAnswer;
        var id = +context.activatedRoute.snapshot.paramMap.get('id');
        var result = context.checkAnswerService.checkAnswer(context.currentQuestion.id, context.currentAnswer);

        if (result) {
          context.score = 1;
          document.getElementById('correctheid').textContent = "Antwoord is goed"
        } else {
          context.score = 0;
          document.getElementById('correctheid').textContent = "Antwoord is fout"
        }

        recognition.onerror = function (e) {
          recognition.stop();
        }
      }
    }
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
