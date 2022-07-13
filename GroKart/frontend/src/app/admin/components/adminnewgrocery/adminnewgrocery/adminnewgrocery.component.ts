import { Router } from '@angular/router';
import { GroceryService } from 'src/app/services/grocery/grocery.service';
import { GroceryCard } from 'src/app/grocery/models/grocerdcardmodel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminnewgrocery',
  templateUrl: './adminnewgrocery.component.html',
  styleUrls: ['./adminnewgrocery.component.css']
})
export class AdminnewgroceryComponent implements OnInit {
Grocery?:GroceryCard=new GroceryCard();
newgro:any=[];
  constructor(private groservice:GroceryService,private router:Router) { }

  ngOnInit(): void {
  }
  submit(newGroceryform){
    console.log(newGroceryform.value);
this.groservice.addnewgrocery(newGroceryform.value).subscribe(
  (val)=>{console.log(val);
  this.newgro=val;
if(this.newgro.acknowledged==true){
  this.router.navigateByUrl("/admingrocery")
}},
  (err)=>console.log(err),
  ()=>console.log("db done")
)
  }
}
