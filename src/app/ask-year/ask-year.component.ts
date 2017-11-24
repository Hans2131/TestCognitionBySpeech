import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-year',
  templateUrl: './ask-year.component.html',
  styleUrls: ['./ask-year.component.css']
})
export class AskYearComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  startDictation(): void {

		if (window.hasOwnProperty('webkitSpeechRecognition')) {

			var recognition = new webkitSpeechRecognition();

      	recognition.continuous = false;
      	recognition.interimResults = false;

      	recognition.lang = "nl-NL";
      	recognition.start();

   			recognition.onresult = function(e) {
       		recognition.stop();
				  document.getElementById('jaar_span').textContent=e.results[0][0].transcript;
				  var truth = checkYear(e.results[0][0].transcript);
				  if (truth) {
				  	document.getElementById('correctheid').textContent="Antwoord is goed"
				  } else {
				  	document.getElementById('correctheid').textContent="Antwoord is fout"
				  }
   			};

   			recognition.onerror = function(e) {
       		recognition.stop();
    		}
		}
  	}

  	function checkYear(answer: string) {
  		var current_year = new Date().getFullYear().toString();

  		if (answer.includes(current_year) == true){
  			return true;
  		} else {
  			return false;
  		}
  	}
}
