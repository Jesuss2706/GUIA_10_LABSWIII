import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from '../../atoms/input-text/input-text';
import { Select } from '../../atoms/select/select';
import { Button } from '../../atoms/button/button';
import { FormField } from '../../molecules/form-field/form-field';
import { Solicitud } from '../../../models/solicitud';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'organismo-solicitud-form',
  standalone: true,
  imports: [FormsModule, InputText, Select, Button, FormField],
  templateUrl: './solicitud-form. component . html'
})
export class SolicitudForm {

  solicitud: Solicitud = { producto: '', cantidad: 0, fecha: ''};
  productos: Producto[]=[];

  get productosOptions(): { value: string; label: string }[] {
    return this. productos. map(p => ({
      value: p.id !== undefined ? String(p.id) : '',
      label: p.nombre ?? ''
    }));
  }

  ngOnInit() {
    this.cargarProductos ();
  }

  cargarProductos() {
  this.productos = [
    {id: 1, nombre: 'producto 1', categoria: 'Categoria 1', precio: 100 },
    {id: 2, nombre: 'producto 2', categoria: 'Categoria 222', precio: 200 },
    {id: 3, nombre: 'producto 3', categoria: 'Categoria 3', precio: 400 }
  ];
  }
}

