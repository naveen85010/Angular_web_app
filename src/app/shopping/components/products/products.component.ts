import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../shared/services/category.service';
import { ProductsService } from '../../../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
Products$:Observable<any>
categories$:Observable<any>
  constructor(route:ActivatedRoute,private productService:ProductsService,private categoryService:CategoryService) { 
    this.Products$=productService.getAll();
    this.categories$=categoryService.getCategories();

    
  }

  ngOnInit(): void {
  }

}
