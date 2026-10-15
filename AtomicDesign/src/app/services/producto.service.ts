import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private productos$ = new BehaviorSubject<Producto[]>([
    { id: 1, nombre: 'producto 1', categoria: 'Categoria 1', precio: 100 },
    { id: 2, nombre: 'producto 2', categoria: 'Categoria 222', precio: 200 },
    { id: 3, nombre: 'producto 3', categoria: 'Categoria 3', precio: 400 },
  ]);

  readonly productos = this.productos$.asObservable();

  agregar(producto: Producto) {
    const actuales = this.productos$.value;
    const nuevoId = Math.max(0, ...actuales.map((p) => p.id ?? 0)) + 1;
    this.productos$.next([...actuales, { ...producto, id: nuevoId }]);
  }
}
