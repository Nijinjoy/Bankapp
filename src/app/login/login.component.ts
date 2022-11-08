import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acno:any
  psw:any

  aim= "Your Perfect Banking Partner"
data='enter account number'
  userDetails:any={
    1000:{acno:1000,username:"nijin",password:123,balance:0},
    1001:{acno:1001,username:"niji",password:123,balance:0},
    1002:{acno:1002,username:"nij0",password:123,balance:0},
    1003:{acno:1003,username:"nijoy",password:123,balance:0}
  }
  constructor() { }

  ngOnInit(): void {
  }

// login(){
//    var acno=this.acno
//    var psw = this.psw
//    var userDetails=this.userDetails
  
//    if(acno in userDetails){
//        if(psw==userDetails[acno]['password']){
//         alert('Login success')
//        }
//        else{
//         alert('Incorrect password')
//        }
//    }
//    else{
//       alert('user not exists')
//    }

// }

login(a:any,b:any){
  var acno=a.value
  var psw = b.value
  var userDetails=this.userDetails
 
  if(acno in userDetails){
      if(psw==userDetails[acno]['password']){
       alert('Login success')
      }
      else{
       alert('Incorrect password')
      }
  }
  else{
     alert('user not exists')
  }

}

// acnoChange(event:any){
//   this.acno=event.target.value
// }
// pswChange(event:any){
//   this.psw=event.target.value
// }

}
