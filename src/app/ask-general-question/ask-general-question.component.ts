import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute, private mmseService: MmsetestService, private checkAnswerService: CheckAnswerService) { }

  ngOnInit() {
    var questionId = +this.activatedRoute.snapshot.paramMap.get('qId');
    for (var question of QUESTIONS) {
      if (question.id == questionId) {
        this.currentQuestion = question;
        break;
      }
    }

  }

  startDictation(): void {

    const {webkitSpeechRecognition} = (window as any)
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = "nl-NL";
      recognition.start();

      recognition.onresult = function (e) {
        recognition.stop();
        document.getElementById('answer').textContent = e.results[0][0].transcript;
        this.currentAnswer = e.results[0][0].transcript

        var id = +this.activatedRoute.snapshot.paramMap.get('id');
        var result = this.checkAnswerService.checkAnswer(this.currentQuestion.id, this.currentAnswer);

        if (result) {
          document.getElementById('correctheid').textContent = "Antwoord is goed"
        } else {
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
    answer.questionid = 1;
    answer.score = 0;
    answer.value = this.currentAnswer;
    test.answers[answer.questionid] = answer;
  }
}
