import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'dog-header',
    templateUrl: './dog-header.component.html',
    styleUrls: ['./dog-header.component.css']
})

export class DogHeaderComponent implements OnInit {
    titleList: object;

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(data => {
                this.titleList = data;
            });
    }
}