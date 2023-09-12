import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core'

@Injectable({
providedIn:'root'
})

export class authGuard  {

  constructor(private auth:AuthService , private nav:Router){}

canActivate:CanActivateFn=()=>{

if(this.auth.loggedin()){
  return true
}else{
alert('please login')
this.nav.navigateByUrl("")
return false
}


}
 
}
