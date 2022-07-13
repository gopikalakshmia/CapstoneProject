import { Router } from '@angular/router';
import { AdminuserService } from './../../../services/admin/adminuser.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {
users:any;
result:any;
  constructor(private adminuser:AdminuserService,private router:Router) { }

  ngOnInit(): void {
this.users=[];
    this.adminuser.findAllUsers().subscribe(
      (val)=>{console.log(val);
      this.users=val;},
      (err)=>console.log(err),
      ()=>{console.log("db done");}
    )
  }
  edit(user){
console.log(user);
let id:string=user._id;
console.log(id);
this.router.navigate(['/adminuser', id]);
  }
  delete(user){
    this.adminuser.deleteUser(user).subscribe(
      (val)=>{console.log(val)
      this.result=val;
    if(this.result.deletedCount>1){
      window.location.reload();
    }},
      (err)=>console.log(err),
      ()=>console.log("db done")
    )
  }
  addnewuser(){
    console.log("navigate");
    this.router.navigateByUrl('/signIn');
  }

}
