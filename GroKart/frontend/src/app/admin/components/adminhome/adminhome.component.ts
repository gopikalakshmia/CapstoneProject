import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  user() {
    console.log(localStorage.getItem('currentUser'));
    if (localStorage.getItem('currentUser') != null) {
      this.router.navigateByUrl('/adminuser');
    } else {
      this.router.navigateByUrl('/signUp');
    }
  }

  grocery() {
    console.log("grocery");
    if (localStorage.getItem('currentUser') != null) {
      this.router.navigateByUrl('/admingrocery');
    } else {
      this.router.navigateByUrl('/signUp');
    }
  }
}
