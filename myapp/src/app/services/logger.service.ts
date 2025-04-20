import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {


  message(mes:string,data?:any){

    console.log(mes,"this is data",data||"no data provided")
  }

  error(mes:string){

    console.log(mes,"this is error message")
  }
  constructor() { }
}
