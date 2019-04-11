import {Component, OnInit} from '@angular/core';
import {CarsService} from "./cars.service";

interface Cars  {
    name: string;
    color: string;
    id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    cars: Cars[] = [];
    carName: string = '';

    constructor(private carsService: CarsService) {}

    ngOnInit() {
    //   this.carsService
    //       .getCars()
    //       .subscribe((response) => {     get data on init
    //         console.log(response);
    //       });
    }

    loadCars() {
      this.carsService
          .getCars()
          .subscribe(response => {
            // console.log(response);
            this.cars = response;
          });
    }

    addCar() {

    }

}
