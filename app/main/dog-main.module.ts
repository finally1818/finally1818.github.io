import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogMainComponent } from './dog-main.component';
import { DogDefaultModule } from '../default/dog-default.module';
import { DogExperienceModule } from '../experience/dog-experience.module';
import { DogInfoModule } from '../info/dog-info.module';
import { DogSkillModule } from '../skill/dog-skill.module';
import { DogWorksModule } from '../works/dog-works.module';
import { DogContactModule } from '../contact/dog-contact.module';

@NgModule({
    imports: [
        BrowserModule,
        DogExperienceModule,
        DogDefaultModule,
        DogInfoModule,
        DogSkillModule,
        DogWorksModule,
        DogContactModule
    ],
    exports: [DogMainComponent],
    declarations: [DogMainComponent],
    providers: []
})
export class DogMainModule {}
