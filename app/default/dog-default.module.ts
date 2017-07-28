import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogDefaultComponent } from './dog-default.component';
import { DogDefaultService } from './dog-default.service';

@NgModule({
    imports: [BrowserModule],
    exports: [DogDefaultComponent],
    declarations: [DogDefaultComponent],
    providers: [DogDefaultService]
})
export class DogDefaultModule {}
