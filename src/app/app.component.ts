import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    animations: [
        trigger('showMe', [
                state('shown' , style({ opacity: 1 })),
                state('hidden', style({ opacity: 0 })),
                transition('* => *', animate('.5s'))
        ])
    ]
})
export class AppComponent {

    title = 'app';
    showVar = false;
    toggleChild() {
        this.showVar = !this.showVar;
    }

}
