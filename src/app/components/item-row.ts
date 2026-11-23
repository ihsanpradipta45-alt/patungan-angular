import { Component, computed, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Item } from '../data/items';

@Component({
  selector: 'app-item-row',
  imports: [CurrencyPipe],
  templateUrl: './item-row.html',
  styleUrl: './item-row.css',
})
export class ItemRow {
  item = input.required<Item>();
  no = input.required<number>();

  ubahQty = output<number>(); // emit +1 / -1 ke parent
  hapus = output<number>(); // emit id ke parent

  total = computed(() => this.item().price * this.item().qty);
}