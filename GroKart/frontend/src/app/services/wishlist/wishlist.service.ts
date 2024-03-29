import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  addtoWishlist(wishlist){
    return this.http.post("http://44.204.34.73:9091/api/grocery/addtoWishlist",wishlist)
  }
  findWishlistByUserIdgroid(wishlist){
  
    return this.http.put("http://44.204.34.73:9091/api/grocery/findWishlistByUserIdgroid",wishlist);
  }
  findWishlistByUserId(userid){
    let val=JSON.parse(userid)
    return this.http.put("http://44.204.34.73:9091/api/grocery/findWishlistByUserId",val);
  }
  removefromWishlist(wishlist){
  
    return this.http.put("http://44.204.34.73:9091/api/grocery/removefromWishlist",wishlist);
  }
}
