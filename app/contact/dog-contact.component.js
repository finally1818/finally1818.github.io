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
var dog_contact_service_1 = require("./dog-contact.service");
var DogContactComponent = (function () {
    function DogContactComponent(dogContactService) {
        this.dogContactService = dogContactService;
    }
    DogContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dogContactService.getDogContact()
            .then(function (contact) {
            _this.conTitle = contact.title;
            _this.conDesList1 = contact.desList1;
            _this.conDesList2 = contact.desList2;
            _this.conDownLoad = contact.download;
            _this.conFileList = contact.fileList;
            _this.conTypeList = contact.typeList;
        });
    };
    DogContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dog-contact',
            templateUrl: 'dog-contact.component.html',
            styleUrls: ['dog-contact.component.css']
        }),
        __metadata("design:paramtypes", [dog_contact_service_1.DogContactService])
    ], DogContactComponent);
    return DogContactComponent;
}());
exports.DogContactComponent = DogContactComponent;
//# sourceMappingURL=dog-contact.component.js.map