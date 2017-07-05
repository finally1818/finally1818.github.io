import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dog-main',
    templateUrl: 'dog-main.component.html',
    styleUrls: ['dog-main.component.css']
})

export class DogMainComponent {
    constructor() { }
    @Input() navIndex: string;

    ngOnInit() {
        
    }

    mouseWheel(event) {
        if (event.wheelDelta < 0) {

        }
        console.log(event.wheelDelta);
    }

    

    
}