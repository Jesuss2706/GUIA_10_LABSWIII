import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from '../../atoms/input-text/input-text';
import { Select } from '../../atoms/select/select';
import { Button } from '../../atoms/button/button';
import { FormField } from '../../molecules/form-field/form-field';
import { Producto } from '../../../models/producto';
import { Categoria } from '../../../models/categoria';

@Component ( {
  selector: 'organismo-producto-form',
  standalone: true,
  imports: [
    FormsModule,
    InputText,
    Select,
    Button,
    FormField
],
  templateUrl: './producto-form. component.html'
})
export class ProductoForm {
  producto: Producto = { nombre: '', precio: 0, categoria: '' };

  categorias: Categoria[]=[];

  // Devuelve las opciones en el formato que espera atom-select
  get categoriasOptions(): { value: string; label: string }[] {
    return this.categorias.map(c => ({
      value: c.id !== undefined ? String(c.id) : '',
      label: c.nombre ?? ''
    }));
  }

}
