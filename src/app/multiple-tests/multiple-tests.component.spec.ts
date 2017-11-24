import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTestsComponent } from './multiple-tests.component';

describe('MultipleTestsComponent', () => {
  let component: MultipleTestsComponent;
  let fixture: ComponentFixture<MultipleTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
