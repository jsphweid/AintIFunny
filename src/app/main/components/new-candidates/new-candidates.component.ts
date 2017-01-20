import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-candidates',
    templateUrl: './new-candidates.component.html',
    styleUrls: ['./new-candidates.component.css']
})
export class NewCandidatesComponent implements OnInit {

    @Input() candidateJokes: Array<string>;

    constructor() { }

    ngOnInit() {
    }

    keep(joke) {

    }

}
