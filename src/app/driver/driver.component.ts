import { Component, OnInit } from '@angular/core';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  public drivers:any[]= [];
  //fetching: boolean = false;

  constructor(private driverService:DriverService) { }

  ngOnInit(): void {
    this.getAllDrivers();
  }

  getAllDrivers() {
    //this.bookingService.getAll();
    this.driverService.getAll().subscribe((data:any)=>{
      if(data.length !=0){
        this.drivers = data;
        //this.bookings = Object.assign([],data);
        //this.fetching = false;
         console.log(this.drivers);
      }
    })
}
}
