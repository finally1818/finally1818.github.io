import { Component, OnInit } from '@angular/core';

import { DogWorksService } from './dog-works.service';
@Component({
    moduleId: module.id,
    selector: 'dog-works',
    templateUrl: 'dog-works.component.html',
    styleUrls: ['dog-works.component.css']
})

export class DogWorksComponent implements OnInit {
    constructor(
        private dogWorksService: DogWorksService
    ) { }

    private worksTitle: string;
    private worksList: object;
    private worksViewMore: string;

    ngOnInit() {
        this.dogWorksService.getDogWorks()
            .then(works => {
                this.worksTitle = works.title;
                this.worksList = works.worksList;
                this.worksViewMore = works.viewMore;
            })
    }
}