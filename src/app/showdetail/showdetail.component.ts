import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.component.html',
  styleUrls: ['./showdetail.component.css']
})
export class ShowdetailComponent implements OnInit {

  data1;
  constructor(private routes:Router) { 
    this.data1=JSON.parse(localStorage.getItem("data"));
    console.log("data1");
    }

  onButtonClick1() {

    this.routes.navigate(['/detail']);
  }

  ngOnInit() {
   
  }

}
