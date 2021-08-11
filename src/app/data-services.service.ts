import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  uname="";
  acno="";
  pswd="";

  accountDetails:any= {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
}


login(acno:any,pswd:any){

  if(acno in this.accountDetails){
    if(pswd==this.accountDetails[acno]["password"]){
      alert("login successfull")
      return true;
    }
    else{
      alert("failed")
      return false;

    }
  }
}


reg(uname:any,acno:any,pswd:any) {
 

  // let user = this.dataserve.accountDetails;
  if (acno in this.accountDetails) {
    return false;
    
  }
  else {
    this.accountDetails[acno] = {
      acno,
      username: uname,
      password: pswd,
      balance: 0
    }
    return true;
   

  }

}


  constructor(private router:Router) { }
}
