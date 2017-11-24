import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestStartComponent }   from './test-start/test-start.component';
import { AskNameComponent }   from './ask-name/ask-name.component';
import { MmsetestsComponent }   from './mmsetests/mmsetests.component';
import { AskYearComponent } from './ask-year/ask-year.component';
import { QuestionlistComponent } from "./questionlist/questionlist.component";
import { ReadExcerciseComponent } from "./read-excercise/read-excercise.component";
import { MultipleTestsComponent } from "./multiple-tests/multiple-tests.component";
import { DeductionComponent } from "./deduction/deduction.component";

const routes: Routes = [
  { path: '', redirectTo: '/mmsetests', pathMatch: 'full' },
  { path: 'test-start/:id', component: TestStartComponent },
  { path: 'ask-name/:id', component: AskNameComponent },
  { path: 'ask-year/:id', component: AskYearComponent },
  { path: 'mmsetests', component: MmsetestsComponent },
  { path: 'questionlist/:id', component: QuestionlistComponent },
  { path: 'read-excercise', component: ReadExcerciseComponent },
  { path: 'multiple-tests', component: MultipleTestsComponent },
  { path: 'deduction', component: DeductionComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
