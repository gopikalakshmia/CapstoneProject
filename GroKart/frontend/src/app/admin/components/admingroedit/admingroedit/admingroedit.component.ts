import { FormGroup, FormControl } from '@angular/forms';
import { GroceryService } from 'src/app/services/grocery/grocery.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admingroedit',
  templateUrl: './admingroedit.component.html',
  styleUrls: ['./admingroedit.component.css']
})
export class AdmingroeditComponent implements OnInit {
  groForm: FormGroup;
  gro: any;
  updatedGro: any = [];
  constructor(
    private activerouter: ActivatedRoute,
    private groservice: GroceryService,
    private route: Router
  ) {
    this.updatedGro = [];
    let id = this.activerouter.snapshot.paramMap.get('id');
    console.log(id);
    let obj = { id: id };
    this.groservice.getSingleGrocery(obj).subscribe(
      (res) => {
       
        this.gro = res[0];
        //console.log(this.gro);
        this.groForm = new FormGroup({
          title: new FormControl(this.gro.title),
          desc: new FormControl(this.gro.desc),
          price: new FormControl(this.gro.price),
          imgsrc: new FormControl(this.gro.imgsrc),
          category:new FormControl(this.gro.category)
        });
      },
      (err) => console.log(err),
      () => console.log('db done')
    );
   }

  ngOnInit(): void {
  }
  onSubmit(){

    this.updatedGro = this.groForm.value;
    this.updatedGro._id = this.activerouter.snapshot.paramMap.get('id');
    console.log(this.updatedGro);

    this.groservice.updateUser(this.updatedGro).subscribe(
      (val) => {
        let result=val;
      
        if(result['modifiedCount']>0)
        this.route.navigateByUrl('/admingrocery');
      },
      (err) => console.log(err),
      () => console.log('db done')
    );
  }
}
