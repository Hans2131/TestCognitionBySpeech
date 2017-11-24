import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MMSETest } from '../MMSETest';
import { Answer } from '../Answer';
import { MmsetestService } from "../mmsetest.service";

@Component({
  selector: 'app-ask-season',
  templateUrl: './ask-season.component.html',
  styleUrls: ['./ask-season.component.css']
})
export class AskSeasonComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private mmseService: MmsetestService) { 
  }

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
        document.getElementById('season').textContent = e.results[0][0].transcript;
        this.currentAnswer = e.results[0][0].transcript
        var truth = checkSeason(this.currentAnswer);        

        if (truth) {
          document.getElementById('correctheid').textContent = "Antwoord is goed"
        } else {
          document.getElementById('correctheid').textContent = "Antwoord is fout"
        }

        function checkSeason(answer: string): boolean {
			var current_season = get_season();
			var seasons = new Array(4);

			seasons = [answer.lastIndexOf('lente'), 
			answer.lastIndexOf('zomer'), answer.lastIndexOf('herfst'), answer.lastIndexOf('winter')];

			var max = 0;
			for (var i=0; i<4; i++) {
				if (seasons[i] > max) {
					max = seasons[i];
				}
			}
			
			var seasons_array = new Array(4);
			seasons_array[0] = 'lente';
			seasons_array[1] = 'zomer';
			seasons_array[2] = 'herfst';
			seasons_array[3] = 'winter';

			
			if (include(current_season, seasons_array[seasons.indexOf(max)]) == true) {return true;}
		}

        function get_season() {
			var current_day = new Date();
			var season = [];

			var spring_start = new Date((new Date()).getFullYear(), 2, 22);
			var spring_end = new Date((new Date()).getFullYear(), 6, 27);
			var summer_start = new Date((new Date()).getFullYear(), 5, 25);
			var summer_end = new Date((new Date()).getFullYear(), 9, 27);
			var autumn_start = new Date((new Date()).getFullYear(), 8, 25);
			var autumn_end = new Date((new Date()).getFullYear(), 12, 27);
			var winter_start = new Date((new Date()).getFullYear(), 11, 24);
			var winter_end = new Date((new Date()).getFullYear(), 3, 27);

			if (current_day > spring_start && current_day < spring_end) {
				season.push("lente");
			} 
			if (current_day > summer_start && current_day < summer_end) {
				season.push("zomer");
			}  
			if (current_day > autumn_start && current_day < autumn_end) {
				season.push("herfst");
			}
			if (current_day > winter_start && current_day < winter_end) {
				season.push("winter");
			}

			return season;
		}

		function include(arr, obj) {
		    for(var i=0; i<arr.length; i++) {
		        if (arr[i] == obj) return true;
		    }
		}

        recognition.onerror = function (e) {
          recognition.stop();
        }
      }
    }
  }
}