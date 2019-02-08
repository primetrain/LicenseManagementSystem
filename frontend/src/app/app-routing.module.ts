import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PlanComponent } from './plan/plan.component';
import { ModuleComponent } from './module/module.component';

const routes: Routes = [
  {
    path: "",
    component: PlanComponent,
    pathMatch: 'full'
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "modules",
    component: ModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
