import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicesService } from '../data-services.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  aim = "Register"
  // acno = "";
  // pswd = "";
  // uname = "";
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })
  constructor(private dataserve: DataServicesService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  reg() {

    
    if(this.registerForm.valid){
      

    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var pswd = this.registerForm.value.pswd;



    const result = this.dataserve.reg(uname, acno, pswd)
    

    if (result) {
      alert("registaration successfull");
      this.router.navigateByUrl("");


    }
    else {
      alert("User exists Pl login")
      this.router.navigateByUrl("")
    }
    

  }
else{
  alert("invalid form")
}
}


}
