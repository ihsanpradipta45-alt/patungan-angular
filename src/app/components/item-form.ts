import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.html',
})
export class ItemForm {
  tambah = output<{ name: string; price: number }>();

  protected readonly nama = signal('');
  protected readonly harga = signal('');

  protected kirim() {
    const name = this.nama().trim();
    const price = Number(this.harga());
    if (!name || !(price > 0)) return;

    this.tambah.emit({ name, price });
    this.nama.set('');
    this.harga.set('');
  }
}