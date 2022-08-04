import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminuserService {
  constructor(private http: HttpClient) {}
  findAllUsers() {
    return this.http.get('http://44.204.34.73:9091/api/grocery/findAllUsers');
  }
  deleteUser(user) {
    return this.http.put('http://44.204.34.73:9091/api/grocery/deleteuser', user);
  }
  findaUser(userid) {
    return this.http.put('http://44.204.34.73:9091/api/grocery/findaUser', userid);
  }
  updateUser(user) {
   
    return this.http.put('http://44.204.34.73:9091/api/grocery/updateUser', user);
  }


}
