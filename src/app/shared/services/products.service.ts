import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db:AngularFireDatabase) { }

  firlist(){
return this.db.list('/products');
  }
  create(product){
    return this.db.list('/products').push(product)
  }

  getAll(){
    return this.db.list('/products').valueChanges();
    
  }

  
}

