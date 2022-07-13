import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  adduser(user) {
    return this.http.post('http://localhost:9090/api/grocery/storeUser', user);
  }
  userValidation(user){
    return this.http.put("http://localhost:9090/api/grocery/userValidation",user);
  }
  addtocart(cart){
    return this.http.post('http://localhost:9090/api/grocery/addtoCart', cart);
  }
}
