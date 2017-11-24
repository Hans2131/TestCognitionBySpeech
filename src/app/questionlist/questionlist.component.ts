import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QUESTIONS } from "../QuestionsMock";
import { Question } from "../Question";
import { MMSETest } from "../MMSETest";
import { MmsetestService } from "../mmsetest.service";

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {
  questions: Question[];
  mmsttest : MMSETest;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private mmstService : MmsetestService) { }

  ngOnInit() {
    this.questions = QUESTIONS;
    var id = +this.activatedroute.snapshot.paramMap.get('id');
    this.mmsttest = this.mmstService.getMMSETest(id);
    console.log(this.mmsttest.answers[1]);
    
  }

  answer(questionid: number) {
    if (questionid == 1) {
      var id = +this.activatedroute.snapshot.paramMap.get('id');
      this.router.navigate(["/ask-year/" + id]);
    }
  }
}
