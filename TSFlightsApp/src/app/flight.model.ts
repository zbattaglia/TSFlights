// the interface contains all of the data that each flight will require.
// Models are models for the difference Components in the application
export interface Flight {
    origin: string;
    destination: string;
    flightNumber: number;
    depart: Date;
    arrive: Date;
    nonstop: boolean;
};