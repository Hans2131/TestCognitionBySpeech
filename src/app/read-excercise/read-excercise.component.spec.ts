import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadExcerciseComponent } from './read-excercise.component';

describe('ReadExcerciseComponent', () => {
  let component: ReadExcerciseComponent;
  let fixture: ComponentFixture<ReadExcerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadExcerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
