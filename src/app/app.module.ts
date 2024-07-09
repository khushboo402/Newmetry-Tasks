import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./Pages/Admin/login/login.component";
import { LayoutComponent } from "./Pages/Admin/layout/layout.component";
import { NewFlightComponent } from "./Pages/Admin/new-flight/new-flight.component";
import { AllFlightsComponent } from "./Pages/Admin/all-flights/all-flights.component";
import { BookingsComponent } from "./Pages/Admin/bookings/bookings.component";
import { AirportComponent } from "./Pages/Admin/airport/airport.component";
import { CityComponent } from "./Pages/Admin/city/city.component";
import { SearchComponent } from "./Pages/Website/search/search.component";
import { BookFlightComponent } from "./Pages/Website/book-flight/book-flight.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { RouterOutlet } from "@angular/router";

import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routes";


@NgModule({
    declarations: [
        //AppComponent,
        LoginComponent,
        LayoutComponent,
        NewFlightComponent,
        AllFlightsComponent,
        BookingsComponent,
        AirportComponent,
        CityComponent,
        SearchComponent,
        BookFlightComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        RouterModule,
        //HttpClient,
        AppComponent
    ],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent]

})
export class AppModule { }