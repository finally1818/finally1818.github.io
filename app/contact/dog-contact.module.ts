import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogContactComponent } from './dog-contact.component';
import { DogContactService } from './dog-contact.service';

@NgModule({
    imports: [BrowserModule],
    exports: [DogContactComponent],
    declarations: [DogContactComponent],
    providers: [DogContactService],
})
export class DogContactModule { }
