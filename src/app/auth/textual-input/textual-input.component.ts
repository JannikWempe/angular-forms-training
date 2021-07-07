import {Component, forwardRef, Input} from '@angular/core';
import {DefaultValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-textual-input',
  templateUrl: './textual-input.component.html',
  styleUrls: ['./textual-input.component.css']
})
export class TextualInputComponent  {
  @Input() id!: string;
  @Input() label!: string;
}
