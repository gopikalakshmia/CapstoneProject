import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  adduser(user) {
    return this.http.post('http://44.204.34.73:9091/api/grocery/storeUser', user);
  }
  userValidation(user){
    return this.http.put("http://44.204.34.73:9091/api/grocery/userValidation",user);
  }
  addtocart(cart){
    return this.http.post('http://44.204.34.73:9091/api/grocery/addtoCart', cart);
  }
}
