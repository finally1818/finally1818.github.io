import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Dog } from '../dog';

@Injectable()
export class DogDefaultService {
    constructor(private http: Http) {}
    private dataUrl = 'api/data';
    // 获取default数据
    getDogDefault(): Promise<Dog> {
        return this.http
            .get(this.dataUrl)
            .toPromise()
            .then(response => {
                return response.json().data.default as Dog;
            })
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
