import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainModule,
    SharedModule,
    ShopModule
  ],
  exports: [
    MainModule,
    SharedModule,
    ShopModule
  ]
})
export class CoreModule { }
