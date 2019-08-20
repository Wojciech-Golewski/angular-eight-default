import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [ShopListComponent],
  imports: [
    ShopRoutingModule,
    CommonModule
  ]
})
export class ShopModule { }
