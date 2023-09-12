import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerform=this.data.group({
  username:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z]*')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pass:['',[Validators.required,Validators.minLength(2),Validators.maxLength(5),Validators.pattern('[a-z0-9]*')]]
})

constructor(private data:FormBuilder, private api:ApiService,private nav:Router ){

}
 register(){

if(this.registerform.valid){
let username=this.registerform.value.username
let acno=this.registerform.value.acno
let pswd=this.registerform.value.pass

// register api call
this.api.register(username,pswd,acno).subscribe({next:(response:any)=>{
alert(`${response}`)
this.nav.navigateByUrl('/login')
console.log(response);

},error:(err:any)=>{
 
console.log(err);

}})

 
}else{
 alert('fill your details')
}
 }


}
