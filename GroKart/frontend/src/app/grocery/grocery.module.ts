import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryhomeComponent } from './components/groceryhome/groceryhome.component';
import { VegetablesComponent } from './components/vegetables/vegetables.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { DiaryComponent } from './components/diary/diary.component';



@NgModule({
  declarations: [
    GroceryhomeComponent,
    VegetablesComponent,
    FruitsComponent,
    DiaryComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports:[
    GroceryhomeComponent,
    VegetablesComponent,
    FruitsComponent,
    DiaryComponent
  ]
})
export class GroceryModule { }
