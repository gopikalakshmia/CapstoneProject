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
    //console.log(signupform.value);
    this.userservice.userValidation(signupform.value).subscribe(
      (val)=>{
        this.user=val;
        console.log(this.user[0]);
        if(this.user[0].role=="admin"){
          this.router.navigateByUrl("/adminhome");
        }
        
      },
      (err)=>console.log(err),
      ()=>{console.log("db working correctly");
    }
    )
  }
}
