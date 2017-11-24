import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskYearComponent } from './ask-year.component';

describe('AskYearComponent', () => {
  let component: AskYearComponent;
  let fixture: ComponentFixture<AskYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
