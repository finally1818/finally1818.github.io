import { Component, OnInit } from '@angular/core';

import { DogHeaderService } from './dog-header.service';

@Component({
    moduleId: module.id,
    selector: 'dog-header',
    templateUrl: './dog-header.component.html',
    styleUrls: ['./dog-header.component.css']
})

export class DogHeaderComponent implements OnInit {
    titleList: object;
    pageIndex: number;
    constructor(private dogHeaderService: DogHeaderService) { }

    ngOnInit(): void {
        this.dogHeaderService.getDogHeader()
            .then(data => {
                this.titleList = data;
            });
    }
}