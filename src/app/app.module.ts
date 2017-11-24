import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestStartComponent } from './test-start/test-start.component';
import { AppRoutingModule } from './/app-routing.module';
import { AskNameComponent } from './ask-name/ask-name.component';
import { MmsetestsComponent } from './mmsetests/mmsetests.component';
import { MmsetestService } from './mmsetest.service';
import { AskYearComponent } from './ask-year/ask-year.component';
import { QuestionlistComponent } from './questionlist/questionlist.component';
import { ReadExcerciseComponent } from './read-excercise/read-excercise.component';
import { MultipleTestsComponent } from './multiple-tests/multiple-tests.component';
import { DeductionComponent } from './deduction/deduction.component';
import { CheckAnswerService } from './check-answer.service';
import { AskGeneralQuestionComponent } from './ask-general-question/ask-general-question.component';

@NgModule({
  declarations: [
    AppComponent,
    TestStartComponent,
    AskNameComponent,
    MmsetestsComponent,
    AskYearComponent,
    QuestionlistComponent,
    ReadExcerciseComponent,
    MultipleTestsComponent,
    DeductionComponent
    AskGeneralQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MmsetestService, CheckAnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
