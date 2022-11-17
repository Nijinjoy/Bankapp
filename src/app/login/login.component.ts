import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
 
  constructor(private router:Router,private ds:DataService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
    //create login form model
    userLogin=this.formBuilder.group({
      acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
      psw :['',[Validators.required,Validators.pattern('[a-zA-Z0-9\*_.]+')]]
    })
   

  login(){
     var acno=this.userLogin.value.acno
     var psw=this.userLogin.value.psw
    if(this.userLogin.valid){
      const result=this.ds.login(acno,psw)
      if(result){
        alert('login sucess')
        this.router.navigateByUrl('dashboard')
      }
    }
    else{
        alert('invalid form')
      }
    }
  }
