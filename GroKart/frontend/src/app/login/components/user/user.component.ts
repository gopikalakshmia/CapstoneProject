import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
   
  }
 //cart
 gotocart() {
  console.log(localStorage.getItem('currentUser'));
  if (localStorage.getItem('currentUser') != null) {
    this.router.navigateByUrl('/cart');
  } else {
    this.router.navigateByUrl('/signUp');
  }
}
//wishlist
gotowishlist() {
  console.log(localStorage.getItem('currentUser'));
  if (localStorage.getItem('currentUser') != null) {
    this.router.navigateByUrl('/wishlist');
  } else {
    this.router.navigateByUrl('/signUp');
  }
}
}
