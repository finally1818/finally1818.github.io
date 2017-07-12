import { Component, Input } from '@angular/core';

import { DogDefaultService } from './dog-default.service';
@Component({
    moduleId: module.id,
    selector: 'dog-default',
    templateUrl: 'dog-default.component.html',
    styleUrls: ['dog-default.component.css']
})

export class DogDefaultComponent {
    private default: object;
    private defaultDesList: object;
    private defaultQuote: string;
    private gossipAction: boolean = true;

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

    onGossipAction() {
        this.gossipAction = !this.gossipAction;
    }
    
}