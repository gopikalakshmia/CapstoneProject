import { GroceryService } from 'src/app/services/grocery/grocery.service';
import { GroceryCard } from 'src/app/grocery/models/grocerdcardmodel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  groceries?: GroceryCard[];
  vegetables?: GroceryCard[];
  constructor(private groService:GroceryService) { }

  ngOnInit(): void {
    this.groceries = [];
    this.groService.getGrocery().subscribe(
      (gro) => {
        
        this.groceries = gro;
      this.vegetables=this.groceries.filter(v=>v.category=="veg");
      
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
