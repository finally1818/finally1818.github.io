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
var dog_main_component_1 = require("./dog-main.component");
var dog_default_module_1 = require("../default/dog-default.module");
var dog_experience_module_1 = require("../experience/dog-experience.module");
var dog_info_module_1 = require("../info/dog-info.module");
var dog_skill_module_1 = require("../skill/dog-skill.module");
var dog_works_module_1 = require("../works/dog-works.module");
var dog_contact_module_1 = require("../contact/dog-contact.module");
var DogMainModule = (function () {
    function DogMainModule() {
    }
    DogMainModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                dog_experience_module_1.DogExperienceModule,
                dog_default_module_1.DogDefaultModule,
                dog_info_module_1.DogInfoModule,
                dog_skill_module_1.DogSkillModule,
                dog_works_module_1.DogWorksModule,
                dog_contact_module_1.DogContactModule
            ],
            exports: [dog_main_component_1.DogMainComponent],
            declarations: [dog_main_component_1.DogMainComponent],
            providers: [],
        })
    ], DogMainModule);
    return DogMainModule;
}());
exports.DogMainModule = DogMainModule;
//# sourceMappingURL=dog-main.module.js.map