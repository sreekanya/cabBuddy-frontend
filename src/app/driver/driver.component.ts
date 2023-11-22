import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  public drivers:any[]= [];
  //fetching: boolean = false;
  public driverInfo:any;

  constructor(private driverService:DriverService, private modalService:NgbModal) { }

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

public openModal(model:any, driverInfo?:any ){
  this.modalService.open(model ,{size:"l"});
  this.driverInfo = driverInfo;
}

public closeModal(modelRef:any) {
this.modalService.dismissAll(modelRef);
}

deleteDriver(driverId:any) {
this.driverService.delete(driverId).subscribe((response:any ) => {
  this.getAllDrivers();
});
}
}
