import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from '../../atoms/input-text/input-text';
import { Select, SelectOption } from '../../atoms/select/select';
import { Button } from '../../atoms/button/button';
import { FormField } from '../../molecules/form-field/form-field';
import { Medico } from '../../../models/medico';

@Component({
  selector: 'organismo-medicos-form',
  standalone: true,
  imports: [FormsModule, InputText, Select, Button, FormField],
  templateUrl: './medico-form.html',
})
export class MedicoForm {
  readonly especialidades: SelectOption[] = [
    { value: 'especialidad-1', label: 'Especialidad 1' },
    { value: 'especialidad-2', label: 'Especialidad 2' },
    { value: 'especialidad-3', label: 'Especialidad 3' },
  ];

  readonly generos: SelectOption[] = [
    { value: 'femenino', label: 'Femenino' },
    { value: 'masculino', label: 'Masculino' },
    { value: 'otro', label: 'Otro' },
  ];

  medico: Medico = this.crearVacio();

  onSubmit(event: Event) {
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      alert('Médico registrado: ' + JSON.stringify(this.medico));
      form.reset();
      this.medico = this.crearVacio();
    } else {
      form.reportValidity();
    }
  }

  private crearVacio(): Medico {
    return {
      nombres: '',
      apellidos: '',
      especialidad: '',
      aniosClinica: null,
      genero: '',
      fechaNacimiento: '',
    };
  }
}
