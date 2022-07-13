import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { SlidingbarComponent } from './components/slidingbar/slidingbar.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    CardComponent,
    SlidingbarComponent,
    CartComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    MenuComponent,
    CardComponent,
    SlidingbarComponent,
    CartComponent,
    WishlistComponent
  ]
})
export class HomeModule { }
