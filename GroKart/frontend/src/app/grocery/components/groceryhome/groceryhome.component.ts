
import { Component, OnInit } from '@angular/core';
import { GroceryCard } from '../../models/grocerdcardmodel';

@Component({
  selector: 'app-groceryhome',
  templateUrl: './groceryhome.component.html',
  styleUrls: ['./groceryhome.component.css']
})
export class GroceryhomeComponent implements OnInit {

  groceries?:GroceryCard[];
  constructor() { }

  ngOnInit(): void {
    this.groceries=[];
      let gro1=new GroceryCard();
      gro1.id=1;
      gro1.title="Roma Tomato";
      gro1.desc=".22 each";
      gro1.price=.99;
      gro1.imgsrc="https://www.lipmanfamilyfarms.com/wp-content/uploads/2020/09/Roma-Tomato-hero@2x-1480x1330.png";
      this.groceries.push(gro1);

      let gro2=new GroceryCard();
      gro2.id=2;
      gro2.title="Cilantro";
      gro2.desc="1 bunch";
      gro2.price=.50;
      gro2.imgsrc="https://healthiersteps.com/wp-content/uploads/2021/11/cilantro-bunch.jpg";
      this.groceries.push(gro2);
  }

}
