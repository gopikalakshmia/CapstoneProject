import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  findCartByUserId(userid){
    let val=JSON.parse(userid)
    return this.http.put("http://54.89.205.96:9091/api/grocery/findCartByUserId",val);
  }
updateQuantityCart(cart){
  return this.http.put("http://54.89.205.96:9091/api/grocery/updateQuantityCart",cart);
}
  
}
