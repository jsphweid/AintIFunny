// in house modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// external modules
import { AngularFireModule, AuthMethods } from 'angularfire2';
import { MomentModule } from "angular2-moment"; // amTimeAgo

// components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HighScoresComponent } from './high-scores/high-scores.component';
import { AboutComponent } from './about/about.component';

// services
import { AuthService } from './auth/services/auth.service'

// auth guards
import { AuthGuard } from './auth/guards/auth-guard';

// pipes


// Firebase / Angularfire
const myFirebaseAuthConfig = {
    method: AuthMethods.Redirect
};
export const firebaseConfig = {
    apiKey: "AIzaSyDXHi2SBrGMv-IvFZvxchTtEaTdmfJk1Oo",
    authDomain: "aintifunny-f1b9f.firebaseapp.com",
    databaseURL: "https://aintifunny-f1b9f.firebaseio.com",
    storageBucket: "aintifunny-f1b9f.appspot.com",
    messagingSenderId: "89740540918"
};


// main
@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        WelcomeComponent,
        NavbarComponent,
        HighScoresComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MomentModule,
        AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
        RouterModule.forRoot([
            { path: 'main', component: MainComponent, canActivate: [AuthGuard]},
            { path: 'highscores', component: HighScoresComponent, canActivate: [AuthGuard]},
            { path: 'about', component: AboutComponent },
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'WelcomeComponent', pathMatch: 'full' },
            { path: '**', redirectTo: 'WelcomeComponent', pathMatch: 'full' }
        ], { useHash: true })
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
