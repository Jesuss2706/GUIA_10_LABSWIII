import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'molecule-form-field',
  styleUrl: './form-field.css',
  templateUrl: './form-field.html',
})
export class FormField {
  @Input() title = '';
}
