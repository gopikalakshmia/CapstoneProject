import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    MenuComponent,
    CardComponent
  ]
})
export class HomeModule { }
