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
var DogMainComponent = (function () {
    function DogMainComponent() {
        this.outNavIndex = new core_1.EventEmitter();
        this.time = 0;
    }
    DogMainComponent.prototype.ngOnInit = function () {
    };
    // 滚轮事件
    DogMainComponent.prototype.mouseWheel = function (event) {
        var _this = this;
        if (this.time === 0) {
            this.time = 1;
            // 定时器
            var isTime_1 = setInterval(function () {
                _this.time--;
                if (event.wheelDelta < 0) {
                    if (_this.inNavIndex >= 5) {
                        _this.outNavIndex.emit(5);
                    }
                    else {
                        _this.inNavIndex = _this.inNavIndex + 1;
                        _this.outNavIndex.emit(_this.inNavIndex);
                    }
                }
                else if (event.wheelDelta > 0) {
                    if (_this.inNavIndex <= 0) {
                        _this.outNavIndex.emit(0);
                    }
                    else {
                        _this.inNavIndex = _this.inNavIndex - 1;
                        _this.outNavIndex.emit(_this.inNavIndex);
                    }
                }
                if (_this.time == 0) {
                    clearInterval(isTime_1);
                }
            }, 200);
        }
    };
    return DogMainComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DogMainComponent.prototype, "inNavIndex", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DogMainComponent.prototype, "outNavIndex", void 0);
DogMainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dog-main',
        templateUrl: 'dog-main.component.html',
        styleUrls: ['dog-main.component.css']
    }),
    __metadata("design:paramtypes", [])
], DogMainComponent);
exports.DogMainComponent = DogMainComponent;
//# sourceMappingURL=dog-main.component.js.map