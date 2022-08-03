import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(public router: Router,private userservice:UserService) { }
  user:any=[];
  ngOnInit(): void {
  }
  Submit(signupform) {
    console.log(signupform.value);
    this.userservice.userValidation(signupform.value).subscribe(
      (val)=>{
        this.user=val;
        console.log(this.user);
        if(this.user[0].role=="admin"){
          localStorage.setItem('currentUser', JSON.stringify({ userid:this.user[0]._id }));
          console.log(localStorage.getItem('currentUser'));
          this.router.navigateByUrl("/adminhome");
        }
        else{
          alert("The user is not Admin");
          signupform.reset();
        }
      },
      (err)=>console.log(err),
      ()=>{console.log("db working correctly");
    }
    )
  }
}
