import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
    animations: [
        trigger('goals', [
            transition('* => *', [
                query(':enter', style({opacity: 0 }), {optional: true}),

                query(':enter', stagger('300ms', [
                    animate('.6s ease-in', keyframes([
                        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                        style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
                        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
                    ]))]), {optional: true}),
                query(':leave', stagger('300ms', [
                    animate('.6s ease-in', keyframes([
                        style({opacity: 0, transform: 'translateY(0)', offset: 0}),
                        style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
                        style({opacity: 1, transform: 'translateY(75%)', offset: 1}),
                    ]))]), {optional: true})
            ])
        ])
    ]
})
export class TodoComponent implements OnInit {
    @Input() showMe: boolean;
    itemCount: number;
    btnText = 'Add TO DO';
    goalText = '';
    goals = [];

  constructor(private _data: DataService) { }


    ngOnInit() {
        this._data.goal.subscribe(res => this.goals = res);
        this._data.changeGoals(this.goals);
        this.itemCount = this.goals.length;
    }

    addItem() {
        this.goals.push(this.goalText);
        this.goalText = '';
        this.itemCount = this.goals.length;
        this._data.changeGoals(this.goals);
    }


    removeItem(i) {
        this.goals.splice(i, 1);
        this._data.changeGoals(this.goals);
    }


}
