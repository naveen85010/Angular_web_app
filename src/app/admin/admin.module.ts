import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';




@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'admin/products',component:AdminProductsComponent },
      {path:'admin/orders',component:AdminOrdersComponent},
      {path:'admin/products/new',component:ProductFormComponent },
    ])

  ],
  providers:[
    
  ]
})
export class AdminModule { }
