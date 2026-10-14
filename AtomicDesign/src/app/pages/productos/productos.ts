import { Component } from '@angular/core';
import { ProductoForm } from '../../shared/organism/producto-form/producto-form';

@Component({
  standalone: true,
  selector: 'app-productos',
  imports: [ProductoForm],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {}
