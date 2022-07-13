import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ToastComponent } from './components/toast/toast/toast.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    ToastComponent
  ]
})
export class SharedModule { }
