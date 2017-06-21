import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Dog } from '../../dog';

@Injectable()
export class DogExperienceService {
    constructor(
        private http: Http
    ) { }
    public dataUrl = 'api/data'
    // getDogexperience(): Promise<Dog> {
    //     return this.http.get(dataUrl)
    //         .toPromise()
    //         .then(response => response.json().data.header)
    // }
}