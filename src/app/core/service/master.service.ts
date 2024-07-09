import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MasterService {
  constructor(private http: HttpClient) { }

  getAllAirport() {
    return this.http.get("https://freeapi.gerasim.in/api/FlightBooking/GetAllAirport");
  }
  saveAirport(airportList: any) {
    return this.http.post("https://freeapi.gerasim.in/api/FlightBooking/AddUpdatedBulkAirports", airportList);
  }
  getAllCity() {
    return this.http.get("https://freeapi.gerasim.in/api/FlightBooking/GetAllCity");
  }
  getAllFlights() {
    return this.http.get("https://freeapi.gerasim.in/api/FlightBooking/GetAllFlights");
  }

}
