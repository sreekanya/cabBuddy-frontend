import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CabsService } from '../services/cabs.service';

@Component({
  selector: 'app-addcabs',
  templateUrl: './addcabs.component.html',
  styleUrls: ['./addcabs.component.css']
})
export class AddcabsComponent implements OnInit {

  cabBool: boolean = true;
  cabForm:FormGroup = new FormGroup({});
  loader : boolean = false;
  errResponse: any;

  @Input()
  public cabInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: NgbModal,  private fb:FormBuilder, private cabService:CabsService,
    private router:Router) { }

  ngOnInit(): void {
    if(this.cabInfo) {
      this.initialForm(this.cabInfo);
    } else{
      this.initialForm();
    }
  }

  initialForm(cabObj: any = null) {
    if (cabObj === null) {
      // create
      this.cabForm = this.fb.group({
        // cabId: ["", Validators.required],
        cabModel: ["", Validators.required],
        cabType: ["", Validators.required]
      });
    } else {
      // update
      this.cabForm = this.fb.group({
        cabId: [cabObj.cabId, Validators.required],
        cabModel: [cabObj.cabModel, Validators.required],
        cabType: [cabObj.cabType, Validators.required]
      });
    }
  }

  onSubmit() {
    if(this.cabForm.valid) {
      if(this.cabForm.get('cabId')?.value) {
        this.handleUpdate();
      } else{
        console.log(this.cabForm.value);
        this.handleCreate();
      }
    } else{
      this.errResponse = "Unable to submit form, Invalid form data";
      console.log("Invalid Form");
    }
  }

  handleCreate() {
    console.log("inside handle create",this.cabInfo);
    this.cabService.add(this.cabForm.value).subscribe((response:any)=>{
      // console.log(response);
      // this.router.navigateByUrl('/users');
      window.location.href ="/cabs";
      this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }

  handleUpdate() {
    this.cabService.update(this.cabForm.getRawValue()).subscribe((response:any)=>{
      // console.log(response);
      window.location.href ="/cabs";
        this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }
  
  close() {
    this.closeModel.emit();
  }
}
