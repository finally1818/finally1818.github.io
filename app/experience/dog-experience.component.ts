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

    mouseoverBanner(event: any, ele: any) {
        console.log(ele)
        let offsetX = event.offsetX,
            offsetY = event.offsetY,
            X = 0,
            Y = 0;
        X = (125 - offsetX) / 40;
        Y = (offsetY - 375) / 40;
        this.rotateX = "rotateX(" + X + "deg)";
        this.rotateY = "rotateY(" + Y + "deg)";
        this.rotateXY = this.rotateX + " " + this.rotateY;
        console.log(this.rotateXY)
        // if (offsetY < 375) {
        //     this.bannerLeft = !this.bannerLeft;
        //     this.rotateX = "rotateX(" + X + ")";
        //     this.rotateY = "rotateY(" + Y + ")";
        //     // this.rotate3d = "rotate3d(" + (375 - Y) / 25 + ")";
        //     // this.rotateX = "rotateX(" + (125 - X) / 25 + "deg)";
        //     console.log(this.rotate3d)
        // } else if (offsetY > 375) {
        //     this.bannerRight = !this.bannerRight;
        //     // this.rotateY = "rotateY(" + -(Y - 375) / 25 + "deg)";
        //     // this.rotateX = "rotateX(" + -(X - 125) / 25 + "deg)";
        //     console.log(x, y)
        // }
    }

    mouseoutBanner(event: any) {
        this.rotateX = "rotateX(" + 0 + ")";
        this.rotateY = "rotateY(" + 0 + ")";
        this.rotateXY = this.rotateX + " " + this.rotateY;
    }
}