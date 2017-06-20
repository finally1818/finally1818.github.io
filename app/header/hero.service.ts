import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Dog } from '../dog';
@Injectable()
export class HeroService {
    private dataUrl = 'api/data';  // URL to web api

    constructor(private http: Http) { }
    getHeroes(): Promise<Dog> {
        return this.http.get(this.dataUrl)
            .toPromise()
            .then(response => {
                return response.json().data.header.titleList as Dog
            })
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
