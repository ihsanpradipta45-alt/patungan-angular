import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ItemRow } from './components/item-row';
import { ItemForm } from './components/item-form';
import { SplitSummary } from './components/split-summary';
import { ITEMS, Item, JUDUL, JUMLAH_ORANG, PAJAK_PERSEN, TANGGAL } from './data/items';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, DatePipe, ItemRow, ItemForm, SplitSummary],
  templateUrl: './app.html',
})
export class App {
  protected readonly judul = JUDUL;
  protected readonly tanggal = TANGGAL;

  protected readonly items = signal<Item[]>(ITEMS);
  protected readonly jumlahOrang = signal(JUMLAH_ORANG);
  protected readonly pajakPersen = signal(PAJAK_PERSEN);

  protected readonly subtotal = computed(() =>
    this.items().reduce((sum, i) => sum + i.price * i.qty, 0)
  );

  protected tambah(data: { name: string; price: number }) {
    const nextId = Math.max(0, ...this.items().map((i) => i.id)) + 1;
    this.items.update((list) => [...list, { id: nextId, qty: 1, ...data }]);
  }

  protected hapus(id: number) {
    this.items.update((list) => list.filter((i) => i.id !== id));
  }

  protected ubahQty(id: number, delta: number) {
    this.items.update((list) =>
      list.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
    );
  }

  protected kosongkan() {
    this.items.set([]);
  }

  protected ubahOrang(delta: number) {
    this.jumlahOrang.update((n) => Math.max(1, n + delta));
  }

  protected ubahPajak(nilai: number) {
    this.pajakPersen.set(Math.max(0, nilai));
  }
}