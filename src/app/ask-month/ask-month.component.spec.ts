import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskMonthComponent } from './ask-month.component';

describe('AskMonthComponent', () => {
  let component: AskMonthComponent;
  let fixture: ComponentFixture<AskMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
