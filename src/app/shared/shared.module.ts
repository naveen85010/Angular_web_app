import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { UserService } from './services/user.service';
import { ProductsService } from './services/products.service';
import { MessagingService } from './services/messaging.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AuthService,
    CategoryService,
    UserService,
    ProductsService,
    MessagingService
  ]
})
export class SharedModule { }
