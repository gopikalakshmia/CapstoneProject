import { Router } from '@angular/router';
import { GroceryService } from 'src/app/services/grocery/grocery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admingrocery',
  templateUrl: './admingrocery.component.html',
  styleUrls: ['./admingrocery.component.css'],
})
export class AdmingroceryComponent implements OnInit {
  groceries: any = [];
  result: any;
  constructor(private groservice: GroceryService, private router: Router) {}

  ngOnInit(): void {
    this.groservice.getGrocery().subscribe(
      (val) => {
        console.log(val);
        this.groceries = val;
      },
      (err) => console.log(err),
      () => console.log('db done')
    );
  }
  addnewgrocery() {
    this.router.navigateByUrl('/addnewgrocery');
  }
  edit(gro) {
    console.log(gro);
    let id: string = gro._id;
    console.log(id);
    this.router.navigate(['/admingrocery', id]);
  }
  delete(gro) {
    this.groservice.deletegro(gro).subscribe(
      (re) => {
        this.result = re;
        if (this.result.deletedCount > 0) {
          window.location.reload();
        }
      },
      (err) => console.log(err),
      () => console.log('db done')
    );
  }
}
