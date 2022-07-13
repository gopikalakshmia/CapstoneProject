import { WishlistService } from './../../../services/wishlist/wishlist.service';
import { wishlistmodel } from './../../../login/models/wishlistmodel';
import { CartService } from './../../../services/cart/cart.service';
import { UserService } from './../../../services/user/user.service';
import { cartmodel } from './../../../login/models/cartmodel';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GroceryService } from 'src/app/services/grocery/grocery.service';
import { GroceryCard } from '../../models/grocerdcardmodel';

@Component({
  selector: 'app-groceryhome',
  templateUrl: './groceryhome.component.html',
  styleUrls: ['./groceryhome.component.css'],
})
export class GroceryhomeComponent implements OnInit {
  grocery:any=[];
   groId:string;
   cart:cartmodel=new cartmodel();
   quantity:number=0;
   usercart:any=[];
   wishlist:wishlistmodel=new wishlistmodel();
   addWishlist:boolean=true;
   wishresult:any=[];
   
  constructor(private route:ActivatedRoute,private groService:GroceryService,private router:Router,
    private userservice:UserService,private cartservice:CartService,private wishlistservice:WishlistService) {}

  ngOnInit(): void {
    this.usercart=[];
   this.groId=this.route.snapshot.paramMap.get('id');
   let obj={id:this.groId};
   this.groService.getSingleGrocery(obj).subscribe(
    (val)=>{this.grocery=val[0];},
    (err)=>console.log(err),
    ()=>{console.log("db working correctly")}
   )
   //quantity for loggedinuser

   if(localStorage.getItem('currentUser')!=null){
    let userid = localStorage.getItem('currentUser');
    this.cartservice.findCartByUserId(userid).subscribe(
      (val) => {
        console.log(val);
        this.usercart=val;
        this.usercart.filter(res=>{
          if(res.groid==this.groId){
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
    this.wishlist.groid=this.groId;
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
      this.cart.groid=this.groId;
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
this.wishlist.groid=this.groId;
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
    this.wishlist.groid=this.groId;
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
