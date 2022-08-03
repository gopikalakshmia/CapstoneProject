import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import {userModel} from 'src/app/login/models/usermodel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
User?:userModel=new userModel();
newuser:any=[];
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  submit(signinform){
   console.log(signinform.value);

  this.userservice.adduser(signinform.value).subscribe(
    val=>{console.log(val);
      this.newuser=val;
      if(this.newuser.acknowledged==true)
      this.router.navigateByUrl("/user")
    }
    ,
    (err)=>console.log(err),
    ()=>{console.log("db working ");window.location.reload();}
  );
  signinform.reset();
  }

}
