import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  e:any;
  p:any;

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router
  ){ 
    
  }

  ngOnInit(): void {
   
  }

  auth(){
    if(this.e==="sayani@gmail.com" && this.p==="123"){
      this.router.navigate(['profile'])
    }else{
      this._snackBar.open("Credentials are wrong", "OK");
    }
  }
  

}
