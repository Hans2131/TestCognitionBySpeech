import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmsetestsComponent } from './mmsetests.component';

describe('MmsetestsComponent', () => {
  let component: MmsetestsComponent;
  let fixture: ComponentFixture<MmsetestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmsetestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmsetestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
