import { DiaryComponent } from './grocery/components/diary/diary.component';
import { AdminloginComponent } from './admin/components/adminlogin/adminlogin.component';
import { AdmingroeditComponent } from './admin/components/admingroedit/admingroedit/admingroedit.component';
import { AdminnewgroceryComponent } from './admin/components/adminnewgrocery/adminnewgrocery/adminnewgrocery.component';
import { AdmingroceryComponent } from './admin/components/admingrocery/admingrocery/admingrocery.component';
import { AdminusereditComponent } from './admin/components/adminuseredit/adminuseredit/adminuseredit.component';
import { AdminuserComponent } from './admin/components/adminuser/adminuser.component';
import { AdminhomeComponent } from './admin/components/adminhome/adminhome.component';
import { AdminModule } from './admin/admin.module';

import { WishlistComponent } from './home/components/wishlist/wishlist.component';
import { CartComponent } from './home/components/cart/cart.component';
import { UserComponent } from './login/components/user/user.component';
import { SignupComponent } from './login/components/signup/signup.component';
import { SigninComponent } from './login/components/signin/signin.component';
import { LoginModule } from './login/login.module';
import { FruitsComponent } from './grocery/components/fruits/fruits.component';
import { VegetablesComponent } from './grocery/components/vegetables/vegetables.component';

import { GroceryModule } from './grocery/grocery.module';
import { HomeComponent } from './home/components/home/home.component';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { GroceryhomeComponent } from './grocery/components/groceryhome/groceryhome.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes=[
  {path:'',component:HomeComponent},
  {path:'vegitables',component:VegetablesComponent},
  {path:'fruits',component:FruitsComponent},
  {path:'signIn',component:SigninComponent},
  {path:'signUp',component:SignupComponent},
  {path:'user',component:UserComponent},
  {path:'grocery/:id',component:GroceryhomeComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'adminuser',component:AdminuserComponent},
  {path:'adminuser/:id',component:AdminusereditComponent},
  {path:'admingrocery',component:AdmingroceryComponent},
  {path:'addnewgrocery',component:AdminnewgroceryComponent},
  {path:'admingrocery/:id',component:AdmingroeditComponent},
  {path:'adminsignIn',component:AdminloginComponent},
  {path:'diary',component:DiaryComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SharedModule,
    RouterModule.forRoot(routes),
    GroceryModule,
    HttpClientModule,
    LoginModule,
    FormsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
