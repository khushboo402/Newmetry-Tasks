import { Component } from '@angular/core';
interface Airport {
  id: number;
  name: string;
  code: string;
  city: string;
}
@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.css'
})
export class AirportComponent {
  airports: Airport[] = [];
  airport: Airport = { id: 0, name: '', code: '', city: '' };
  editMode: boolean = false;

  ngOnInit(): void {
    this.loadAirports();
  }

  loadAirports(): void {

    this.airports = [
      { id: 1, name: 'Indira Gandhi International Airport', code: 'DEL', city: 'Delhi' },
      { id: 2, name: 'Chhatrapati Shivaji Maharaj International Airport', code: 'BOM', city: 'Mumbai' }
    ];
  }

  onSubmit(): void {
    if (this.editMode) {
      this.updateAirport();
    } else {
      this.addAirport();
    }
    this.resetForm();
  }

  addAirport(): void {
    const newAirport = { ...this.airport, id: this.airports.length + 1 };
    this.airports.push(newAirport);
  }

  editAirport(airport: Airport): void {
    this.airport = { ...airport };
    this.editMode = true;
  }

  updateAirport(): void {
    const index = this.airports.findIndex(a => a.id === this.airport.id);
    if (index !== -1) {
      this.airports[index] = { ...this.airport };
    }
    this.editMode = false;
  }

  deleteAirport(id: number): void {
    this.airports = this.airports.filter(a => a.id !== id);
  }

  resetForm(): void {
    this.airport = { id: 0, name: '', code: '', city: '' };
    this.editMode = false;
  }
}
