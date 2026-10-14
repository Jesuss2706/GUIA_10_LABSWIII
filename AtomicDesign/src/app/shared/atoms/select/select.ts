import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  standalone: true,
  selector: 'app-select',
  templateUrl: './select.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true,
    }
  ]
})
export class Select {
  @Input() label = '';
  @Input() id = '';
  @Input() required = false;
  @Input() options: { label: string; value: string }[] = [];
}
