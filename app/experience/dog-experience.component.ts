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
    private bannerLeft: boolean = false;
    private bannerRight: boolean = false;
    private rotateX: string;
    private rotateY: string;
    private rotateXY: string;
    private offsetLeft: any;

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
            X = offsetH / 2 - pageY + offsetT;
        this.rotateX = "rotateX(" + X/50 + "deg)";
        this.rotateY = "rotateY(" + Y/50 + "deg)";
        this.rotateXY = this.rotateX + " " + this.rotateY;
    }

    mouseoutBanner(event: any) {
        this.rotateXY = "rotateX(0) rotateY(0)";
    }
}