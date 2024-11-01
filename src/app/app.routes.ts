import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';

export const routes: Routes = [
    {path: "",component:HomeComponent},
    {path: "about",component:AboutComponent},
    {path: "about/:username",component:AboutComponent}, //pathvariable
    {path: "products",component:ProductsComponent},
    {path: "new-products",component:NewProductComponent},

];
