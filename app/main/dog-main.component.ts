import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dog-main',
    templateUrl: 'dog-main.component.html',
    styleUrls: ['dog-main.component.css']
})
export class DogMainComponent {
    constructor() {}
    @Input() navIndex: number;
    @Output() outNavIndex: EventEmitter<number> = new EventEmitter<number>();
    private time: number = 0;
    // 滚轮事件
    mouseWheel(event: any) {
        if (this.time === 0) {
            this.time = 1;
            if (event.wheelDelta < 0) {
                if (this.navIndex >= 5) {
                    this.outNavIndex.emit(5);
                } else {
                    this.navIndex++;
                    this.outNavIndex.emit(this.navIndex);
                }
            } else if (event.wheelDelta > 0) {
                if (this.navIndex <= 0) {
                    this.outNavIndex.emit(0);
                } else {
                    this.navIndex--;
                    this.outNavIndex.emit(this.navIndex);
                }
            }
            // 定时器
            let isTime = setInterval(() => {
                this.time--;
                if (this.time == 0) {
                    clearInterval(isTime);
                }
            }, 500);
        }
    }
}
