import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MMSETest } from '../MMSETest';
import { MmsetestService } from '../mmsetest.service';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.css']
})
export class TestStartComponent implements OnInit {
  buttonname: string;
  currenttest: MMSETest;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private mmseService: MmsetestService) { }

  ngOnInit() {
    let id = +this.activatedroute.snapshot.paramMap.get('id');

    this.currenttest = this.mmseService.getMMSETest(id);

    this.buttonname = "Start test met id: " + this.currenttest.id.toString();
  }

  startTest() {
    this.currenttest.status = "Test Started";
    this.mmseService.updateMMSETest(this.currenttest);
    this.router.navigate(['/ask-name/' + this.currenttest.id.toString()]);
  }

}
