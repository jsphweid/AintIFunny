import { Component, OnInit } from '@angular/core';
import { AllJokesService } from "../../services/all-jokes.service";
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { VoterService } from "../../../shared/services/voter.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    candidateJokes: any[];
    kept: Array<string>;

    fresh: FirebaseListObservable<any>;
    freshList: any[];
    trendingList: any[];

    constructor(private allJokes: AllJokesService, private af: AngularFire, private voter: VoterService) {
        this.fresh = af.database.list('allJokes/new');
        this.fresh.subscribe((fresh) => {
            this.freshList = fresh.concat([]).sort((a,b) => b.timeAdded - a.timeAdded);
            this.trendingList = fresh.concat([]).sort((a,b) => b.votes - a.votes);
        })
    }

    ngOnInit() {
    }

    generateNewJoke() {
        this.kept = []; // empty
        this.allJokes.makeSalesmanJoke(jokes => {
            this.candidateJokes = this.attachIds(jokes);
        });
    }

    attachIds(strArray: Array<string>): any[] {
        let ret = [];
        for (let str of strArray) {
            ret.push({
                text: str,
                id: Math.random().toString(36).substring(7)
            });
        }
        return ret;
    }

    keep(joke) {
        this.kept.push(joke.id);
    // .css({opacity: 1.0, visibility: "visible"})
        this.fresh.push({
            timeAdded: new Date().getTime() / 1000,
            votes: 1,
            actualJoke: joke.text
        })
    }


}
