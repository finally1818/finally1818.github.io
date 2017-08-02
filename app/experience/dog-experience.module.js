"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var dog_experience_component_1 = require("./dog-experience.component");
var dog_experience_service_1 = require("./dog-experience.service");
var DogExperienceModule = (function () {
    function DogExperienceModule() {
    }
    return DogExperienceModule;
}());
DogExperienceModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        exports: [dog_experience_component_1.DogExperienceComponent],
        declarations: [dog_experience_component_1.DogExperienceComponent],
        providers: [dog_experience_service_1.DogExperienceService]
    })
], DogExperienceModule);
exports.DogExperienceModule = DogExperienceModule;
//# sourceMappingURL=dog-experience.module.js.map