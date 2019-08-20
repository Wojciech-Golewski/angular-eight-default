import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { FilterAndSortComponent } from './components/filter-and-sort/filter-and-sort.component';

@NgModule({
  declarations: [FooterComponent, NotFoundComponent, HeaderComponent, FilterAndSortComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AngularFontAwesomeModule,
    RouterModule
  ],
  exports: [FooterComponent, NotFoundComponent, HeaderComponent]
})
export class SharedModule { }
