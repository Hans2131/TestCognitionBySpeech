import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QUESTIONS } from "../QuestionsMock";
import { Question } from "../Question";

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {
  questions: Question[];

  constructor(private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.questions = QUESTIONS;
  }

  answer(questionid: number) {
    if (questionid == 1) {
      var id = +this.activatedroute.snapshot.paramMap.get('id');
      this.router.navigate(["/ask-year/" + id]);
    }
  }
}
