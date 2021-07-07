import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupFormComponent } from './signup-form/signup-form.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    SignupFormComponent,
  ],
  exports: [
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
