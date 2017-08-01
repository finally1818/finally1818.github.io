import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Dog } from '../dog';

@Injectable()
export class DogWorksService {
    constructor(private http: Http) {}

    private dataUrl = 'api/data';

    getDogWorks(): Promise<Dog> {
        return this.http
            .get(this.dataUrl)
            .toPromise()
            .then(response => response.json().data.works)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
