import { Component, OnInit } from '@angular/core';

import { DogDefaultService } from './dog-default.service';
@Component({
    moduleId: module.id,
    selector: 'dog-default',
    templateUrl: 'dog-default.component.html',
    styleUrls: ['dog-default.component.css']
})

export class DogDefaultComponent implements OnInit {
    private default: object;
    private defaultDesList: object;
    private defaultQuote: string;

    constructor(
        private dogDefaultService: DogDefaultService
    ) { }


    ngOnInit(): void {
        this.dogDefaultService.getDogDefault()
            .then(data => {
                this.defaultDesList = data.desList;
                this.defaultQuote = data.quote;
            });
    }

    startWheelHandler(event: any) {
        console.log(1);
    }
}