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
    private rotateXY: string;
    private isExpItem: boolean = true;
    private itemIndex: number = 0;

    ngOnInit() {
        this.dogExperienceService.getDogExperience()
            .then(experience => {
                this.expTitle = experience.title;
                this.expList = experience.expList;
                this.expDes = experience.des;
            })
    }

    mouseoverBanner(event: any, banner: any) {
        let offsetW = banner.offsetWidth,
            offsetH = banner.offsetHeight,
            offsetL = banner.offsetLeft,
            offsetT = banner.offsetTop,
            pageX = event.pageX,
            pageY = event.pageY,
            Y = pageX - offsetL - offsetW / 2,
            X = offsetH / 2 - pageY + offsetT,
            rotateX = "rotateX(" + X/25 + "deg) ",
            rotateY = "rotateY(" + Y/25 + "deg)";
        this.rotateXY = rotateX + rotateY;
    }

    mouseoutBanner(event: any) {
        this.rotateXY = "rotateX(0) rotateY(0)";
    }

    onItem(i: number) {
        this.itemIndex = i;
    }
}