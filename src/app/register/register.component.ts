import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  uname:any
  psw:any
  acno:any


  constructor(private ds:DataService,private router:Router,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }
registerForm=this.formbuilder.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\W]+')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]]
})

 register(){
  var uname=this.registerForm.value.uname
  var acno=this.registerForm.value.acno
  var psw=this.registerForm.value.psw
  if(this.registerForm.valid){
    const result=this.ds.register(acno,uname,psw)

    if(result){
      alert('Sucess')
      this.router.navigateByUrl('')
    }
  else{
    alert('user already exists')
  }
}
else{
  alert('form is invalid')
}
 }

}