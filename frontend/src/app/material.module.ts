import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule
  ]
})
export class MaterialModule { }
