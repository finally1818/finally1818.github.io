import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DogHeaderModule } from "./header/dog-header.module";
import { DogMainModule } from './main/dog-main.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        DogHeaderModule,
        DogMainModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
