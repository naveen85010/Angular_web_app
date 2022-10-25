import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../../../shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // homepro$:Observable<any>
  // constructor(private productService:ProductsService) { 
  //  this.homepro$=this.productService.getAll();
  // }


  ngOnInit(): void {
  }

}
