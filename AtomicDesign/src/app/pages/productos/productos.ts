import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductoForm } from '../../shared/organism/producto-form/producto-form';

@Component({
  imports: [CommonModule, ProductoForm],
  standalone: true,
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {}
