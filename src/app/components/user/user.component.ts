import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorHelper } from 'src/app/helpers/errorHelper';
import { CustomerAndUserUpdate } from 'src/app/models/customerAndUserUpdate';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  updateForm!: FormGroup; 
  userDetail:CustomerAndUserUpdate=Object.assign({});;

  constructor(
    private toastrService: ToastrService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createUpdateForm();
    this.getUser();
    // setTimeout(()=>{
    //   console.log(this.userDetail);  
    // },3000)
     
  }

  createUpdateForm() {
    this.updateForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      activePassword: new FormControl('', Validators.required),
      newPassword: new FormControl(''),
    });
  }

setCustomerId(){}

  update() {
    if (this.updateForm.valid) {
    let customerAndUserUpdateDto : CustomerAndUserUpdate = this.updateForm.value;
    customerAndUserUpdateDto.id = this.userDetail.id;
    customerAndUserUpdateDto.customerId=this.userDetail.customerId
    console.log(customerAndUserUpdateDto.id)
    this.customerService.updateWithUser(customerAndUserUpdateDto).subscribe(response=>{
    this.toastrService.success(response.message);
    this.router.navigate(["cars"])
    }, error=>{
      this.toastrService.error(ErrorHelper.getMessage(error));
    });

    } else {
      this.toastrService.warning(
        'L??tfen t??m alanlar?? istenildi??i ??ekilde doldurunuz.'
      );
    }
  }

  getUser(){
    let userId=this.authService.getUserId();
    this.customerService.getCustomerAndUser(userId).subscribe((response)=>{
      this.userDetail = response.data
      //console.log(this.userDetail.customerId);
    });
  }

}
