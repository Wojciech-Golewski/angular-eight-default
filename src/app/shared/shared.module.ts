import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, MainComponent, HomeComponent]
})
export class SharedModule { }
