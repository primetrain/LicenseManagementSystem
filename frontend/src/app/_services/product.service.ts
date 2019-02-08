import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal';
import { Product } from '../Resource/Product';
import { DataExchange } from './data.exchange';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends RestService<Product> {
  constructor(injector: Injector) { 
    super(Product, 'products', injector)
  }

  s = new DataExchange<Product>();
  get subject (){
    return this.s;
  }
  
}
