import { Component, OnInit } from '@angular/core';
import { CabookingsService } from '../services/cabookings.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public bookings:any[]= [];
  //fetching: boolean = false;

  constructor(private bookingService:CabookingsService) { }

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
}
