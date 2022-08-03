import { GroceryService } from './../../../services/grocery/grocery.service';
import { CartService } from './../../../services/cart/cart.service';
import { cartmodel } from './../../../login/models/cartmodel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  usercart: any = [];
  cart: cartmodel = new cartmodel();
  cartmod:cartmodel[];
  grocart: any;
  checkoutprice:number=0;
  constructor(
    private cartservice: CartService,
    private groservice: GroceryService
  ) {}

  ngOnInit(): void {
    this.usercart = [];
    this.cartmod=[];
    let userid = localStorage.getItem('currentUser');
    console.log(userid);
    if (localStorage.getItem('currentUser') != null) {
      this.cartservice.findCartByUserId(userid).subscribe(
        (val) => {
          //console.log(val);
          this.usercart = val;
          let i=0;
          this.usercart.filter((res) => {
            let obj = { id: res.groid };
            this.cartmod[i]=res;
            i++;
          });

          let j=0;
          let add=0;
          this.cartmod.filter(res=>{
            let obj={id:res.groid};
            let q:number= (res.quantity);
            let p:number;
            this.groservice.getSingleGrocery(obj).subscribe(
              (gro)=>{//console.log(gro);
              this.cartmod[j].grocery=gro[0];
            p=this.cartmod[j].grocery.price;
            let v:string=(p*q).toFixed(2);
            this.checkoutprice=this.checkoutprice+parseFloat(v);
            // console.log(p+","+q);
            //   console.log("sum" +(p*q).toFixed(2));
             //console.log("price" +this.checkoutprice);
            j++;}
            )
           
          })
          console.log(this.cartmod);
        },
        (err) => console.log(err),
        () => {
          console.log('db working correctly');
          //console.log(this.carts)
         
          
        }
      );

     //getting grocery model
    }
  }

  decrement(cart,price){
    cart.quantity--;
    this.checkoutprice=this.checkoutprice-price;
    this.cart.quantity=cart.quantity;
    console.log(this.cart);
    this.cartservice.updateQuantityCart(cart).subscribe(
      (val)=>console.log(val),
      (err)=>console.log(err),
      ()=>{console.log("db done")}
    )
  }
  increment(cart,price){
    cart.quantity++;
    this.checkoutprice=this.checkoutprice+ +price;
    this.cart.quantity=cart.quantity;
    console.log(this.cart);
    this.cartservice.updateQuantityCart(cart).subscribe(
      (val)=>console.log(val),
      (err)=>console.log(err),
      ()=>{console.log("db done")}
    )
  }


}
