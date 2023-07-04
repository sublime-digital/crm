import { Component, OnInit } from '@angular/core';

interface Weight {
  date: string,
  weight: string
}

interface Goal {
  goal: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    options: any;
    chartInit(){
        const xAxisData = Array();
        const data1 = Array();
        const data2 = Array();

                for (let i = 0; i < this.weightData.length; i++) {
                  xAxisData.push(this.weightData[i].date);
                  data1.push(this.weightData[i].weight);
                  data2.push(this.weightData[i].weight);
                }

                this.options = {
                  legend: {
                    data: ['Expected Weight', 'Actual Weight'],
                    align: 'left',
                  },
                  tooltip: {},
                  xAxis: {
                    data: xAxisData,
                    silent: false,
                    splitLine: {
                      show: false,
                    },
                  },
                  yAxis: {},
                  series: [
                    {
                      name: 'Expected Weight',
                      type: 'bar',
                      data: data1,
                      animationDelay: (idx) => idx * 10,
                    },
                    {
                      name: 'Actual Weight',
                      type: 'bar',
                      data: data2,
                      animationDelay: (idx) => idx * 10 + 100,
                    },
                  ],
                  animationEasing: 'elasticOut',
                  animationDelayUpdate: (idx) => idx * 5,
                };
    };

      constructor() {
        }

      ngOnInit(): void {
        this.chartInit();
      }

  //section 2 data

  start = 260;
  current = 234;
  target = 180;
  lost = this.start - this.current;
  lose = this.current - this.target;
  calories = this.lose * 3500;
  progress = (this.start - this.current) * 3500;
  miles = this.calories / 100;
  fiveruns = this.miles / 5;
  tenruns = this.miles / 10;
  weeks = this.tenruns / 5;
  months = this.weeks / 4;
  years = this.months / 12;


// weight entry feature

  date : string = "";
  weight : string = "";
  weightData: Array<Weight> = [
    {date: '12/13/21', weight: '234', },
    {date: '12/14/21', weight: '233', }
  ];

  handleClick() {
      this.addWeight(this.date, this.weight);
      this.date = '';
      this.weight = '';
  }

  addWeight(date: string, weight: string): void {
    this.weightData.push({
      date: date,
      weight: weight,
    });
    this.chartInit();
    this.current = parseInt(weight);
    this.lost = this.start - this.current;
    this.lose = this.current - this.target;
    this.calories = this.lose * 3500;
  }

  //goals feature

  goal : string = "";
  goalData: Array<Goal> = [
    {goal: 'eat a salad'}
  ];

  handleGoalClick() {
      this.addGoal(this.goal);
      this.goal = '';
  }

  addGoal(goal: string): void {
    this.goalData.push({
      goal: goal
    })
  }

  //remove function

  remove(i: number):void {
    this.weightData.splice(i, 1)
  }
}
