import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryhomeComponent } from './components/groceryhome/groceryhome.component';



@NgModule({
  declarations: [
    GroceryhomeComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports:[
    GroceryhomeComponent
  ]
})
export class GroceryModule { }
