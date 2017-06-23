import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogInfoComponent } from './dog-info.component';
import { DogInfoService } from './dog-info.service';

@NgModule({
    imports: [BrowserModule],
    exports: [DogInfoComponent],
    declarations: [DogInfoComponent],
    providers: [DogInfoService],
})
export class DogInfoModule { }
