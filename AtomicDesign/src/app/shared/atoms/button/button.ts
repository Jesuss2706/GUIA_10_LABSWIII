import { Component, input } from '@angular/core';

export type ClinicButtonColor = 'primary' | 'success' | 'secondary';

@Component({
  selector: 'atom-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  readonly label = input('Enviar');
  readonly type = input<'button' | 'submit' | 'reset'>('submit');
  readonly color = input<ClinicButtonColor>('primary');
}
