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
  mmsttest: MMSETest;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private mmstService: MmsetestService) { }

  ngOnInit() {
    this.questions = QUESTIONS;
    var id = +this.activatedroute.snapshot.paramMap.get('id');
    this.mmsttest = this.mmstService.getMMSETest(id);
  }

  answer(questionid: number) {
    var currentQuestion: Question;
    for (var question of this.questions) {
      if (question.id == questionid) {
        currentQuestion = question;
      }
    }
    var tId = +this.activatedroute.snapshot.paramMap.get('id');
    if (currentQuestion.isGeneral) {
      this.router.navigate(["ask-general-question", { tId: tId, qId: currentQuestion.id }]);
    } else {
      if (currentQuestion.id == 11) {
        this.router.navigate(["deduction", { tId: tId, qId: currentQuestion.id }]);
      } else if (currentQuestion.id == 13) {
        this.router.navigate(["read-excercise", { tId: tId, qId: currentQuestion.id }]);
      }
    }
  }
}
