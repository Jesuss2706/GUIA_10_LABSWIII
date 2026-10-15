import { Component, input } from '@angular/core';

@Component({
  selector: 'template-three-column',
  templateUrl: './three-column.template.html',
})
export class ThreeColumn {
  readonly titulo = input('');
  readonly tituloIzquierda = input('');
  readonly tituloCentro = input('');
  readonly tituloDerecha = input('');
}
