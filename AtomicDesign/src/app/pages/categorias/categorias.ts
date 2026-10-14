import { Component } from '@angular/core';
import { CategoriaForm } from '../../shared/organism/categoria-form/categoria-form';

@Component({
  standalone: true,
  selector: 'app-categorias',
  imports: [CategoriaForm],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css',
})
export class Categorias {}
