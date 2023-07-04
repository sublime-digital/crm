import { Component, OnInit } from '@angular/core';

interface Goal {
  goal: string
}

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})

export class PlansComponent implements OnInit {

    constructor() {
      }

    ngOnInit(): void {
      document.body.className = "plans";
    }

//goals feature

goalMorning : string = "";
goalAfternoon : string = "";
goalEvening : string = "";

/***/

goalDataMorning: Array<Goal> = [
  {goal: 'Create a 24 month detailed plan'}
];

goalDataAfternoon: Array<Goal> = [
  {goal: 'Accomplish all my dreams'}
];

goalDataEvening: Array<Goal> = [
  {goal: 'Have the best decade of my life'}
];

/***/

handleGoalClickMorning() {
    this.addGoalMorning(this.goalMorning);
    this.goalMorning = '';
}

handleGoalClickAfternoon() {
    this.addGoalAfternoon(this.goalAfternoon);
    this.goalAfternoon = '';
}

handleGoalClickEvening() {
    this.addGoalEvening(this.goalEvening);
    this.goalEvening = '';
}

/***/

addGoalMorning(goalMorning: string): void {
  this.goalDataMorning.push({
    goal: goalMorning
  })
}

addGoalAfternoon(goalAfternoon: string): void {
  this.goalDataAfternoon.push({
    goal: goalAfternoon
  })
}

addGoalEvening(goalEvening: string): void {
  this.goalDataEvening.push({
    goal: goalEvening
  })
}
}
