import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSucessComponent } from './components/order-sucess/order-sucess.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';
import { GurdService } from '../admin/services/gurd.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSucessComponent,
    MyOrdersComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
    {path:'products', component:ProductsComponent},
    {path:'shoping-cart', component:ShoppingCartComponent},
    {path:'check-out', component:CheckOutComponent, canActivate: [GurdService]},
    {path:'order-sucess',component:OrderSucessComponent,canActivate: [GurdService]},
    {path:'my/orders',component:MyOrdersComponent,canActivate: [GurdService]},])
  ]
})

export class ShoppingModule { }
