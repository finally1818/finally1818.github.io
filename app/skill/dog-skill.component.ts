import { Component, OnInit } from '@angular/core';

import { DogSkillService } from './dog-skill.service';

@Component({
    moduleId: module.id,
    selector: 'dog-skill',
    templateUrl: 'dog-skill.component.html',
    styleUrls: ['dog-skill.component.css']
})

export class DogSkillComponent implements OnInit {
    constructor(
        private dogSkillService: DogSkillService
    ) { }

    private skillTitle: string;
    private skillOutCircleList: object;
    private skillInnerCircleList: object;
    private skillDesList: object;
    ngOnInit() {
        this.dogSkillService.getDogSkill()
            .then(skill => {
                this.skillTitle = skill.title;
                this.skillOutCircleList = skill.outCircleList;
                this.skillInnerCircleList = skill.innerCircleList;
                this.skillDesList = skill.desList;
                console.log(this.skillTitle);
                console.log(this.skillOutCircleList[1].name);
                console.log(this.skillInnerCircleList);
                console.log(this.skillDesList);
                }
            )
    }
}