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
var dog_info_service_1 = require("./dog-info.service");
var DogInfoComponent = (function () {
    function DogInfoComponent(dogInfoService) {
        this.dogInfoService = dogInfoService;
    }
    DogInfoComponent.prototype.ngOnInit = function () {
        this.getDogInfo();
    };
    DogInfoComponent.prototype.getDogInfo = function () {
        var _this = this;
        this.dogInfoService.getDogInfo().then(function (info) {
            _this.infoList = info.infoList;
            _this.infoTitle = info.title;
            _this.infoDesList = info.desList;
        });
    };
    return DogInfoComponent;
}());
DogInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dog-info',
        templateUrl: 'dog-info.component.html',
        styleUrls: ['dog-info.component.css']
    }),
    __metadata("design:paramtypes", [dog_info_service_1.DogInfoService])
], DogInfoComponent);
exports.DogInfoComponent = DogInfoComponent;
//# sourceMappingURL=dog-info.component.js.map