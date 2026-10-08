import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-input-text',
  styleUrl: './input-text.css',
  templateUrl: './input-text.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
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
