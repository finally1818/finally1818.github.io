import { Component, OnInit } from '@angular/core';

import { DogSkillService} from './dog-skill.service';

@Component({
    moduleId: module.id,
    selector: 'dog-skill',
    templateUrl: 'dog-skill.component.html',
    styleUrls: ['dog-skill.component.css']
})

export class DogSkillComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}