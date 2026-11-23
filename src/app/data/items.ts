export interface Item {
  id: number;
  name: string;
  price: number; // harga per porsi
  qty: number;
}

export const JUDUL = 'Makan malam bareng';
export const TANGGAL = new Date(2026, 10, 20); // 20 November 2026
export const JUMLAH_ORANG = 4;
export const PAJAK_PERSEN = 10;

export const ITEMS: Item[] = [
  { id: 1, name: 'Nasi goreng spesial', price: 28_000, qty: 2 },
  { id: 2, name: 'Mie ayam bakso', price: 22_000, qty: 1 },
  { id: 3, name: 'Ayam bakar madu', price: 35_000, qty: 2 },
  { id: 4, name: 'Es teh manis', price: 6_000, qty: 4 },
  { id: 5, name: 'Kentang goreng', price: 18_000, qty: 1 },
];