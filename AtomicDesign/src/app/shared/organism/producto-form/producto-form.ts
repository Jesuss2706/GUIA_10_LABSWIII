import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from '../../atoms/input-text/input-text';
import { Select, SelectOption } from '../../atoms/select/select';
import { Button } from '../../atoms/button/button';
import { FormField } from '../../molecules/form-field/form-field';
import { Producto } from '../../../models/producto';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'organismo-producto-form',
  standalone: true,
  imports: [FormsModule, InputText, Select, Button, FormField],
  templateUrl: './producto-form.html',
})
export class ProductoForm implements OnInit {
  producto: Producto = { nombre: '', precio: 0, categoria: '' };
  categorias: Categoria[] = [];

  ngOnInit() {
    this.categorias = [
      { id: 1, nombre: 'Categoria 1' },
      { id: 2, nombre: 'Categoria 2' },
      { id: 3, nombre: 'Categoria 3' },
    ];
  }

  get categoriasOptions(): SelectOption[] {
    return this.categorias.map((c) => ({
      value: c.id !== undefined ? String(c.id) : '',
      label: c.nombre ?? '',
    }));
  }

  onSubmit(event: Event) {
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      alert('Producto enviado: ' + JSON.stringify(this.producto));
      form.reset();
      this.producto = { nombre: '', precio: 0, categoria: '' };
    } else {
      form.reportValidity();
    }
  }
}
