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
var dog_header_service_1 = require("./dog-header.service");
var DogHeaderComponent = (function () {
    function DogHeaderComponent(dogHeaderService) {
        this.dogHeaderService = dogHeaderService;
    }
    DogHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dogHeaderService.getDogHeader()
            .then(function (data) {
            _this.titleList = data;
        });
    };
    return DogHeaderComponent;
}());
DogHeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dog-header',
        templateUrl: './dog-header.component.html',
        styleUrls: ['./dog-header.component.css']
    }),
    __metadata("design:paramtypes", [dog_header_service_1.DogHeaderService])
], DogHeaderComponent);
exports.DogHeaderComponent = DogHeaderComponent;
//# sourceMappingURL=dog-header.component.js.map