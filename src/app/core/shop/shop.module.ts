import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopMainComponent } from './components/shop-main/shop-main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShopListComponent, ShopMainComponent],
  imports: [
    ShopRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: [ShopMainComponent]
})
export class ShopModule { }
