import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$:Observable<any>;

  constructor(public categoryService:CategoryService,
    private productsService:ProductsService,
    private router:Router) { 
   this.categories$=categoryService.getCategories();
  }

save(product){
  this.productsService.create(product);
  this.router.navigate(['/admin/products']);
}

  ngOnInit(): void {
  }

}
