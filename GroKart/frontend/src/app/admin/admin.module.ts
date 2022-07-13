import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AdminuserComponent } from './components/adminuser/adminuser.component';
import { AdminusereditComponent } from './components/adminuseredit/adminuseredit/adminuseredit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmingroceryComponent } from './components/admingrocery/admingrocery/admingrocery.component';
import { AdminnewgroceryComponent } from './components/adminnewgrocery/adminnewgrocery/adminnewgrocery.component';
import { AdmingroeditComponent } from './components/admingroedit/admingroedit/admingroedit.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AdminhomeComponent,
    AdminuserComponent,
    AdminusereditComponent,
    AdmingroceryComponent,
    AdminnewgroceryComponent,
    AdmingroeditComponent,
    AdminloginComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    AdminhomeComponent,
    AdminuserComponent,
    AdminusereditComponent,
    AdmingroceryComponent,
    AdminnewgroceryComponent,
    AdmingroeditComponent,
    AdminloginComponent
  ],
})
export class AdminModule {}
