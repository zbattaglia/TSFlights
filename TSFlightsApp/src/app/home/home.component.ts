import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights: Flight[];

  // connects our flights.service.ts imported at top
  constructor( private flightsService: FlightsService ) { }

  ngOnInit(): void {
    this.flights = this.flightsService.getFlights();
  }

  // this method will live in the flights service
  getFlights() {
    // function to get existing flights
  }
}
