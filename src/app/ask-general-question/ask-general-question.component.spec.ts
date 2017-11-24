import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskGeneralQuestionComponent } from './ask-general-question.component';

describe('AskGeneralQuestionComponent', () => {
  let component: AskGeneralQuestionComponent;
  let fixture: ComponentFixture<AskGeneralQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskGeneralQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskGeneralQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
