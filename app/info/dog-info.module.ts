import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogInfoComponent } from './dog-info.component';

@NgModule({
    imports: [BrowserModule],
    exports: [DogInfoComponent],
    declarations: [DogInfoComponent],
    providers: [],
})
export class DogInfoModule { }
