import { TestBed, inject } from '@angular/core/testing';

import { MmsetestService } from './mmsetest.service';

describe('MmsetestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MmsetestService]
    });
  });

  it('should be created', inject([MmsetestService], (service: MmsetestService) => {
    expect(service).toBeTruthy();
  }));
});
