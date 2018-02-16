import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['the inital goal', 'another thin']);
  goal = this.goals.asObservable();

  constructor() { }
  changeGoals(goal) {
    this.goals.next(goal);
  }
}
