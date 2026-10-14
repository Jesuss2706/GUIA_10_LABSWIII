import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-form-field',
  styleUrl: './form-field.css',
  templateUrl: './form-field.html',
})
export class FormField {
  @Input() title = '';
}
