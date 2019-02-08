import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { ModuleService } from '../_services/module.service';
import { Product } from '../Resource/Product';
import { Module } from '../Resource/Module';
import { Language } from '../_services/Language';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  currentProduct: Product; 
  modules: Module[]
  constructor(private productService: ProductService, private moduleService: ModuleService) { }

  ngOnInit() {
    this.productService.subject.current
    .subscribe((product: Product)=>{
      this.currentProduct = product
      product.getRelationArray(Module, "modules")
      .subscribe((modules: Module[])=>{
        this.modules = modules
        this.fetchLanguages()
      })
    })
  }

  fetchLanguages () {
    this.modules.forEach(modul => {   
      modul.getRelationArray(Language, 'languages')
      .subscribe((languages: Language[]) => {
        modul.languages = languages
      })
    })
  }

}
