import { Injectable } from '@angular/core';

@Injectable()
export class CheckAnswerService {

  constructor() { }

  checkAnswer(questionid: number, answer: string): boolean {
    switch (questionid) {
      case 1:
        return this.checkYear(answer);
      case 2:
        return this.checkSeason(answer);
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

  checkSeason(answer: string): boolean {
      var current_season = this.get_season();
      var seasons = new Array(4);

      seasons = [answer.lastIndexOf('lente'), 
      answer.lastIndexOf('zomer'), answer.lastIndexOf('herfst'), answer.lastIndexOf('winter')];

      var max = 0;
      for (var i=0; i<4; i++) {
        if (seasons[i] > max) {
          max = seasons[i];
        }
      }
      
      var seasons_array = new Array(4);
      seasons_array[0] = 'lente';
      seasons_array[1] = 'zomer';
      seasons_array[2] = 'herfst';
      seasons_array[3] = 'winter';

      
      if (this.include(current_season, seasons_array[seasons.indexOf(max)]) == true) {return true;}
    }

    get_season() {
      var current_day = new Date();
      var season = [];

      var spring_start = new Date((new Date()).getFullYear(), 2, 22);
      var spring_end = new Date((new Date()).getFullYear(), 6, 27);
      var summer_start = new Date((new Date()).getFullYear(), 5, 25);
      var summer_end = new Date((new Date()).getFullYear(), 9, 27);
      var autumn_start = new Date((new Date()).getFullYear(), 8, 25);
      var autumn_end = new Date((new Date()).getFullYear(), 12, 27);
      var winter_start = new Date((new Date()).getFullYear(), 11, 24);
      var winter_end = new Date((new Date()).getFullYear(), 3, 27);

      if (current_day > spring_start && current_day < spring_end) {
        season.push("lente");
      } 
      if (current_day > summer_start && current_day < summer_end) {
        season.push("zomer");
      }  
      if (current_day > autumn_start && current_day < autumn_end) {
        season.push("herfst");
      }
      if (current_day > winter_start && current_day < winter_end) {
        season.push("winter");
      }

      return season;
    }

    include(arr, obj) {
        for(var i=0; i<arr.length; i++) {
            if (arr[i] == obj) return true;
        }
    }
}
