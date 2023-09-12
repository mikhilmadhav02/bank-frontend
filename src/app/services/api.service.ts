import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers:new HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseurl='https://bank-backend-0gv5.onrender.com'

  constructor(private http:HttpClient) { }



register(username:any,password:any,acno:any){
  const body= {
    username,
    password,
    acno
  }
return this.http.post(`${this.baseurl}/employee/register `,body)

}

// login
login(acno:any,pswd:any){
  const body={
    acno,
    password:pswd
  }
  return this.http.post(`${this.baseurl}/employee/login`,body)
}


// token
getoken(){
  const token = localStorage.getItem("token")
let headers = new HttpHeaders()
if(token){
  headers = headers.append("token",token)
  options.headers = headers
}
return options
}
// call for balance
getbalance(acno:any){
 
  return this.http.get(`${this.baseurl}/employee/balance/${acno}`,this.getoken())
}


// fund transfer call
fundtransfer(creditacno:any,amount:any,debitpassword:any){
  const body={
    creditacno,
    amount,
    debitpassword
  }
  return this.http.post(`${this.baseurl}/employee/transfer`,body,this.getoken())
}
// statements
statements(){
  
  return this.http.get(`${this.baseurl}/employee/statements`,this.getoken())
}

// delete account
delete(){
  return this.http.delete(`${this.baseurl}/employee/delete`,this.getoken())
}

}
