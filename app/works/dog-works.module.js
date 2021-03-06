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
var dog_works_component_1 = require("./dog-works.component");
var dog_works_service_1 = require("./dog-works.service");
var DogWorksModule = (function () {
    function DogWorksModule() {
    }
    return DogWorksModule;
}());
DogWorksModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        exports: [dog_works_component_1.DogWorksComponent],
        declarations: [dog_works_component_1.DogWorksComponent],
        providers: [dog_works_service_1.DogWorksService]
    })
], DogWorksModule);
exports.DogWorksModule = DogWorksModule;
//# sourceMappingURL=dog-works.module.js.map