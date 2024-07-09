import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit {
  flights: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchFlights();
  }

  fetchFlights() {
    this.http.get('https://freeapi.gerasim.in/api/FlightBooking/GetAllFlights')

  }
}
