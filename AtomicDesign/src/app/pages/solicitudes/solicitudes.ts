import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SolicitudForm } from '../../shared/organism/solicitud-form/solicitud-form';

@Component({
  imports: [CommonModule, SolicitudForm],
  standalone: true,
  selector: 'app-solicitudes',
  styleUrl: './solicitudes.css',
  templateUrl: './solicitudes.html',
})
export class Solicitudes {}
