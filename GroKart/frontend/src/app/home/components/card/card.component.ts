import { WishlistService } from './../../../services/wishlist/wishlist.service';
import { wishlistmodel } from './../../../login/models/wishlistmodel';
import { UserService } from 'src/app/services/user/user.service';
import { CartService } from './../../../services/cart/cart.service';
import { GroceryCard } from './../../../grocery/models/grocerdcardmodel';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cartmodel } from './../../../login/models/cartmodel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private cartservice:CartService,
    private userservice:UserService,private wishlistservice:WishlistService) { }
@Input() card:GroceryCard;
usercart:any=[];
quantity:number=0;
cart:cartmodel=new cartmodel();
wishlist:wishlistmodel=new wishlistmodel();
addWishlist:boolean=true;
wishresult:any=[];
  ngOnInit(): void {

      //quantity for loggedinuser

   if(localStorage.getItem('currentUser')!=null){
    let userid = localStorage.getItem('currentUser');
    this.cartservice.findCartByUserId(userid).subscribe(
      (val) => {
        console.log(val);
        this.usercart=val;
        this.usercart.filter(res=>{
          if(res.groid==this.card._id){
            console.log("the grocery matches "+res.quantity);
            this.quantity=res.quantity;
            this.cart._id=res._id;
          }
        })
      },
      (err) => console.log(err),
      () => {
        console.log('db working correctly');
        //console.log(this.carts)
      }
    );

    //wishlist
    this.wishlist.groid=this.card._id;
let user=JSON.parse(localStorage.getItem('currentUser'));
this.wishlist.userid=user["userid"];
    this.wishlistservice.findWishlistByUserIdgroid(this.wishlist).subscribe(
      (val)=>{this.wishresult=val;
      if(this.wishresult.length>0){
        this.addWishlist=false;
      }},
      (err)=>console.log(err),
      ()=>{console.log("db done")}
    )
   }
  }

  gotocart(){

    // console.log("in gocart");
     if(localStorage.getItem('currentUser')!=null){
      // console.log("in addtocart");
       this.cart.groid=this.card._id;
       let user=JSON.parse(localStorage.getItem('currentUser'));
       this.cart.userid=user["userid"];
       this.cart.quantity=1;
       this.quantity=1;
      // console.log(this.cart.userid);
       console.log(this.cart);
       this.userservice.addtocart(this.cart).subscribe(
         (val)=>{let result=val;
         this.cart._id=result["insertedId"]},
         (err)=>console.log(err),
         ()=>console.log("db working successfully")
       )
 
     }
     else{
       this.router.navigateByUrl("/signUp");
     }
   }
 
   increment(){
 this.quantity++;
 this.cart.quantity=this.quantity;
 console.log(this.cart);
 this.cartservice.updateQuantityCart(this.cart).subscribe(
   (val)=>console.log(val),
   (err)=>console.log(err),
   ()=>{console.log("db done")}
 )
 
   }
   decrement(){
     this.quantity--;
     this.cart.quantity=this.quantity;
 console.log(this.cart);
 this.cartservice.updateQuantityCart(this.cart).subscribe(
   (val)=>console.log(val),
   (err)=>console.log(err),
   ()=>{console.log("db done")}
 )
 
   }
   addtowishlist(){
    this.wishlist.groid=this.card._id;
    let user=JSON.parse(localStorage.getItem('currentUser'));
    this.wishlist.userid=user["userid"];
    this.wishlistservice.addtoWishlist(this.wishlist).subscribe(
      (val)=>{console.log(val)},
      (err)=>{console.log(err)},
      ()=>{console.log("db done")}
    )
    window.location.reload();
      }

      removefromwishlist(){
        this.wishlist.groid=this.card._id;
    let user=JSON.parse(localStorage.getItem('currentUser'));
    this.wishlist.userid=user["userid"];
    this.wishlistservice.removefromWishlist(this.wishlist).subscribe(
      (val)=>{console.log(val)},
      (err)=>{console.log(err)},
      ()=>{console.log("db done")}
    )
    window.location.reload();
      }
  
}
