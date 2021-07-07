import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupFormComponent } from './signup-form/signup-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { TextualInputComponent } from './textual-input/textual-input.component';


@NgModule({
  declarations: [
    SignupFormComponent,
    TextualInputComponent,
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
