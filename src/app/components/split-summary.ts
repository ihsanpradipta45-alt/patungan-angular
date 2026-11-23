import { Component, computed, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-split-summary',
  imports: [CurrencyPipe],
  templateUrl: './split-summary.html',
  styleUrl: './split-summary.css',
})
export class SplitSummary {
  subtotal = input(0);
  jumlahOrang = input(1);
  pajakPersen = input(0);

  ubahOrang = output<number>(); // emit +1 / -1
  ubahPajak = output<number>();

  pajak = computed(() => Math.round((this.subtotal() * this.pajakPersen()) / 100));
  total = computed(() => this.subtotal() + this.pajak());
  perOrang = computed(() => Math.ceil(this.total() / this.jumlahOrang()));

  status = computed(() => {
    const p = this.perOrang();
    if (p < 30000) return { teks: 'Hemat', kelas: 'bg-success' };
    if (p <= 100000) return { teks: 'Wajar', kelas: 'bg-warning text-dark' };
    return { teks: 'Mahal', kelas: 'bg-danger' };
  });
}