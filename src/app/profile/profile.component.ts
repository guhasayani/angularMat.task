import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myName: string="";
  dob:any;
  edu:any;
  exp:any;
  constructor(
    private router: Router, 
    private userService: UserService
  ) {
      this.myName=this.userService.myName;
      this.dob=this.userService.dob;
      this.edu=this.userService.edu;
      this.exp=this.userService.exp;
   }

  ngOnInit(): void {
  }

  goEdit(){
    this.router.navigate(['edit'])
  }
  goHome(){
    this.router.navigate([''])
  }

}
