import { Component, Input } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/products-representation';

@Component({
  selector: 'app-peoduct-details',
  standalone: true,
  imports: [],
  templateUrl: './peoduct-details.component.html',
  styleUrl: './peoduct-details.component.css'
})
export class PeoductDetailsComponent {
  @Input()
  product: ProductRepresentation = {};
}
