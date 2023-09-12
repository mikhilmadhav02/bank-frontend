import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Token } from '@angular/compiler';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user:any
balance:any
offcanvas:boolean=false
error:any
transfermessage:any
transfererror:any
message:boolean=false
messageerr:boolean=false
transferbutton:boolean=true
response:any
modal:boolean=true


// reactive form
transferform = this.react.group({
  accnumber:['',[Validators.required,Validators.pattern('[0-9]*')]],
  amount:['',[Validators.required,Validators.maxLength(6),Validators.pattern('[0-9]*')]],
  password:['',[Validators.required,Validators.pattern('[a-z0-9]*')]]
  })

constructor(private data:ApiService,private react:FormBuilder,private nav:Router){}

ngOnInit(): void {
  this.user=localStorage.getItem("loginuser") 
}

// mini statement
ministatement(){
  this.nav.navigateByUrl('/statement')
}

fundtransfer(){
  if(this.transferform.valid){
const acc=this.transferform.value.accnumber
const amount=this.transferform.value.amount
const pass=this.transferform.value.password
this.data.fundtransfer(acc,amount,pass).subscribe({next:(response:any)=>{
  this.transferbutton=false
  this.message=true
this.messageerr=false

console.log(response);
this.transfermessage = response
setTimeout(()=>{
  this.transferform.reset()
  this.message=false
  this.transferbutton=true
},6000)


},error:(err:any)=>{
  this.message=false
  this.messageerr=true
  this.transferbutton=false
  console.log(err);
  this.transfererror= err.error
  setTimeout(()=>{
    this.transferform.reset()
    this.messageerr=false
    this.transferbutton=true
  },6000)
  
}})



  }else{
    alert('invalid details')
  }
}
// cancel button
cancel(){
  this.transferform.reset()
  this.messageerr=false
  this.message=false
}

// balance enquiry
getbalance(){
  this.offcanvas=true
  const acno = localStorage.getItem("loginacno")
 this.data.getbalance(acno).subscribe({next:(response:any)=>{
  console.log(`balance= ${response}`);
this.balance = response


},error:(err:any)=>{
  this.offcanvas=false
  alert(err.error)
console.log(err.error);

}})
}

  deleteaccount(){
    this.data.delete().subscribe({next:(res:any)=>{

      alert(res)
      this.logout()
 

console.log(res);

    },error:(err:any)=>{
console.log(`error= ${err}`);

    }})
  }

// logout()
logout(){
  localStorage.removeItem("loginuser")
  localStorage.removeItem("loginacno")
  localStorage.removeItem("token")

  this.nav.navigateByUrl('/login')
}

}
