import { Injectable } from '@angular/core';
import { SuggestQueriesService } from "./suggest-queries.service";
import { WordsService } from "./words.service";

declare let pluralize: any;

@Injectable()
export class AllJokesService {

    constructor(private google: SuggestQueriesService, private words: WordsService) {
    }

    isVowel(c) {
        return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
    }

    makeSalesmanJoke(callback: Function) {
        let word = this.words.getRandomNoun();
        let plural = pluralize(word);
        let query = plural + " have ";
        let myData = {
            word: word,
            plural: plural,
            article: (this.isVowel(word.charAt(0))) ? 'an' : 'a',
            query: query,
            isVowel: this.isVowel
        };

        this.google.getSuggestions(query, (suggestions:string[], myData) => {
            let jokes = [];
            for (let i = 0; i < suggestions.length; i++) {
                let split = suggestions[i].split(myData.query);
                if (split[0].length > 0) continue; // google changed formulation
                if (split.length < 2) continue;
                let firstArticle = myData.isVowel(split[1].charAt(0)) ? 'an' : 'a';
                jokes.push("He's such a good salesman he could sell " + firstArticle + " " + split[1] + " to " + myData.article + " " + myData.word);
            }
            callback(jokes);
        }, myData)
    }

}
