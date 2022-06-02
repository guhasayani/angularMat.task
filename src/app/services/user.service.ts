import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  myName: string="Sayani Guha";
  dob:any="26 Sept, 1997";
  edu:any="Post Graduate";
  exp:any="Fresher";
}
