import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, HomeComponent, NotFoundComponent, HeaderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AngularFontAwesomeModule,
    RouterModule
  ],
  exports: [FooterComponent, HomeComponent, NotFoundComponent, HeaderComponent]
})
export class SharedModule { }
