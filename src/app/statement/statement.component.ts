import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import jspdf from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

transactions:any=[]
searchkey:any=""


constructor(private api:ApiService){}

ngOnInit(): void {
  this.api.statements().subscribe({next:(response:any)=>{
    console.log(response);
    
this.transactions = response
console.log(this.transactions);

  },error:(err:any)=>{
console.log(err);

  }})
}


// pdf generatre
generatepdf(){
  const pdf = new jspdf()
  let table_head=['transaction_type','debitacno','creditacno','amount']
  let table_body:any=[]
  pdf.setFontSize(16)
  pdf.text("All Transactions",10,10)
  pdf.setFontSize(12)

  for(let element of this.transactions){
    let temp =[element.transaction_type,element.debitacno,element.creditacno,element.amount]
    table_body.push(temp)
  }
(pdf as any).autoTable(table_head,table_body)

pdf.output('dataurlnewwindow')
pdf.save('bank_statement_pdf')



}


}
