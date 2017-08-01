import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogSkillComponent } from './dog-skill.component';
import { DogSkillService } from './dog-skill.service';

@NgModule({
    imports: [BrowserModule],
    exports: [DogSkillComponent],
    declarations: [DogSkillComponent],
    providers: [DogSkillService]
})
export class DogSkillModule {}
