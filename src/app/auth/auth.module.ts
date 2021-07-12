import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupFormComponent } from './signup-form/signup-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { TextualInputComponent } from './textual-input/textual-input.component';
import { NumericInputComponent } from './numeric-input/numeric-input.component';
import { AddressFormComponent } from './address-form/address-form.component';



@NgModule({
  declarations: [
    SignupFormComponent,
    TextualInputComponent,
    NumericInputComponent,
    AddressFormComponent
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
