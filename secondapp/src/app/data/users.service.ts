import { Injectable } from '@angular/core';
import { EventEmitter } from 'node:stream';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() { }

  //eventEmitter = new EventEmitter<string>()

  //eventEmitter = new Subject<string>();

  emitData(data:string){

    //this.eventEmitter.emit(data)
    //this.eventEmitter.next(data)

  }
  
}
