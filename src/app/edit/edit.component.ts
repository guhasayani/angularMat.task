import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  myName: string="";
  dob:any;
  edu:any;
  exp:any;
  constructor( 
    private router: Router,
    private userService: UserService) {}
    

  ngOnInit(): void {
  }
  dateChange(data:any){
    this.dob=data.value;
  }
  optChange(data:any){
    this.edu = data.value;
  }
  expChange(data:any){
    this.exp = data.value;
  }
  updateValue(){
    console.log(this.myName, this.dob, this.edu, this.exp);
    this.userService.myName = this.myName;
    this.userService.dob = this.dob;
    this.userService.edu = this.edu
    this.userService.exp = this.exp;;
  }
  goProfile(){
    this.router.navigate(['profile'])
  }
}
