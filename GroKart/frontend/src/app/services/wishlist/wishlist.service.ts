import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  addtoWishlist(wishlist){
    return this.http.post("http://localhost:9090/api/grocery/addtoWishlist",wishlist)
  }
  findWishlistByUserIdgroid(wishlist){
  
    return this.http.put("http://localhost:9090/api/grocery/findWishlistByUserIdgroid",wishlist);
  }
  findWishlistByUserId(userid){
    let val=JSON.parse(userid)
    return this.http.put("http://localhost:9090/api/grocery/findWishlistByUserId",val);
  }
  removefromWishlist(wishlist){
  
    return this.http.put("http://localhost:9090/api/grocery/removefromWishlist",wishlist);
  }
}
