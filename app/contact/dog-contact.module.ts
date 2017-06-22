import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogContactComponent } from './dog-contact.component';

@NgModule({
    imports: [BrowserModule],
    exports: [DogContactComponent],
    declarations: [DogContactComponent],
    providers: [],
})
export class DogContactModule { }
