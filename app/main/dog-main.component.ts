import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dog-main',
    templateUrl: 'dog-main.component.html',
    styleUrls: ['dog-main.component.css']
})

export class DogMainComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        this.startWheelHandler(event);
    }

    

    startWheelHandler(event: any) {
        event = event || window.event;
        console.log(1);
    }
}