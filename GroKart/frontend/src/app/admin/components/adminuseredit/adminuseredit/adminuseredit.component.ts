import { userModel } from 'src/app/login/models/usermodel';
import { AdminuserService } from './../../../../services/admin/adminuser.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-adminuseredit',
  templateUrl: './adminuseredit.component.html',
  styleUrls: ['./adminuseredit.component.css'],
})
export class AdminusereditComponent implements OnInit {
  userForm: FormGroup;
  user: any;
  updatedUser: any = [];
  constructor(
    private activerouter: ActivatedRoute,
    private adminservice: AdminuserService,
    private route: Router
  ) {
    this.updatedUser = [];
    let id = this.activerouter.snapshot.paramMap.get('id');
    let obj = { userid: id };
    this.adminservice.findaUser(obj).subscribe(
      (res) => {
        this.user = res[0];
        console.log(this.user);
        this.userForm = new FormGroup({
          fname: new FormControl(this.user.fname),
          lname: new FormControl(this.user.lname),
          email: new FormControl(this.user.email),
        });
      },
      (err) => console.log(err),
      () => console.log('db done')
    );
  }

  ngOnInit(): void {}
  onSubmit() {
    //console.log(this.userForm.value);

    this.updatedUser = this.userForm.value;
    this.updatedUser._id = this.activerouter.snapshot.paramMap.get('id');
    console.log(this.updatedUser);

    this.adminservice.updateUser(this.updatedUser).subscribe(
      (val) => {
        let result = val;

        if (result['modifiedCount'] > 0) this.route.navigateByUrl('/adminuser');
      },
      (err) => console.log(err),
      () => console.log('db done')
    );
  }
}
