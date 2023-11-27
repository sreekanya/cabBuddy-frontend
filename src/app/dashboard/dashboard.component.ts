import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CabookingsService } from '../services/cabookings.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public bookings:any[]= [];
  //fetching: boolean = false;
  public bookingsInfo:any;

  constructor(private bookingService:CabookingsService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings() {
    //this.bookingService.getAll();
    this.bookingService.getAll().subscribe((data:any)=>{
      if(data.length !=0){
        this.bookings = data;
        //this.bookings = Object.assign([],data);
        //this.fetching = false;
         console.log(this.bookings);
      }
    })
}

public openModal(model:any, bookingInfo?:any ){
  this.modalService.open(model ,{size:"l"});
  this.bookingsInfo = bookingInfo;
}

public closeModal(modelRef:any) {
this.modalService.dismissAll(modelRef);
}

deleteBooking(bookingId:any) {
this.bookingService.delete(bookingId).subscribe((response:any ) => {
  this.getAllBookings();
});
}
}
