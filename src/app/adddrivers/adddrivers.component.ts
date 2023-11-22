import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DriverService } from '../services/driver.service';


@Component({
  selector: 'app-adddrivers',
  templateUrl: './adddrivers.component.html',
  styleUrls: ['./adddrivers.component.css']
})
export class AdddriversComponent implements OnInit {

  driverBool: boolean = true;
  driverForm:FormGroup = new FormGroup({});
  loader : boolean = false;
  errResponse: any;

  @Input()
  public driverInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: NgbModal,  private fb:FormBuilder, private driverService:DriverService,
    private router:Router) { }

  ngOnInit(): void {
    if(this.driverInfo) {
      this.initialForm(this.driverInfo);
    } else{
      this.initialForm();
    }
  }

  initialForm(driverObj: any = null) {
    if (driverObj === null) {
      // create
      this.driverForm = this.fb.group({
        // cabId: ["", Validators.required],
        driverName: ["", Validators.required],
        driverEmail: ["", Validators.required],
        driverAddress: ["", Validators.required],
        driverPhone: ["", Validators.required]
      });
    } else {
      // update
      this.driverForm = this.fb.group({
        driverId: [driverObj.driverId, Validators.required],
        driverName: [driverObj.driverName, Validators.required],
        driverEmail: [driverObj.driverEmail, Validators.required],
        driverAddress: [driverObj.driverAddress, Validators.required],
        driverPhone: [driverObj.driverPhone, Validators.required]
      });
    }
  }

  onSubmit() {
    if(this.driverForm.valid) {
      if(this.driverForm.get('driverId')?.value) {
        this.handleUpdate();
      } else{
        console.log(this.driverForm.value);
        this.handleCreate();
      }
    } else{
      this.errResponse = "Unable to submit form, Invalid form data";
      console.log("Invalid Form");
    }
  }

  handleCreate() {
    console.log("inside handle create",this.driverInfo);
    this.driverService.add(this.driverForm.value).subscribe((response:any)=>{
      // console.log(response);
      // this.router.navigateByUrl('/users');
      window.location.href ="/driver";
      this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }

  handleUpdate() {
    this.driverService.update(this.driverForm.getRawValue()).subscribe((response:any)=>{
      // console.log(response);
      window.location.href ="/driver";
        this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }
  
  close() {
    this.closeModel.emit();
  }

}
