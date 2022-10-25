import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/products.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
products$:Observable<any>;
productsRef:AngularFireList<any>;
products:{title:string}[];
filteredProducts:any[];
suscription:Subscription; 

  constructor(private productsService :ProductsService) { 
  this.productsRef=this.productsService.firlist();
  this.products$=this.productsRef.snapshotChanges().pipe(
    map(changes=>
      changes.map(c=>({key:c.payload.key, ...c.payload.val()}))
      )
  );
  this.suscription=this.products$.subscribe(products=>this.filteredProducts=this.products=products);
  console.log(this.products);
   
  }

  deleter(key ){
    console.log(key);
    this.productsRef.remove(key);
    
  }
  filter(query:string){
    this.filteredProducts=(query)?
    this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):
    this.products;
    console.log(query);
  }

  ngOnDestroy(){
  this.suscription.unsubscribe();
  }
  ngOnInit(): void {
  }

}
