import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MMSETest } from '../MMSETest';
import { Answer } from '../Answer';
import { MmsetestService } from "../mmsetest.service";

@Component({
  selector: 'app-ask-year',
  templateUrl: './ask-year.component.html',
  styleUrls: ['./ask-year.component.css']
})
export class AskYearComponent implements OnInit {

  currentAnswer: string;
  
  constructor(private activatedRoute: ActivatedRoute, private mmseService: MmsetestService) { }

  ngOnInit() {
    var msg = new SpeechSynthesisUtterance('Welk jaar is het?');
    msg.lang = 'nl-NL';
    msg.rate = 0.8;
    window.speechSynthesis.speak(msg);
    this.startDictation();
  }

  startDictation(): void {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      const {webkitSpeechRecognition} = (window as any)
      var recognition = new webkitSpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = false;

      recognition.lang = "nl-NL";
      recognition.start();

      recognition.onresult = function (e) {
        recognition.stop();
        document.getElementById('jaar_span').textContent = e.results[0][0].transcript;
        this.currentAnswer = e.results[0][0].transcript
        var truth = checkYear(this.currentAnswer);        

        if (truth) {
          document.getElementById('correctheid').textContent = "Antwoord is goed"
        } else {
          document.getElementById('correctheid').textContent = "Antwoord is fout"
        }

        function checkYear(answer: string): boolean {
          var current_year = new Date().getFullYear().toString();

          if (answer.includes(current_year) == true) {
            return true;
          } else {
            return false;
          }
        }

        recognition.onerror = function (e) {
          recognition.stop();
        }
      }
    }
  }

  finalizeAnswer(): void {
    var id = +this.activatedRoute.snapshot.paramMap.get('id');
    var test = this.mmseService.getMMSETest(id);
    var answer = new Answer();
    answer.questionid = 1;
    answer.score = 0;
    answer.value = this.currentAnswer;
    test.answers[answer.questionid] = answer;
  }
}
