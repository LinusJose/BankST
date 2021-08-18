import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServicesService } from '../data-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user="user1";


  depositForm = this.fb.group({
    acno: ['', [Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]


  })

  withdrawForm = this.fb.group({
    acno: ['', [Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]


  })
  constructor(private dataserve:DataServicesService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  deposit(){
    if(this.depositForm.valid){
      var accno=this.depositForm.value.acno;
      var pswd=this.depositForm.value.pswd;
      var amount=this.depositForm.value.amount;
      const result=this.dataserve.deposit(accno,pswd,amount)
      if(result){
        alert("The given amount"+amount+"credited and new balance is:"+result)
      }
    }
    else{
      alert("invaid form")
    }
   
  }
  withdraw(){
    if(this.withdrawForm.valid){
      var accno=this.withdrawForm.value.acno;
    var pswd=this.withdrawForm.value.pswd;
    var amount=this.withdrawForm.value.amount;
    const result=this.dataserve.withdraw(accno,pswd,amount)
    if(result){
      alert("The given amount"+amount+"dedited and new balance is:"+result)
    }

    }
    else{
      alert("invaid form")
    }
    
  }
}
