import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import{Router}from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {


  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]*$")]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]*$")]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$")]),
    contactno: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
    pass: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")]),
    confirmpassword: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")]),
    gender: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]*$")]),
    EmpId: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4), Validators.pattern('[0-9]*')]),
  });
  constructor(private routes:Router) { 

  }
  
  onButtonClick() {
    localStorage.setItem("data", JSON.stringify(this.profileForm.value));
    this.routes.navigate(['/showdetail']);
  }
  functiontest(){
    if(this.profileForm.value.pass !== this.profileForm.value.confirmpassword)
    {
      console.log("Invalid");
    }
    else{
      console.log("valid");
    }
  }
     
   ngOnInit() {
    if(this.routes.url==='/detail')
    
    {
     var data2=JSON.parse(localStorage.getItem("profileForm"));
    console.log(data2);
      console.log("yes");
      this.profileForm.patchValue({
        firstName: data2.firstName,
        lastName: data2.lastName,
        email:data2.email,
        contactno:data2.contactno,
        pass:data2.pass,
        confirmpassword:data2.confirmpassword,
        gender:data2.gender,
        EmpId:data2.EmpId
        
      });
    }
    else
    {
      console.log("No");
    }

  }


}
