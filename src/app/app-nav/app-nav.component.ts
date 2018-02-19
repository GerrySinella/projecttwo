import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.less']
})
export class AppNavComponent implements OnInit {
    @Input() title: string;
    @Input() public isUserLoggedIn: boolean;

    constructor() {
    }

    ngOnInit() {
    }
}
