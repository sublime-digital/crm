import { Component, OnInit } from '@angular/core';

interface Goal {
  goal: string
}

@Component({
  selector: 'app-gratitude',
  templateUrl: './gratitude.component.html',
  styleUrls: ['./gratitude.component.css']
})
export class GratitudeComponent implements OnInit {

      constructor() {
        }

        goalMorning = '';
        goalAfternoon = '';
        goalEvening = '';

      ngOnInit(): void {
        document.body.className = "gratitude";
      }
  //goals feature

  /***/


  goalDataAfternoon: Array<Goal> = [
    {goal: 'Sponsors I am working with this week...'}
  ];

  goalDataEvening: Array<Goal> = [
    {goal: 'Sponsors I wish to work with next month...'}
  ];

  goalDataMorning: Array<Goal> = [
    {goal: 'Current Influencer Marketing brand deals...'}
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
