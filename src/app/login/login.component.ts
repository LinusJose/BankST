import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServicesService } from '../data-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "thankyou";
  // accno = "account num pls";
  accno="account num pls";

  pswd = "";

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })



  constructor(private router: Router, private dataserve: DataServicesService, private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

  // accChange(event: any) {
  //   this.accno = event.target.value;
  //   console.log(this.accno);

  // }
  // pwdChange(event: any) {
  //   this.pswd = event.target.value;
  //   console.log(this.pswd);
  // }

  login() {
    if(this.loginForm.valid){
      var acno = this.loginForm.value.acno;
      var pswd = this.loginForm.value.pswd;
  
      const res = this.dataserve.login(acno, pswd)
      if (res) {
        this.router.navigateByUrl("dashboard")
  
      }
      else {
        alert("failed")

    }
 
    }
    else{
      alert("invalid form")
    }
  }
  reg() {
    this.router.navigateByUrl("register")
  }
}
