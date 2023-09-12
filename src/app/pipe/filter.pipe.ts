import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 transform(transactions:any[],searchkey:string,name:string): any[] {
   const result:any=[]
if(!transactions || searchkey=="" || name==""){
return transactions
}else{
transactions.forEach((item:any)=>{
if(item[name].trim().toLowerCase().includes(searchkey.trim().toLowerCase())){
  result.push(item)
}
})
}

   return result
 }

}
