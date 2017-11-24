import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Answer } from '../Answer';
import { MmsetestService } from "../mmsetest.service";
import { QUESTIONS } from "../QuestionsMock";
import { Question } from "../Question";

@Component({
  selector: 'app-deduction',
  templateUrl: './deduction.component.html',
  styleUrls: ['./deduction.component.css']
})
export class DeductionComponent implements OnInit {

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
    msg.onend = function (e) {
      context.startDictation();
    }
  }

  startDictation(): void {
    var context = this;
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      const { webkitSpeechRecognition } = (window as any)
      var recognition = new webkitSpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = false;

      recognition.lang = "nl-NL";
      recognition.start();

      recognition.onresult = function (e) {
        recognition.stop();
        this.currentAnswer = e.results[0][0].transcript

        this.currentAnswer = checkDeduction(this.currentAnswer);

        function checkDeduction(answer: string): string {
          var finalAnswer: string;
          var lastNumber = 100;
          var div = document.createElement('div');
          console.log(answer);
          var re = /(1)|\d{2}/g;
          var m;
          while (m = re.exec(answer)) {
            if (m[0] == '1') {
              m[0] = '100';
            }
            var div = document.createElement('div');
            if ((lastNumber - m[0]) == 7 || m[0] == 100) {
              div.innerHTML = '<span style="color:green">' + m[0] + '</span>';
            } else {
              div.innerHTML = '<span style="color:red">' + m[0] + '</span>';
            }
            var myEl = document.getElementById('numbers').appendChild(div);
            lastNumber = m[0];
            finalAnswer = finalAnswer + lastNumber + " ";
          }
          return finalAnswer;
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

    test.answers[answer.questionid] = answer;
    this.router.navigate(["/questionlist/" + testId.toString()]);
  }

}
