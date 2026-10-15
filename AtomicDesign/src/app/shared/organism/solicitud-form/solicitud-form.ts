import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from '../../atoms/input-text/input-text';
import { Select, SelectOption } from '../../atoms/select/select';
import { Button } from '../../atoms/button/button';
import { FormField } from '../../molecules/form-field/form-field';
import { Solicitud } from '../../../models/solicitud';
import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../services/producto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'organismo-solicitud-form',
  standalone: true,
  imports: [FormsModule, InputText, Select, Button, FormField],
  templateUrl: './solicitud-form.html',
})
export class SolicitudForm implements OnInit {
  private productoService = inject(ProductoService);
  private sub?: Subscription;

  solicitud: Solicitud = { producto: '', cantidad: 0, fecha: '' };
  productos: Producto[] = [];

  get productosOptions(): SelectOption[] {
    return this.productos.map((p) => ({
      value: p.id !== undefined ? String(p.id) : '',
      label: p.nombre ?? '',
    }));
  }

  ngOnInit() {
    this.sub = this.productoService.productos.subscribe((lista) => {
      this.productos = lista;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  cargarProductos() {
    this.productos = [
      { id: 1, nombre: 'producto 1', categoria: 'Categoria 1', precio: 100 },
      { id: 2, nombre: 'producto 2', categoria: 'Categoria 222', precio: 200 },
      { id: 3, nombre: 'producto 3', categoria: 'Categoria 3', precio: 400 },
    ];
  }

  onSubmit(event: Event) {
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      alert('Solicitud enviada: ' + JSON.stringify(this.solicitud));
      form.reset();
      this.solicitud = { producto: '', cantidad: 0, fecha: '' };
    } else {
      form.reportValidity();
    }
  }
}
