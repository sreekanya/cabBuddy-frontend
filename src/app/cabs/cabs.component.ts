import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CabsService } from '../services/cabs.service';

@Component({
  selector: 'app-cabs',
  templateUrl: './cabs.component.html',
  styleUrls: ['./cabs.component.css']
})
export class CabsComponent implements OnInit {

  public cabs:any[]= [];
  //fetching: boolean = false;
  public cabInfo:any;

  constructor(private cabService:CabsService, private modalService:NgbModal) { }

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

 public openModal(model:any, cabInfo?:any ){
    this.modalService.open(model ,{size:"l"});
    this.cabInfo = cabInfo;
 }

 public closeModal(modelRef:any) {
  this.modalService.dismissAll(modelRef);
}

deleteCab(cabId:any) {
  this.cabService.delete(cabId).subscribe((response:any ) => {
    this.getAllCabs();
  });
}
}
