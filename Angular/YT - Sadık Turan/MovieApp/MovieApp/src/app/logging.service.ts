import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  messages: string[] = [];

  add(msg: string){
    this.messages.push(msg);
  }

  clear(){
    this.messages = [];
  }

  constructor() { }
}
