import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from '../../atoms/input-text/input-text';
import { Button } from '../../atoms/button/button';
import { FormField } from '../../molecules/form-field/form-field';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'organismo-categoria-form',
  standalone: true,
  imports: [FormsModule, InputText, Button, FormField],
  templateUrl: './categoria-form.html',
})
export class CategoriaForm {
  categoria: Categoria = { nombre: '', descripcion: '' };

  onSubmit(event: Event) {
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      alert('Categoria enviada: ' + JSON.stringify(this.categoria));
      form.reset();
      this.categoria = { nombre: '', descripcion: '' };
    } else {
      form.reportValidity();
    }
  }
}
