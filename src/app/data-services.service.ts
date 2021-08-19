import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  uname = "";
  acno = "";
  pswd = "";
  currentUser="";

  accountDetails: any = {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
  }
constructor(){
  this.getDetails();
}

  saveDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))

    }
    

  }
  getDetails(){
    if(localStorage.getItem("accountDetails")){
      this.accountDetails=JSON.parse (localStorage.getItem("accountDetails") ||'')

    }
if(localStorage.getItem("currentUser")){
  this.currentUser=JSON.parse (localStorage.getItem ("currentUser")||'')

}
  }

  login(acno: any, pswd: any) {
    let user = this.accountDetails;


    if (acno in user) {
      if (pswd == user[acno]["password"]) {
        alert("login successfull")
        this.currentUser=user[acno]["username"];
        this.saveDetails();
        return true;
      }
      else {
        alert("failed")
        return false;

      }
    }
  }


  reg(uname: any, acno: any, pswd: any) {


    let user = this.accountDetails;
    if (acno in user) {
      return false;

    }
    else {
      this.accountDetails[acno] = {
        acno,
        username: uname,
        password: pswd,
        balance: 0
      }
      this.saveDetails();
      return true;


    }

  }

  deposit(accno: any, pswd: any, amt: any) {
    var amount = parseInt(amt) //to do stringify the amount from string to integer.
    let user = this.accountDetails;
    if (accno in user) {
      if (pswd == this.accountDetails[accno]["password"]) {
        user[accno]["balance"] += amount;
      this.saveDetails();
        return user[accno]["balance"];

      }

      else {
        alert("invalid password")
        return false;
      }

    }
    else {
      alert("invalid account")
      return false;
    }
  }


  withdraw(accno: any, pswd: any, amt: any) {

    var amount = parseInt(amt) //to do stringify the amount from string to integer.
    let user = this.accountDetails;
    if (accno in user) {
      if (pswd == user[accno]["password"]) {

       if(user[accno]["balance"] > amount){

        user[accno]["balance"] -= amount;
        this.saveDetails();

        return user[accno]["balance"];

      }

      else {
        alert("insufficient balance")
        return false;
      }
    }

    else {
      alert("incorrect password")
      return false;
    }
  }

else{
  alert("invalid account")
  return false;
}
  }
}

   