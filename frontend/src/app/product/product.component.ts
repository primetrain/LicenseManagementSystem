import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../Resource/Product';
import { Module } from '../Resource/Module';
import { PlanService } from '../_services/plan.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Plan } from '../Resource/Plan';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  constructor(private planService: PlanService,
              private productService: ProductService,
              private router: Router){  }

  currentPlan: Plan = null;

  ngOnInit(): void {
    // this.productService
    // .getAll()
    // .subscribe((products: Product[])=>{    
    //   this.products = products
    //   this.fetchModules()
    // })

    this.planService.subject.current
    .subscribe((plan: Plan)=>{
      this.currentPlan = plan
      plan.getRelationArray(Product, 'products')
      .subscribe((products: Product[])=>{
        this.products = products
      })
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

  selectedproduct(product: Product){
    this.productService.subject.publish = product
    this.router.navigate(["modules"])
  }

}
