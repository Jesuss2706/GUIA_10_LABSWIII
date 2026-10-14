import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  @Input() label = 'enviar';
  @Input() type: 'button' | 'submit' = 'submit';
  @Input() color = 'primary';
}
