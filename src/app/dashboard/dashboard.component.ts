import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../data-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user="user1";
  dAccno="";
  dPswd="";
  dAmount="";

  wAccno="";
  wPswd="";
  wAmount="";

  constructor(private dataserve:DataServicesService) { }

  ngOnInit(): void {
  }
  deposit(){
    var accno=this.dAccno;
    var pswd=this.dPswd;
    var amount=this.dAmount
    const result=this.dataserve.deposit(accno,pswd,amount)
    if(result){
      alert("The given amount"+amount+"credited and new balance is:"+result)
    }
  }
  withdraw(){
    var accno=this.wAccno;
    var pswd=this.wPswd;
    var amount=this.wAmount
    const result=this.dataserve.withdraw(accno,pswd,amount)
    if(result){
      alert("The given amount"+amount+"dedited and new balance is:"+result)
    }
  }
}
