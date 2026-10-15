import { Component, Input } from '@angular/core';

export type ClinicButtonColor = 'primary' | 'success' | 'secondary';

@Component({
  standalone: true,
  selector: 'atom-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  @Input() label = 'Enviar';
  @Input() type: 'button' | 'submit' | 'reset' = 'submit';
  @Input() color: ClinicButtonColor = 'primary';
}
