import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
// import { DogHeaderModule } from "./dog-header.module";
import { DogMainModule } from './main/dog-main.module';
import { DogHeaderService } from './header/dog-header.service';
import { DogFooterService } from './footer/dog-footer.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        // DogHeaderModule,
        DogMainModule
    ],
    declarations: [AppComponent],
    providers: [DogHeaderService, DogFooterService],
    bootstrap: [AppComponent]
})
export class AppModule {}
