import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskSeasonComponent } from './ask-season.component';

describe('AskSeasonComponent', () => {
  let component: AskSeasonComponent;
  let fixture: ComponentFixture<AskSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
