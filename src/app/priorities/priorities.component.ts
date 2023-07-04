import { Component, OnInit } from '@angular/core';

interface Goal {
  goal: string
}

@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.css']
})

export class PrioritiesComponent implements OnInit {

    constructor() {
      }

    ngOnInit(): void {
      document.body.className = "priorities";
    }

//goals feature

goalMorning : string = "";
goalAfternoon : string = "";
goalEvening : string = "";

/***/

goalDataMorning: Array<Goal> = [
  {goal: 'Plan for ad spend this month...'}
];

goalDataAfternoon: Array<Goal> = [
  {goal: 'Prospects reached out to...'}
];

goalDataEvening: Array<Goal> = [
  {goal: 'Prospects followed up with...'}
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
