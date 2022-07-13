import { GroceryCard } from 'src/app/grocery/models/grocerdcardmodel';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidingbar',
  templateUrl: './slidingbar.component.html',
  styleUrls: ['./slidingbar.component.css']
})
export class SlidingbarComponent implements OnInit {

  constructor(public router:Router) { }
@Input()  groceries?: GroceryCard[];
@Input() category?:string;
  ngOnInit(): void {
  }
  gotoViewMore(category){
    
    let path="/"+category;
    console.log(path);
    this.router.navigateByUrl(path);
  }
}
