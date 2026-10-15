import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from '../../atoms/input-text/input-text';
import { Select, SelectOption } from '../../atoms/select/select';
import { Button } from '../../atoms/button/button';
import { FormField } from '../../molecules/form-field/form-field';
import { Producto } from '../../../models/producto';
import { Categoria } from '../../../models/categoria';
import { CategoriaService } from '../../../services/categoria.service';
import { Subscription } from 'rxjs';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'organismo-producto-form',
  standalone: true,
  imports: [FormsModule, InputText, Select, Button, FormField],
  templateUrl: './producto-form.html',
})
export class ProductoForm implements OnInit {
  private categoriaService = inject(CategoriaService);
  private sub?: Subscription;
  private productoService = inject(ProductoService);

  producto: Producto = { nombre: '', precio: 0, categoria: '' };
  categorias: Categoria[] = [];

  ngOnInit() {
    this.sub = this.categoriaService.categorias.subscribe((lista) => {
      this.categorias = lista;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
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
      this.productoService.agregar(this.producto);
      alert('Producto registrado: ' + this.producto.nombre);
      form.reset();
      this.producto = { nombre: '', precio: 0, categoria: '' };
    } else {
      form.reportValidity();
    }
  }
}
