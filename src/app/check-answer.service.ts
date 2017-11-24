import { Injectable } from '@angular/core';

@Injectable()
export class CheckAnswerService {

  constructor() { }

  checkAnswer(questionid: number, answer: string): boolean {
    switch (questionid) {
      case 1:
        return this.checkYear(answer);
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;
      case 5:

        break;
      case 6:

        break;
      case 7:

        break;

      default:
        break;
    }
    return false;
  }

  checkYear(answer: string): boolean {
    var current_year = new Date().getFullYear().toString();

    if (answer.includes(current_year) == true) {
      return true;
    } else {
      return false;
    }
  }
}
