import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainModule,
    SharedModule
  ],
  exports: [
    MainModule,
    SharedModule
  ]
})
export class CoreModule { }
