import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'atom-input-text',
  host: { '[attr.id]': 'null' },
  templateUrl: './input-text.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputText),
      multi: true,
    },
  ],
})
export class InputText implements ControlValueAccessor {
  @Input() label = '';
  @Input() id = '';
  @Input() type = 'text';
  @Input() required = false;
  @Input() placeholder = '';
  @Input() minlength: number | null = null;

  value: string | number | null = '';
  disabled = false;

  onChange: (value: unknown) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: unknown): void {
    this.value = value === null || value === undefined ? '' : (value as string | number);
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const raw = (event.target as HTMLInputElement).value;
    this.value = raw;
    this.onChange(this.type === 'number' ? (raw === '' ? null : Number(raw)) : raw);
  }
}
