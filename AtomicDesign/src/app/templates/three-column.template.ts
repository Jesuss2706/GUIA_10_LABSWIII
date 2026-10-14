import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'template-three-column',
  templateUrl: './three-column.template.html',
})

export class ThreeColumn {
  @Input() titulo = '';
  @Input() tituloIzquierda = '';
  @Input() tituloCentro = '';
  @Input() tituloDerecha = '';
}
