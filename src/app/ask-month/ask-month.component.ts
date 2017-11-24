import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MMSETest } from '../MMSETest';
import { Answer } from '../Answer';
import { MmsetestService } from "../mmsetest.service";

@Component({
  selector: 'app-ask-month',
  templateUrl: './ask-month.component.html',
  styleUrls: ['./ask-month.component.css']
})
export class AskMonthComponent implements OnInit {

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
        document.getElementById('month').textContent = e.results[0][0].transcript;
        this.currentAnswer = e.results[0][0].transcript
        var truth = checkMonth(this.currentAnswer);        

        if (truth) {
          document.getElementById('correctheid').textContent = "Antwoord is goed"
        } else {
          document.getElementById('correctheid').textContent = "Antwoord is fout"
        }

        function checkMonth(answer: string): boolean {
			var month = get_month();
			var current_month = month[(new Date()).getMonth()];

			var months = [];
			for (i = 0; i < 12; i++) {
				months.push(answer.lastIndexOf(month[i]));
			}

			var max = 0;
			for (var i=0; i<12; i++) {
				if (months[i] > max) {
					max = months[i];
				}
			}

			if (current_month == month[max]) {
				return true;
			} else {
				return false;
			}
        }

        function get_month() {
			var month = new Array(12);
			month[0] = "januari";
			month[1] = "februari";
			month[2] = "maart";
			month[3] = "april";
			month[4] = "mei";
			month[5] = "juni";
			month[6] = "juli";
			month[7] = "augustus";
			month[8] = "september";
			month[9] = "oktober";
			month[10] = "november";
			month[11] = "december";
			return month;
		}

        recognition.onerror = function (e) {
          recognition.stop();
        }
      }
    }
  }

}
