import { userModel } from 'src/app/login/models/usermodel';
import { UserService } from './../../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
 user:any=[];

  constructor(public router: Router,private userservice:UserService) {}

  ngOnInit(): void {}
  //form submittion
  Submit(signupform) {
    //console.log(signupform.value);
    this.userservice.userValidation(signupform.value).subscribe(
      (val)=>{
        this.user=val;
        console.log(this.user[0]);
       
        if(this.user.length>0){
          localStorage.setItem('currentUser', JSON.stringify({ userid:this.user[0]._id }));
          console.log(localStorage.getItem('currentUser'));
          
          this.router.navigateByUrl("/user");
         
          
        }
        else{
          alert("Invalid User");
          signupform.reset();
        }
      },
      (err)=>console.log(err),
      ()=>{console.log("db working correctly"); 
      
    }
    )
  }
  //new user account creation
  signIn() {
    this.router.navigateByUrl('/signIn');
  }
  adminsignIn(){
    this.router.navigateByUrl('/adminsignIn');
  }
}
