import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import{Router} from'@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private route:Router){}
  canActivate() {
    console.log("can activte call"+localStorage.getItem("isLoggedIn"));
      if (!localStorage.getItem("isLoggedIn")) {
      // if(localStorage.profileForm.value.EmpId == localStorage.)

return true;

    }
    else{
      this.route.navigate(['/']);
      return false;
    }


  }

  
}
