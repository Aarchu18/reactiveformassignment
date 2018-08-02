import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AppserviceService} from '../appservice.service';
@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.component.html',
  styleUrls: ['./showdetail.component.css']
})
export class ShowdetailComponent implements OnInit {
  data1;
  eye: string = "password";
  constructor(private appServiceObj: AppserviceService,private routes: Router) {
    this. data1=this.appServiceObj.getFormData();
    console.log("data1");
  }
  onButtonClick1() {

    this.routes.navigate(['/detail']);
  }
  eyefunction() {
    if (this.eye == "password") {
      this.eye = "text";
    }
    else {
      this.eye = "password";
    }
  }

  ngOnInit() {

  }

}
