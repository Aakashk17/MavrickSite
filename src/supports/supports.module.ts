import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CollaborationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SupportsModule { }
