import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../Resource/Product';
import { Module } from '../Resource/Module';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService){  }

  ngOnInit(): void {
    this.productService
    .getAll()
    .subscribe((products: Product[])=>{    
      this.products = products
      this.fetchModules()
    })
  }

  fetchModules () {
    this.products.forEach(product => {   
      product.getRelationArray(Module, 'modules')
      .subscribe((modules: Module[]) => {
        product.modules = modules
      })
    })
    
  }

}
