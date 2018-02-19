import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {DataService} from './data.service';
import {AccountComponent} from './account/account.component';
import {TrackingComponent} from './tracking/tracking.component';
import { LoginComponent } from './login/login.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppLoginComponent } from './login/app-login/app-login.component';
import { TodoComponent } from './home/todo/todo.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        AccountComponent,
        TrackingComponent,
        LoginComponent,
        AppNavComponent,
        AppHeaderComponent,
        AppLoginComponent,
        TodoComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
