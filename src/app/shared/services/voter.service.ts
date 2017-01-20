import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, AngularFire, FirebaseListObservable } from "angularfire2";
import { AuthService } from "../../auth/services/auth.service";


@Injectable()
export class VoterService {

    votingList$: FirebaseListObservable<any>;
    votingObj$: FirebaseObjectObservable<any>;
    votingObj: any;

    constructor(private af: AngularFire, private auth: AuthService) {
        this.votingList$ = af.database.list('/users/' + auth.id + '/voting');
        this.votingObj$ = af.database.object('/users/' + auth.id + '/voting');
        this.votingObj$.subscribe(votingObj => this.votingObj = votingObj);
    }

    getVotingRecord(key) {
        return this.votingObj[key] ? this.votingObj[key].voted : 0;
    }

    handleVote(joke, value) {
        let joke$: FirebaseListObservable<any> = this.af.database.list('/allJokes/new');
        joke$.update(joke.$key, { votes: joke.votes + value });
        this.votingList$.update(joke.$key, { voted: this.getVotingRecord(joke.$key) + value });
    }

}
