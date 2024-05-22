// Commands to create the application
// npm init
// npm install -save es6-module-loader
// npm install -save traceur
// npm install -save-dev lite-server

// import { Car } from "./classes/car.js";
// import { Drone } from "./classes/drone.js";

import { fleet } from "./fleet-data.js";
import { FleetDataService } from "./services/fleet-data-service.js";

let dataService = new FleetDataService();
dataService.loadData(fleet);

console.log(fleet);
// console.log(dataService.cars);
// console.log(dataService.drones);
// console.log(dataService.errors);

// // for (let car of dataService.cars) {
// //     console.log(car.license);
// // }

// // for (let e of dataService.errors) {
// //     console.log(e.message + ' ' + JSON.stringify(e.data));
// // }

let car = dataService.getCarByLicense("AT9900");
let cars = dataService.getCarsSortedByLicense();
let cars2 = dataService.filterCarsByMake("T");
console.log(car);
console.log(cars);
console.log(cars2);
