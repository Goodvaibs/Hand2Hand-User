import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//module import
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }