import { Component, OnInit } from '@angular/core';

interface Goal {
  goal: string
}

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.css']
})
export class DreamsComponent implements OnInit {

      constructor() {
        }

        goalMorning = '';
        goalAfternoon = '';
        goalEvening = '';

        loadMorning: string | null = localStorage.getItem('goalMorning');
        loadAfternoon: string | null  = localStorage.getItem('goalAfternoon');
        loadEvening: string | null  = localStorage.getItem('goalAfternoon');


      ngOnInit(): void {
        document.body.className = "dreams";
      }
  //goals feature

  /***/

  goalDataMorning: Array<Goal> = [
    {goal: 'What are my biggest distractions at the moment?'}
  ];

  goalDataAfternoon: Array<Goal> = [
    {goal: 'Which people or situations are triggering for me?'}
  ];

  goalDataEvening: Array<Goal> = [
    {goal: 'List all my concerns in no particular order'}
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
    localStorage.setItem('goalMorning', this.goalMorning);
  }

  addGoalAfternoon(goalAfternoon: string): void {
    this.goalDataAfternoon.push({
      goal: goalAfternoon
    })
    localStorage.setItem('goalAfternoon', this.goalAfternoon);
  }

  addGoalEvening(goalEvening: string): void {
    this.goalDataEvening.push({
      goal: goalEvening
    })
    localStorage.setItem('goalEvening', this.goalEvening);
  }
  }
