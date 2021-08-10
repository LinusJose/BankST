import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  aim="Register"
  acno="";
  pswd="";
  uname="";

  constructor() { }

  ngOnInit(): void {
  }
reg(){
  alert("Register clicked")
}
}
