import { Injectable } from '@angular/core';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  // an array of Flight objects used to mock up a database for testing
  flights: Flight[] = [
     {origin: "Miami", destination: 'Chicago', flightNumber: 345,
     depart: new Date('2020-02-25T23:18:21.932Z'),
     arrive: new Date('2020-02-25T23:21:21.932Z'), nonstop: true}, 
     {origin: "New York", destination: 'Los Angeles', flightNumber: 432,
     depart: new Date('2020-05-25T23:18:00.932Z'),  
     arrive: new Date('2020-05-25T23:23:21.932Z'), nonstop: false}, 
  ];

  constructor() { }

  // method to get all flights
  getFlights(){
    return this.flights;
  }

  // method to post a new flight to the database
  postFlight( flight: Flight ) {
    // method body here
  }

  // method to delete flight from database by id
  deleteFlight( id: number ) {
    // method body here
  }

}