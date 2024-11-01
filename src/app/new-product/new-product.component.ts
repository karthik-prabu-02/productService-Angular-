import { Component } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';
import { ProductRepresentation } from '../services/api/models/products-representation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  product: ProductRepresentation = {};

  constructor(
    private service: ProductService,
    private router: Router
  ) {
  }

  saveProduct() {
    this.service.createProduct(this.product)
      .subscribe({
        next: (result) => {
          this.router.navigate(['products']);
        }
      });
  }
}
