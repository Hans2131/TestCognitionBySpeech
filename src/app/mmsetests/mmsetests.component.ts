import { Component, OnInit } from '@angular/core';
import { MMSETest } from '../MMSETest';
import { MmsetestService } from '../mmsetest.service';

@Component({
  selector: 'app-mmsetests',
  templateUrl: './mmsetests.component.html',
  styleUrls: ['./mmsetests.component.css']
})
export class MmsetestsComponent implements OnInit {
  mmsetests : MMSETest[];

  constructor(private mmseService : MmsetestService) {
    console.log("Constructor called");
   }

  ngOnInit() {
    this.mmsetests = this.mmseService.getMMSETests();  
    console.log("Init called");
    
  }

}
