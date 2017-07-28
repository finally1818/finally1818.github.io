import { Component, OnInit } from '@angular/core';

import { DogInfoService } from './dog-info.service';

@Component({
    moduleId: module.id,
    selector: 'dog-info',
    templateUrl: 'dog-info.component.html',
    styleUrls: ['dog-info.component.css']
})
export class DogInfoComponent implements OnInit {
    constructor(private dogInfoService: DogInfoService) {}

    private infoList: object;
    private infoTitle: string;
    private infoDesList: object;

    ngOnInit() {
        this.getDogInfo();
    }

    getDogInfo() {
        this.dogInfoService.getDogInfo().then(info => {
            this.infoList = info.infoList;
            this.infoTitle = info.title;
            this.infoDesList = info.desList;
        });
    }
}
