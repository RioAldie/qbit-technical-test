const fruits = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 3,

    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150,
  },
];

// CASE 1
// 1. Buah apa saja yang dimiliki Andi? (fruitName)

const getAllFruitName = (fruits) => {
  // mengambil  fruitName dan memasukan kedalam array
  const fruitNames = fruits.map((fruit) => fruit.fruitName);

  // memfilter fruitname yang sama
  const uniqueFruitNames = fruitNames
    .map((name) => name.toLowerCase())
    .filter((name, index, self) => self.indexOf(name) === index);

  // Hasil: ada lima jenis buah yang dimiliki andi, ['apel', 'kurma', 'manggis', 'jeruk bali', 'salak']

  console.log(uniqueFruitNames);
};

getAllFruitName(fruits);

// Soal nomor 2
// Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
// (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
// masing-masing wadah?
