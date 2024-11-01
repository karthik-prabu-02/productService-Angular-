import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableComponent } from '../table/table.component';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name : string = "";
  email : string = "";
  message : string = "";
  isSubmitted: boolean = false;
  messages: Array<any> = [];
  // private service: TableService = inject(TableService);  // -> PROPERTY INJECTION
  constructor(private service: TableService) {
    this.messages = this.service.getAllMessgaes();
    this.isSubmitted = this.messages.length > 0;
  }



  onSubmit():void {
    this.isSubmitted = true;
    this.service.insert({
      "name" : this.name,
      "email": this.email,
      "message" : this.message
    });
    console.log(this.messages);
  }
  onChangingName() : void {
    // console.log(this.name);
  }

  deleteMessage(index: number):void {
    this.service.deleteMessage(index);

  }
}
