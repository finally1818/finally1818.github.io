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
var dog_skill_service_1 = require("./dog-skill.service");
var DogSkillComponent = (function () {
    function DogSkillComponent(dogSkillService) {
        this.dogSkillService = dogSkillService;
    }
    DogSkillComponent.prototype.ngOnInit = function () {
        this.getDogSkill();
    };
    DogSkillComponent.prototype.getDogSkill = function () {
        var _this = this;
        this.dogSkillService.getDogSkill().then(function (skill) {
            _this.skillTitle = skill.title;
            _this.skillOutCircleList = skill.outCircleList;
            _this.skillInnerCircleList = skill.innerCircleList;
            _this.skillDesList = skill.desList;
        });
    };
    return DogSkillComponent;
}());
DogSkillComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dog-skill',
        templateUrl: 'dog-skill.component.html',
        styleUrls: ['dog-skill.component.css']
    }),
    __metadata("design:paramtypes", [dog_skill_service_1.DogSkillService])
], DogSkillComponent);
exports.DogSkillComponent = DogSkillComponent;
//# sourceMappingURL=dog-skill.component.js.map