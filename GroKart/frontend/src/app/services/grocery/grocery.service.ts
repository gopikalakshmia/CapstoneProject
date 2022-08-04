import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor( private http:HttpClient) { 
    
  }

  getGrocery():Observable<any>{
    //console.log("grocery service");
    return this.http.get("http://44.204.34.73:9091/api/grocery/findGrocery");
  }
  getSingleGrocery(id){
    //console.log(id);
    return this.http.put("http://44.204.34.73:9091/api/grocery/findaGrocery",id);
  }
  deletegro(gro){
    return this.http.put("http://44.204.34.73:9091/api/grocery/deletegro",gro);
  }
  addnewgrocery(gro){
    return this.http.post("http://44.204.34.73:9091/api/grocery/addnewgrocery",gro);
  }

  updateUser(gro) {
   
    return this.http.put('http://44.204.34.73:9091/api/grocery/updateGrocery', gro);
  }
}
