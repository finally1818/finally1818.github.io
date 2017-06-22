import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogWorksComponent } from './dog-works.component';

@NgModule({
    imports: [BrowserModule],
    exports: [DogWorksComponent],
    declarations: [DogWorksComponent],
    providers: [],
})
export class DogWorksModule { }
