import { Component, OnInit } from '@angular/core';
import { CabsService } from '../services/cabs.service';

@Component({
  selector: 'app-cabs',
  templateUrl: './cabs.component.html',
  styleUrls: ['./cabs.component.css']
})
export class CabsComponent implements OnInit {

  public cabs:any[]= [];
  //fetching: boolean = false;

  constructor(private cabService:CabsService) { }

  ngOnInit(): void {
    this.getAllCabs();
  }

  getAllCabs() {
    //this.bookingService.getAll();
    this.cabService.getAll().subscribe((data:any)=>{
      if(data.length !=0){
        this.cabs = data;
        //this.bookings = Object.assign([],data);
        //this.fetching = false;
         console.log(this.cabs);
      }
    })
}
}
