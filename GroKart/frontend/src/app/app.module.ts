import { GroceryModule } from './grocery/grocery.module';
import { HomeComponent } from './home/components/home/home.component';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { GroceryhomeComponent } from './grocery/components/groceryhome/groceryhome.component';
const routes=[
  {path:'',component:HomeComponent},
  {path:'grocery',component:GroceryhomeComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SharedModule,
    RouterModule.forRoot(routes),
    GroceryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
