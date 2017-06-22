import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogSkillComponent } from './dog-skill.component';

@NgModule({
    imports: [BrowserModule],
    exports: [DogSkillComponent],
    declarations: [DogSkillComponent],
    providers: [],
})
export class DogSkillModule { }
