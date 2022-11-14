import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser:any
  currentacno:any

  //redendent data store here
  userDetails:any={
    1000:{acno:1000,username:"nijin",password:123,balance:0,transaction:[]},
    1001:{acno:1001,username:"niji",password:123,balance:0,transaction:[]},
    1002:{acno:1002,username:"nij0",password:123,balance:0,transaction:[]},
    1003:{acno:1003,username:"nijoy",password:123,balance:0,transaction:[]}
  }
  constructor() { }

  register(acno:any,username:any,password:any){
       var userDetails=this.userDetails
       if(acno in userDetails){
        return false
       }
       else{
        userDetails[acno]={acno,username,password,balance:0,transaction:[]}
        return true
       }
  }

  login(acno:any,psw:any){
  

    var userDetails=this.userDetails
    
    this.currentuser=userDetails[acno]['username']

    if(acno in userDetails){
        if(psw==userDetails[acno]["password"]){
          this.currentacno=acno
         return true
        }
        else{
         alert('Incorrect password')
         return false
        }
    }
    else{
       alert('user not exists')
       return false
    }
 
   }

   deposit(acno:any,psw:any,amnt:any){
    let userDetails = this.userDetails
    //to convert amount data type from string to int
    var amount=parseInt(amnt)
    if(acno in userDetails){
      if(psw==userDetails[acno]['password']){
        userDetails[acno]['balance']+=amount
        //add deposit details in transaction array
        userDetails[acno]['transaction'].push({type:'Credit',amount})
        return userDetails[acno]['balance']
      }
      else{
        alert('incorrect password')
        return false
      }
    }
    else{
      alert('incorrect username')
      return false
    }
   }

   withdraw(acno:any,psw:any,amnt:any){
    let userDetails = this.userDetails
    //to convert amount data type from string to int
    var amount=parseInt(amnt)
    if(acno in userDetails){
      if(psw==userDetails[acno]['password']){
        if(amount<=userDetails[acno]['balance']){
        userDetails[acno]['balance']-=amount

        userDetails[acno]['transaction'].push({type:'Debit',amount})
        return userDetails[acno]['balance']
      }
      else{
        alert('insufficient balance')
        return false
      }
    }
    else{
      alert('incorrect password')
      return false
    }
    }

    else{
      alert('incorrect username')
      return false
    }
   }
   getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
   }

  }