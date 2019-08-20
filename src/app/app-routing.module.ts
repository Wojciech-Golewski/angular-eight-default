import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/main/components/home/home.component';
import { NotFoundComponent } from './core/shared/components/not-found/not-found.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', loadChildren: () => import(`./core/shop/shop.module`).then(a => a.ShopModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
