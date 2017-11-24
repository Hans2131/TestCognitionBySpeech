import { Injectable } from '@angular/core';

import { MMSETest } from './MMSETest';
import { MMSETESTS } from './MMSETestsMock';

@Injectable()
export class MmsetestService {

  constructor() { }

  getMMSETests(): MMSETest[] {
    return MMSETESTS;
  }

  getMMSETest(id: number): MMSETest {
    for (var test of MMSETESTS) {
      if (test.id === id) {
        return test
      }
    }
    return null;
  }

  updateMMSETest(mmsetest: MMSETest): void {
    let index = MMSETESTS.indexOf(mmsetest);
    console.log(index);
    
    MMSETest[index] = mmsetest;
  }
}
