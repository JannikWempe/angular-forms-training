import {Component, Input} from '@angular/core';

// TODO: make this component usable within forms without implementing ControlValueAccessor
// [ ] this component can be used within a form
// [ ] this component remains unchanged
@Component({
  selector: 'app-textual-input',
  templateUrl: './textual-input.component.html',
  styleUrls: ['./textual-input.component.css']
})
export class TextualInputComponent  {
  @Input() id!: string;
  @Input() label!: string;
}
