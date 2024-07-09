import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet],

  standalone: true

})
export class AppComponent {
  title = 'Flight-Booking-App';
}
