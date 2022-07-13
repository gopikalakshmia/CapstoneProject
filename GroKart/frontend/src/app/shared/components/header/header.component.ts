import { WishlistService } from 'src/app/services/wishlist/wishlist.service';
import { LoginModule } from './../../../login/login.module';
import { CartService } from './../../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginButtonVisibility: boolean = true;
  usercart: any = [];
  userwishlistt: any = [];
  cartCount: number = 0;
  wishlistcount: number = 0;
  constructor(public router: Router, private cartservice: CartService,private wishlistservice:WishlistService) {}

  ngOnInit(): void {
    console.log(localStorage.getItem('currentUser').length);

    if (localStorage.getItem('currentUser').length != null) {
      this.loginButtonVisibility = false;

      //cart items quantity
      let userid = localStorage.getItem('currentUser');
      this.cartservice.findCartByUserId(userid).subscribe(
        (val) => {
          this.usercart = val;
          this.cartCount = this.usercart.length;
        },
        (err) => console.log(err),
        () => {
          console.log('db working correctly');
          //console.log(this.carts)
        }
      );

      //wishlistitemQuantity
      this.wishlistservice.findWishlistByUserId(userid).subscribe(
        (val) => {
          this.userwishlistt = val;
          this.wishlistcount = this.userwishlistt.length;
        },
        (err) => console.log(err),
        () => {
          console.log('db working correctly');
          //console.log(this.carts)
        }
      );
    }
    console.log(this.loginButtonVisibility);
  }
  login() {
    this.router.navigateByUrl('/signUp');
  }
  logout() {
    localStorage.removeItem('currentUser');
    console.log(localStorage.getItem('currentUser'));
    this.loginButtonVisibility = true;
  }
  //cart
  gotocart() {
    console.log(localStorage.getItem('currentUser'));
    if (localStorage.getItem('currentUser') != null) {
      this.router.navigateByUrl('/cart');
    } else {
      this.router.navigateByUrl('/signUp');
    }
  }
  //wishlist
  gotowishlist() {
    console.log(localStorage.getItem('currentUser'));
    if (localStorage.getItem('currentUser') != null) {
      this.router.navigateByUrl('/wishlist');
    } else {
      this.router.navigateByUrl('/signUp');
    }
  }
//user
  gotouser() {
    console.log(localStorage.getItem('currentUser'));
    if (localStorage.getItem('currentUser') != null) {
      this.router.navigateByUrl('/user');
    } else {
      this.router.navigateByUrl('/signUp');
    }
  }
 
}
