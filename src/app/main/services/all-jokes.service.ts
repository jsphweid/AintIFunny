import { Injectable } from '@angular/core';
import { SuggestQueriesService } from "./suggest-queries.service";
import { WordsService } from "./words.service";

@Injectable()
export class AllJokesService {

    constructor(private google: SuggestQueriesService, private words: WordsService) {

    }

    makeSalesmanJoke(callback: Function) {
        let word = this.words.getRandomNoun();
        this.google.getSuggestions(word, (suggestions:string[]) => {
            let jokes = suggestions.map(suggestion => {
                let suggestionMinusQuery = suggestion.replace(word + " ", '').replace(word + "s ", "");
                return `He's such a good salesman he could sell ${suggestionMinusQuery} to a ${word}`;
            });
            callback(jokes);
        })
    }

}
