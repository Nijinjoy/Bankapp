import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any
  acno:any
  psw:any

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
  var user=this.user
  var acno=this.acno
  var psw= this.psw

  const result = this.ds.register(acno,user,psw)
if(result){
alert('Successfully registered')
this.router.navigateByUrl('')//redirection step to login page
}
else{
  alert('User already exists')
}
}
  
}
