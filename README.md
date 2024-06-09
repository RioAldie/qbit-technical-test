## CASE 1

#### Soal 1 Buah apa saja yang dimiliki Andi? (fruitName)

> Jawaban: ada lima jenis buah yang dimiliki andi, ['apel', 'kurma', 'manggis', 'jeruk bali', 'salak']

---

#### Soal 2 Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah(fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja dimasing-masing wadah?

> Jawaban: ada 2 wadah: LOCAL : ['Manggis', 'Jeruk Bali', 'Salak'] IMPORT : ['Apel', 'Kurma', 'apel', 'KURMA']

---

#### Soal 3 Berapa total stock buah yang ada di masing-masing wadah?

> Jawaban = IMPORT : 100, LOCAL : 260

---

#### Soal 4 Apakah ada komentar terkait kasus di atas?

> Terdapat kesalahan pada data fruits, karena menurut saya 'Id' atau ' fruitId' haruslah bersifat unik dan tidak boleh sama dengan yang lain

** Source code bisa dilihat di script.js **

---

## CASE 2

#### Soal 5 Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.

```
function countComments(comments) {
  // menghitung komen utama
  let count = comments.length;

  comments.forEach((comment) => {
    // menghitung reply
    if (comment.replies) {
      count += countComments(comment.replies);
    }
  });

  return count;
}

```

> total comments = 7

---

## CASE 3

#### Soal 6 Buatlah minimal 1 halaman untuk memperkenalkan sebuah UMKM. Desain bebas. Buatlah semenarik mungkin. Boleh dibuat sebagai website ataupun mobile app (bebas pilih). Jika diperlukan, diperbolehkan untuk membuat backend sederhana.
> Untuk menyelesaikan Case ini saya membuat sebuah website UMKM Bakso untuk memperkenalkan sebuah restoran bakso. website ini saya buat menggunakan NextJs
