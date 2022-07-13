import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    UserComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[SigninComponent,SignupComponent,UserComponent]
})
export class LoginModule { }
