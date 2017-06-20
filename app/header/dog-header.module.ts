import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogHeaderComponent } from './dog-header.component';
import { HeroService } from './hero.service';

@NgModule({
    imports: [BrowserModule],
    exports: [DogHeaderComponent],
    declarations: [DogHeaderComponent],
    providers: [HeroService],
})
export class DogHeaderModule { }
