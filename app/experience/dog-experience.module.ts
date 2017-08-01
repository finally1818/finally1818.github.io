import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogExperienceComponent } from './dog-experience.component';
import { DogExperienceService } from './dog-experience.service';

@NgModule({
    imports: [BrowserModule],
    exports: [DogExperienceComponent],
    declarations: [DogExperienceComponent],
    providers: [DogExperienceService]
})
export class DogExperienceModule {}
