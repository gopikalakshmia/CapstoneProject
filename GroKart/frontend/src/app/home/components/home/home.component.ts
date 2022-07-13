import { Component, OnInit } from '@angular/core';
import { GroceryService } from 'src/app/services/grocery/grocery.service';
import { GroceryCard } from 'src/app/grocery/models/grocerdcardmodel';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  groceries?: GroceryCard[];
  vegetables?: GroceryCard[];
  fruits?: GroceryCard[];
  diary?: GroceryCard[];
  category?:string;
  constructor(private groservice: GroceryService) { }

  ngOnInit(): void {
    this.groceries = [];
    this.groservice.getGrocery().subscribe(
      (gro) => {
        
        this.groceries = gro;
      this.vegetables=this.groceries.filter(v=>v.category=="veg");
      this.fruits=this.groceries.filter(v=>v.category=="fru");
      this.diary=this.groceries.filter(v=>v.category=="D");
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('groceriery items loaded');
      }
    );
  }

}
