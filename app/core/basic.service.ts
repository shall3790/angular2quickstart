import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestMethod, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import '../rxjs-operators';

import { State, Chain, Store } from './starship';

@Injectable()
export class BasicService {
    STARSHIP_URL: string = 'https://qasecure.hobbylobby.corp/starship/api/';
    private _defaultHttpTimeout: number = 60000;
    

    constructor(private _http: Http) {
        
    }


    public getStates(): Observable<State[]> {
        var method = 'states';

        return this._http.get(this.STARSHIP_URL + method)
            .map((response: Response) => {
                return <State[]>response.json();
            })
            .do(data => { })
            .catch((error: Response) => {
                
                return Observable.throw(error.json().error)
            });
    }
    
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}