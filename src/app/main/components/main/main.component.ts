import { Component, OnInit } from '@angular/core';
import {AllJokesService} from "../../services/all-jokes.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    candidateJokes: Array<string>;

    constructor(private allJokes: AllJokesService) { }

    ngOnInit() {
    }

    generateNewJoke() {
        this.allJokes.makeSalesmanJoke(jokes => this.candidateJokes = jokes)
    }

}
