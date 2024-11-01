import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/products-representation';
import { PeoductDetailsComponent } from "../peoduct-details/peoduct-details.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [PeoductDetailsComponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnInit{
  products: ProductRepresentation[] = [];
  constructor(private service: ProductService) {

  }
  
  
  
  ngOnInit(): void {
/*    //post data
    const product: ProductRepresentation = {
      title: "title1",
      description: "desc1",
      price: 12,
      category: "any",
      image:"http://some-image.jpg"
    }
    this.service.createProduct(product)
      .subscribe({
        next: (result: ProductRepresentation):void=>{
          console.log(result);
          
        },
        error: (error: HttpErrorResponse): void => {
          if(error instanceof ErrorEvent) {
            console.error(`An error occured:`);
          } else {
            // server side error
            console.error(`server returned status code ${error.status} , error message: ${error.message}`);
            
          }
        }
      });  
*/  
    
//    get request logic
    this.service.getAllProductsWithLimit()
      .subscribe({
        next: (data) => {
          console.log(data);
          this.products = data;
          
        }
      }); 
  }

}
