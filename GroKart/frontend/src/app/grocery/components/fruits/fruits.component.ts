import { GroceryService } from 'src/app/services/grocery/grocery.service';
import { GroceryCard } from 'src/app/grocery/models/grocerdcardmodel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  groceries?: GroceryCard[];
  fruits?: GroceryCard[];
  constructor(private groService:GroceryService) { }

  ngOnInit(): void {
    this.groceries = [];
    this.groService.getGrocery().subscribe(
      (gro) => {
        
        this.groceries = gro;
      this.fruits=this.groceries.filter(v=>v.category=="fru");
      
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
