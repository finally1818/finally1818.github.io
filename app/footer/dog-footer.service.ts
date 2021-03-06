import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Dog } from '../dog';

@Injectable()
export class DogFooterService {
    private dataUrl = 'api/data'; // URL to web api

    constructor(private http: Http) {}

    getDogFooter(): Promise<Dog> {
        return this.http
            .get(this.dataUrl)
            .toPromise()
            .then(response => response.json().data.footer as Dog)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
