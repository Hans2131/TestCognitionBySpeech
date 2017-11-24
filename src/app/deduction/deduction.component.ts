import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deduction',
  templateUrl: './deduction.component.html',
  styleUrls: ['./deduction.component.css']
})
export class DeductionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	var msg = new SpeechSynthesisUtterance('Wilt u van de 100 zeven aftrekken en van wat overblijft weer zeven aftrekken en zo doorgaan tot ik stop');
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
        this.currentAnswer = e.results[0][0].transcript

        checkDeduction(this.currentAnswer);

        function checkDeduction(answer: string): void {
          var lastNumber = 100;
          var div = document.createElement('div');
          console.log(answer);
          var re = /(1)|\d{2}/g;
          var m;
          while (m = re.exec(answer)) {
            if (m[0] == '1'){
              m[0] = '100';
            }
            var div = document.createElement('div');
            if ((lastNumber - m[0]) == 7 || m[0] == 100){
              div.innerHTML = '<span style="color:green">'+m[0]+'</span>';
            } else {
              div.innerHTML = '<span style="color:red">'+m[0]+'</span>';
            }
            var myEl = document.getElementById('numbers').appendChild(div);
            lastNumber = m[0];
          }
        }

        recognition.onerror = function (e) {
          recognition.stop();
        }
      }
    }
  }

}
