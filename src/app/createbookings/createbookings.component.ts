import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CabookingsService } from '../services/cabookings.service';

@Component({
  selector: 'app-createbookings',
  templateUrl: './createbookings.component.html',
  styleUrls: ['./createbookings.component.css']
})
export class CreatebookingsComponent implements OnInit {

  bookingsBool: boolean = true;
  bookingsForm:FormGroup = new FormGroup({});
  loader : boolean = false;
  errResponse: any;

  @Input()
  public bookingsInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: NgbModal,  private fb:FormBuilder, private bookingService:CabookingsService,
    private router:Router) { }

  ngOnInit(): void {
    if(this.bookingsInfo) {
      this.initialForm(this.bookingsInfo);
    } else{
      this.initialForm();
    }
  }

  initialForm(bookingObj: any = null) {
    if (bookingObj === null) {
      // create
      this.bookingsForm = this.fb.group({
        // cabId: ["", Validators.required],
        customerName: ["", Validators.required],
        customerEmail: ["", Validators.required],
        customerPhone: ["", Validators.required],
        numPassengers: ["", Validators.required],
        bookingFrom: ["", Validators.required],
        bookingTo: ["", Validators.required],
        totalPay: ["", Validators.required]
      });
    } else {
      // update
      this.bookingsForm = this.fb.group({
        bookingId: [bookingObj.bookingId, Validators.required],
        customerName: [bookingObj.customerName, Validators.required],
        customerEmail: [bookingObj.customerEmail, Validators.required],
        customerPhone: [bookingObj.customerPhone, Validators.required],
        numPassengers: [bookingObj.numPassengers, Validators.required],
        bookingFrom: [bookingObj.bookingFrom, Validators.required],
        bookingTo: [bookingObj.bookingTo, Validators.required],
        totalPay: [bookingObj.totalPay, Validators.required]
      });
    }
  }

  onSubmit() {
    if(this.bookingsForm.valid) {
      if(this.bookingsForm.get('driverId')?.value) {
        this.handleUpdate();
      } else{
        console.log(this.bookingsForm.value);
        this.handleCreate();
      }
    } else{
      this.errResponse = "Unable to submit form, Invalid form data";
      console.log("Invalid Form");
    }
  }

  handleCreate() {
    console.log("inside handle create",this.bookingsInfo);
    //Add booking functionality
    this.bookingService.add(this.bookingsForm.value).subscribe((response:any)=>{
      // console.log(response);
      // this.router.navigateByUrl('/users');
      window.location.href ="/bookings";
      this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }

  handleUpdate() {
    this.bookingService.update(this.bookingsForm.getRawValue()).subscribe((response:any)=>{
      // console.log(response);
      window.location.href ="/bookings";
        this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }
  
  close() {
    this.closeModel.emit();
  }
}
