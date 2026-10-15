import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'atom-select',
  host: { '[attr.id]': 'null' },
  templateUrl: './select.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true,
    },
  ],
})
export class Select implements ControlValueAccessor {
  readonly label = input('');
  readonly id = input('');
  readonly required = input(false);
  readonly placeholder = input('Seleccione una opción');
  readonly options = input<SelectOption[]>([]);

  readonly value = signal('');
  readonly disabled = signal(false);

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: unknown): void {
    this.value.set(value === null || value === undefined ? '' : String(value));
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onSelect(event: Event): void {
    const selected = (event.target as HTMLSelectElement).value;
    this.value.set(selected);
    this.onChange(selected);
  }
}
