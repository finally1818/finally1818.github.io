import { Component, OnInit } from '@angular/core';

import { DogInfoService } from './dog-info.service';

@Component({
    moduleId: module.id,
    selector: 'dog-info',
    templateUrl: 'dog-info.component.html',
    styleUrls: ['dog-info.component.css']
})

export class DogInfoComponent implements OnInit {
    constructor(
        private dogInfoservice: DogInfoService
    ) { }

    private infoList: object;
    private infoTitle: string;

    ngOnInit() {
        this.dogInfoservice.getDogInfo()
            .then(info => {
                this.infoList = info.infoList;
                this.infoTitle = info.title;
            })
    }
}