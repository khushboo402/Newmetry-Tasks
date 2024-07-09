import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './Pages/Website/search/search.component';
import { BookFlightComponent } from './Pages/Website/book-flight/book-flight.component';
import { MyBookingsComponent } from './Pages/Website/my-bookings/my-bookings.component';
import { LayoutComponent } from './Pages/Admin/layout/layout.component';
import { AirportComponent } from './Pages/Admin/airport/airport.component';
import { CityComponent } from './Pages/Admin/city/city.component';
import { BookingsComponent } from './Pages/Admin/bookings/bookings.component';
import { NewFlightComponent } from './Pages/Admin/new-flight/new-flight.component';
import { LoginComponent } from './Pages/Admin/login/login.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: SearchComponent,
        title: 'Search Flight'
    },
    {
        path: 'book-flight',
        component: BookFlightComponent,
        title: 'Book New Ticket'
    },
    {
        path: 'Bookings',
        component: MyBookingsComponent,
        title: 'My-Bookings'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'airport',
                component: AirportComponent
            },
            {
                path: 'city',
                component: CityComponent
            },
            {
                path: 'all-bookings',
                component: BookingsComponent
            },
            {
                path: 'new-flight',
                component: NewFlightComponent
            }
        ]
    }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
