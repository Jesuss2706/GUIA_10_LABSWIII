import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({ providedIn: 'root' })
export class CategoriaService {
  private categorias$ = new BehaviorSubject<Categoria[]>([
    { id: 1, nombre: 'Categoria 1' },
    { id: 2, nombre: 'Categoria 2' },
    { id: 3, nombre: 'Categoria 3' },
  ]);

  readonly categorias = this.categorias$.asObservable();

  agregar(categoria: Categoria) {
    const actuales = this.categorias$.value;
    const nuevoId = Math.max(0, ...actuales.map((c) => c.id ?? 0)) + 1;
    this.categorias$.next([...actuales, { ...categoria, id: nuevoId }]);
  }
}
