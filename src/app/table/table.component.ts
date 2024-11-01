import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input()
  message: any = {};
  @Input()
  index: number = -1;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();
  
  
  onDelete():void {
    this.delete.emit(this.index);
  }
}
