import { Component, OnInit } from '@angular/core';

import { DogExperienceService } from './dog-experience.service';

@Component({
    moduleId: module.id,
    selector: 'dog-experience',
    templateUrl: 'dog-experience.component.html',
    styleUrls: ['dog-experience.component.css']
})

export class DogExperienceComponent implements OnInit {
    constructor(
        private dogExperienceService: DogExperienceService
    ) { }

    private expTitle: string;
    private expList: object;
    private expDes: string;

    ngOnInit() {
        this.dogExperienceService.getDogExperience()
            .then(experience => {
                this.expTitle = experience.title;
                this.expList = experience.expList;
                this.expDes = experience.des;
            })
    }
}