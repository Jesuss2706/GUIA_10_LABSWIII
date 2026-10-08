import { Component } from '@angular/core';

@Component({
  imports: [CommonModule, ThreeColumnModule, CategoriaFormComponent, ProductoFormComponent, SolicitudFormComponent],
  standalone: true,
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
