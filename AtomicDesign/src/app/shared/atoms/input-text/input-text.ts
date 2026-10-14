import { Component, Input, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  imports: [FormsModule],
  templateUrl: './input-text.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputText),
      multi: true
    }
  ]
})
export class InputText {
  @Input() label = '';
  @Input() id = '';
  @Input() type = 'text';
  @Input() required = false;
  @Input() placeholder = '';
}
