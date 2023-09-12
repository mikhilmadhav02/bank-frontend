import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loading:boolean=false

loginform=this.data.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-z0-9]*')]]
})


constructor(private data:FormBuilder,private api:ApiService,private nav:Router){}

login(){
  this.loading=true
  if(this.loginform.valid){
let acno=this.loginform.value.acno
let pswd= this.loginform.value.pswd

this.api.login(acno,pswd).subscribe({next:(res:any)=>{
  const {response,token} = res
  localStorage.setItem("loginacno",response.acno)
  localStorage.setItem("token",token)
  console.log(res.username);
  localStorage.setItem("loginuser",response.username)
setTimeout(()=>{
  this.loading=false
  alert(`welcome, ${response.username}`)
 
  this.nav.navigateByUrl('/dashboard')
},1000)


},error:(err:any)=>{
  this.loading=false
  alert(err.error)
console.log(err);

}})



  }else{
    this.loading=false
    alert('enter valid details')
  }
}

}
