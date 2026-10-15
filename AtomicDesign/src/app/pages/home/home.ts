import { Component } from '@angular/core';
import { ThreeColumn } from '../../templates/three-column.template';
import { CategoriaForm } from '../../shared/organism/categoria-form/categoria-form';
import { MedicoForm } from '../../shared/organism/medico-form/medico-form';
import { SolicitudForm } from '../../shared/organism/solicitud-form/solicitud-form';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ThreeColumn, CategoriaForm, MedicoForm, SolicitudForm],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
