import {Component} from '@angular/core';
import {trigger, style, transition, animate, state} from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
    animations: [
        trigger(':showMe', [
            state('shown' , style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('* => *', animate('.5s'))
        ])
    ]
})

export class HomeComponent {
    title = 'app';
    showVar = false;
    toggleChild() {
        this.showVar = !this.showVar;
    }


    constructor() {
    }




}
