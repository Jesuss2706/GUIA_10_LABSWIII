import { Component } from '@angular/core';
import { MedicoForm } from '../../shared/organism/medico-form/medico-form';

@Component({
  standalone: true,
  selector: 'app-medicos',
  imports: [MedicoForm],
  templateUrl: './medicos.html',
})
export class Medicos {}
