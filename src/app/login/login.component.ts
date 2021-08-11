import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicesService } from '../data-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "thankyou";
  accno = "account num pls";
  // acno="account num pls";

  pswd = "";



  constructor(private router: Router, private dataserve: DataServicesService) { }

  ngOnInit(): void {
  }

  accChange(event: any) {
    this.accno = event.target.value;
    console.log(this.accno);

  }
  pwdChange(event: any) {
    this.pswd = event.target.value;
    console.log(this.pswd);
  }

  login() {
    var acno = this.accno;
    var pswd = this.pswd;

    const res = this.dataserve.login(acno, pswd)
    if (res) {
      this.router.navigateByUrl("dashboard")

    }
    else {
      alert("failed")
    }
  }
  reg() {
    this.router.navigateByUrl("register")
  }
}
