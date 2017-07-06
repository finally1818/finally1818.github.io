import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dog-main',
    templateUrl: 'dog-main.component.html',
    styleUrls: ['dog-main.component.css']
})

export class DogMainComponent {
    constructor() { }
    @Input() inNavIndex: number;
    @Output() outNavIndex: EventEmitter<number> = new EventEmitter<number>();
    private time: number = 0;
    ngOnInit() {

    }
    // 滚轮事件


    mouseWheel(event) {
        if (this.time === 0) {
            this.time = 1;
            if (event.wheelDelta < 0) {
                if (this.inNavIndex >= 5) {
                    this.outNavIndex.emit(5)
                } else {
                    this.inNavIndex++
                    this.outNavIndex.emit(this.inNavIndex);
                }
            } else if (event.wheelDelta > 0) {
                if (this.inNavIndex <= 0) {
                    this.outNavIndex.emit(0);
                } else {
                    this.inNavIndex--
                    this.outNavIndex.emit(this.inNavIndex);
                }
            }
            // 定时器
            let isTime = setInterval(() => {
                this.time--
                if (this.time == 0) {
                    clearInterval(isTime);
                }
            }, 500)
        }
    }

}