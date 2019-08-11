import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent, HomeComponent, NotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, MainComponent, HomeComponent, NotFoundComponent]
})
export class SharedModule { }
