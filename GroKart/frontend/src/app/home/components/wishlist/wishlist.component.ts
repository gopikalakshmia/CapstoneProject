import { userModel } from 'src/app/login/models/usermodel';
import { wishlistmodel } from './../../../login/models/wishlistmodel';
import { GroceryService } from './../../../services/grocery/grocery.service';
import { cartmodel } from './../../../login/models/cartmodel';
import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  userwishlist: any = [];
  wishlistmod: cartmodel[];
  wishlist: wishlistmodel = new wishlistmodel();
  constructor(
    private wishlistservice: WishlistService,
    private groservice: GroceryService
  ) {}

  ngOnInit(): void {
    this.userwishlist = [];
    this.wishlistmod = [];
    let userid = localStorage.getItem('currentUser');
    console.log(userid);
    if (localStorage.getItem('currentUser') != null) {
      this.wishlistservice.findWishlistByUserId(userid).subscribe(
        (val) => {
          console.log(val);
          this.userwishlist = val;
          let i = 0;
          this.userwishlist.filter((res) => {
            let obj = { id: res.groid };
            this.wishlistmod[i] = res;
            i++;
          });

          let j = 0;
          this.wishlistmod.filter((res) => {
            let obj = { id: res.groid };
            this.groservice.getSingleGrocery(obj).subscribe((gro) => {
              //console.log(gro);
              this.wishlistmod[j].grocery = gro[0];
              j++;
            });
          });
          console.log(this.wishlistmod);
        },
        (err) => console.log(err),
        () => {
          console.log('db done');
        }
      );
    }
  }

    //remove from wishlist

    removefromwishlist(groid){
      this.wishlist.groid=groid;
  let user=JSON.parse(localStorage.getItem('currentUser'));
  this.wishlist.userid=user["userid"];
  this.wishlistservice.removefromWishlist(this.wishlist).subscribe(
    (val)=>{console.log(val)},
    (err)=>{console.log(err)},
    ()=>{console.log("db done")}
  )
  //refresh page
  window.location.reload();
    }
}
