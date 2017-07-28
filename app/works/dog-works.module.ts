import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogWorksComponent } from './dog-works.component';
import { DogWorksService } from './dog-works.service';

@NgModule({
    imports: [BrowserModule],
    exports: [DogWorksComponent],
    declarations: [DogWorksComponent],
    providers: [DogWorksService]
})
export class DogWorksModule {}
