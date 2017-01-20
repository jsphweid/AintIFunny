import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";

@Injectable()
export class SuggestQueriesService {

    constructor(private jsonp: Jsonp) { }

    getSuggestions(query:string, callback:Function) {
        let url = "//suggestqueries.google.com/complete/search";
        let queryString =
            `?q=${query}&client=youtube&format=json&hl=en&callback=JSONP_CALLBACK`;
        return this.jsonp
            .get(url + queryString)
            .subscribe((data:any) => {
                callback(data._body[1].map((weirdThing) => weirdThing[0]));
            })
    }

}
