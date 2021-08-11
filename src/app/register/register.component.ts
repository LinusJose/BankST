import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicesService } from '../data-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  aim = "Register"
  acno = "";
  pswd = "";
  uname = "";

  constructor(private dataserve: DataServicesService, private router: Router) { }

  ngOnInit(): void {
  }

reg()
{
var uname=this.uname;
var acno=this.acno;
var pswd=this.pswd;

const result=this.dataserve.reg(uname,acno,pswd)

if(result){
  alert("registaration successfull")
  this.router.navigateByUrl("")


}
else{
  alert("User exists")
  this.router.navigateByUrl("")
}
 

}
}
