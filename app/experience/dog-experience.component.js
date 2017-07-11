"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dog_experience_service_1 = require("./dog-experience.service");
var DogExperienceComponent = (function () {
    function DogExperienceComponent(dogExperienceService) {
        this.dogExperienceService = dogExperienceService;
        this.bannerLeft = false;
        this.bannerRight = false;
    }
    DogExperienceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dogExperienceService.getDogExperience()
            .then(function (experience) {
            _this.expTitle = experience.title;
            _this.expList = experience.expList;
            _this.expDes = experience.des;
        });
    };
    DogExperienceComponent.prototype.mouseoverBanner = function (event, ele) {
        console.log(ele);
        var offsetX = event.offsetX, offsetY = event.offsetY, X = 0, Y = 0;
        X = (125 - offsetX) / 40;
        Y = (offsetY - 375) / 40;
        this.rotateX = "rotateX(" + X + "deg)";
        this.rotateY = "rotateY(" + Y + "deg)";
        this.rotateXY = this.rotateX + " " + this.rotateY;
        console.log(this.rotateXY);
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
    };
    DogExperienceComponent.prototype.mouseoutBanner = function (event) {
        this.rotateX = "rotateX(" + 0 + ")";
        this.rotateY = "rotateY(" + 0 + ")";
        this.rotateXY = this.rotateX + " " + this.rotateY;
    };
    return DogExperienceComponent;
}());
DogExperienceComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dog-experience',
        templateUrl: 'dog-experience.component.html',
        styleUrls: ['dog-experience.component.css']
    }),
    __metadata("design:paramtypes", [dog_experience_service_1.DogExperienceService])
], DogExperienceComponent);
exports.DogExperienceComponent = DogExperienceComponent;
//# sourceMappingURL=dog-experience.component.js.map