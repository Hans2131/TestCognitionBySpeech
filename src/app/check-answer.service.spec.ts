import { TestBed, inject } from '@angular/core/testing';

import { CheckAnswerService } from './check-answer.service';

describe('CheckAnswerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckAnswerService]
    });
  });

  it('should be created', inject([CheckAnswerService], (service: CheckAnswerService) => {
    expect(service).toBeTruthy();
  }));
});
