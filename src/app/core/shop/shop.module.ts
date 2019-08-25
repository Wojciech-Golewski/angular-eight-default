import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopMainComponent } from './components/shop-main/shop-main.component';

@NgModule({
  declarations: [ShopListComponent, ShopMainComponent],
  imports: [
    ShopRoutingModule,
    CommonModule
  ],
  exports: [ShopMainComponent]
})
export class ShopModule { }
