import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import {DataTableModule} from 'primeng/datatable';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path: "client",
    component: ClientComponent
  }
];
@NgModule({
  declarations: [
    ClientComponent,
    
  ],
  imports: [RouterModule.forRoot(routes),
  DataTableModule,
  FormsModule,
  CommonModule
  ],
  exports: [RouterModule]
})
export class ClientModule { }