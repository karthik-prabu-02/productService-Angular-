import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  messages: Array<any> = [];

  constructor() { 
    this.init();
  }

  init() : void {
    this.insert({
      name : "karthik",
      email : "kat@gmail.com",
      message : "kjabsdasjdbkjbads"
    });
    this.insert({
      name : "jp",
      email : "jp@gmail.com",
      message : "lkknmdslknkjadns"
    });
    this.insert({
      name : "sree",
      email : "sree@gmail.com",
      message : "adsdsknmkldsanlknasdlkm"
    });

  }

  insert(message : {name: string, email: string, message:string}): void {
    this.messages.push(message);
  }
  getAllMessgaes() : any[] {
    return this.messages;
  }
  deleteMessage(index : number): void {
    this.messages.splice(index,1);
  }
}
