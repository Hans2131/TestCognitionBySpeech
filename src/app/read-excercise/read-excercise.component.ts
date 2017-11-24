import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-excercise',
  templateUrl: './read-excercise.component.html',
  styleUrls: ['./read-excercise.component.css']
})
export class ReadExcerciseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  klik(): void {
  	document.getElementById('klik').textContent = "Er is geklikt"
  }

}
