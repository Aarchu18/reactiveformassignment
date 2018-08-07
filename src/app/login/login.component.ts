import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    
    loginPass: new FormControl('', [Validators.required]),
    empId: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4), Validators.pattern('[0-9]*')]),
  });

  constructor(private routes:Router) { }
  dataSignup;
  signPassCheck=true;
  

  onSubmitLogin() {
   this.dataSignup= JSON.parse(localStorage.getItem("data"));
// console.log(this.dataSignup.pass);
    if ((this.dataSignup.pass !== this.loginForm.value.loginPass) || (this.dataSignup.EmpId !== this.loginForm.value.empId )) {
      console.log("passwordNotMatched");
      console.log("empid not matched");
      this.signPassCheck = false;
   //   this.signEmpCheck =false;
      this.routes.navigate(['/login']);
     
    }
    else{
      console.log("PasswordMatched");
      console.log("emp matched");
      this.signPassCheck=true;
 //     this.signEmpCheck=true;
      this.routes.navigate(['/showdetail']);
    }
    localStorage.setItem("isLoggedIn",String(this.signPassCheck));
  //  localStorage.setItem("isLoggedInEmp",String(this.signEmpCheck));
  
 

}
  ngOnInit() {
  }

}
