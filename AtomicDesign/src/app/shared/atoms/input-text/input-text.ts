import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
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
  readonly label = input('');
  readonly id = input('');
  readonly type = input('text');
  readonly required = input(false);
  readonly placeholder = input('');
  readonly minlength = input<number | null>(null);

  readonly value = signal<string | number | null>('');
  readonly disabled = signal(false);

  onChange: (value: unknown) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: unknown): void {
    this.value.set(value === null || value === undefined ? '' : (value as string | number));
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onInput(event: Event): void {
    const raw = (event.target as HTMLInputElement).value;
    this.value.set(raw);
    this.onChange(this.type() === 'number' ? (raw === '' ? null : Number(raw)) : raw);
  }
}
