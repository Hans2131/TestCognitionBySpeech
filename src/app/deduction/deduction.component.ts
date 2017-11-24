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
  }

}
