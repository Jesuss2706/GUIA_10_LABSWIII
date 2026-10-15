import { Component, input } from '@angular/core';

@Component({
  selector: 'molecule-form-field',
  styleUrl: './form-field.css',
  templateUrl: './form-field.html',
})
export class FormField {
  readonly title = input('');
}
