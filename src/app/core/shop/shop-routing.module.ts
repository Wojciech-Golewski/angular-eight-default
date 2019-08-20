import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopListComponent } from './components/shop-list/shop-list.component';

const routes: Routes = [
    { path: '', component: ShopListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class ShopRoutingModule { }