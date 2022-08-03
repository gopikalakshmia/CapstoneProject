import { GroceryService } from 'src/app/services/grocery/grocery.service';
import { GroceryCard } from './../../models/grocerdcardmodel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  groceries?: GroceryCard[];
  diary?: GroceryCard[];
  constructor(private groService:GroceryService) { }

  ngOnInit(): void {
    this.groceries = [];
    this.groService.getGrocery().subscribe(
      (gro) => {
        
        this.groceries = gro;
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
