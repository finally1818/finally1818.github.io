import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Dog } from '../dog';

@Injectable()
export class DogExperienceService {
    constructor(private http: Http) {}

    private dataUrl = 'api/data';

    getDogExperience(): Promise<Dog> {
        return this.http
            .get(this.dataUrl)
            .toPromise()
            .then(response => response.json().data.experience)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
