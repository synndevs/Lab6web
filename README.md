# PRAKTIKUM 6 — JAVASCRIPT DOM DAN EVENT HANDLING

**Nama:** [Fachmi Amrullah]  
**NIM:** [312510246]  
**Mata Kuliah:** Pemrograman Web  
**Lab:** Praktikum 6 — JavaScript DOM dan Event Handling

---

## Struktur File

Program terdiri dari tiga file utama:

- `index.html` — struktur halaman dan elemen yang digunakan.
- `style.css` — pengaturan tampilan dan class CSS.
- `script.js` — logika JavaScript dan event handling.

File JavaScript dihubungkan menggunakan atribut `defer` agar dijalankan setelah HTML selesai diproses.

**[LETAK SCREENSHOT 1 — STRUKTUR FILE]**

Masukkan screenshot folder project yang memperlihatkan file `index.html`, `style.css`, dan `script.js`.

## D. Penjelasan Program

### 1. Manipulasi DOM

Bagian ini menggunakan `document.getElementById()` untuk mengambil elemen HTML dan `textContent` untuk mengubah teks pada judul serta paragraf. Tombol juga menggunakan `addEventListener("click", ...)` untuk menampilkan waktu ketika diklik.

**Kode:**

```javascript
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombol = document.getElementById("tombolAksi");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript";

tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});
```

**[LETAK SCREENSHOT 2 — MANIPULASI DOM]**

Masukkan screenshot halaman browser yang memperlihatkan judul berubah dan pesan waktu setelah tombol **Klik Saya** ditekan.

### 2. Mengubah Class dan Gaya CSS

Bagian ini menggunakan `classList.toggle()` untuk menambahkan atau menghapus class CSS `highlight` dan `teks-besar` ketika tombol ditekan.

**Kode JavaScript:**

```javascript
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});
```

**Kode CSS:**

```css
.highlight {
    color: #173f75;
    background-color: #e6f1ff;
    border-left: 4px solid #3478c8;
    padding: 12px;
}

.teks-besar {
    font-size: 1.4rem;
}
```

**[LETAK SCREENSHOT 3 — PERUBAHAN GAYA CSS]**

Masukkan screenshot sebelum dan sesudah tombol **Ubah Gaya** ditekan.

### 3. Penghitung Karakter

Bagian ini menghitung jumlah karakter yang dimasukkan pada kolom nama secara langsung menggunakan event `input` dan properti `value.length`.

**Kode:**

```javascript
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});
```

**[LETAK SCREENSHOT 4 — PENGHITUNG KARAKTER]**

Masukkan screenshot ketika kolom nama sudah diisi dan jumlah karakter terlihat berubah.

### 4. Validasi Form Pendaftaran

Validasi form digunakan untuk memeriksa nama, email, dan usia. Nama harus terdiri dari minimal tiga karakter, email harus memiliki format yang valid, serta usia harus berupa bilangan bulat antara 17 dan 100.

Event `submit` digunakan untuk menangani pengiriman form. `preventDefault()` mencegah halaman dimuat ulang ketika form diproses.

**Kode:**

```javascript
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama.length < 3) {
        pesanForm.textContent = "Nama wajib diisi minimal 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (
        usiaInput === "" ||
        !Number.isInteger(usia) ||
        usia < 17 ||
        usia > 100
    ) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17-100.";
    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        form.reset();
    }
});
```

**[LETAK SCREENSHOT 5 — VALIDASI GAGAL]**

Masukkan screenshot ketika form dikirim dengan data yang salah, misalnya nama kurang dari tiga karakter atau email tidak valid.

**[LETAK SCREENSHOT 6 — VALIDASI BERHASIL]**

Masukkan screenshot ketika seluruh data sudah benar dan pesan validasi berhasil muncul.

### 5. To-do List

To-do List digunakan untuk menambahkan tugas, menandai tugas sebagai selesai, dan menghapus satu tugas. Elemen HTML dibuat secara dinamis menggunakan `document.createElement()`.

**Kode untuk menambahkan tombol hapus:**

```javascript
const hapus = document.createElement("button");
hapus.type = "button";
hapus.textContent = "Hapus";

hapus.addEventListener("click", function () {
    item.remove();
});
```

Tombol selesai menggunakan `classList.toggle("selesai")`, sedangkan tombol hapus menggunakan `item.remove()` untuk menghilangkan tugas yang dipilih.

**Kode CSS:**

```css
.selesai span {
    text-decoration: line-through;
    color: #687386;
}

li {
    margin-bottom: 8px;
}
```

**[LETAK SCREENSHOT 7 — MENAMBAHKAN TUGAS]**

Masukkan screenshot ketika tugas berhasil ditambahkan ke daftar.

**[LETAK SCREENSHOT 8 — MENANDAI TUGAS SELESAI]**

Masukkan screenshot ketika tugas sudah dicoret setelah tombol **Tandai selesai** ditekan.

**[LETAK SCREENSHOT 9 — MENGHAPUS TUGAS]**

Masukkan screenshot setelah salah satu tugas dihapus dari daftar.

### 6. Event Change pada Dropdown Sesi Workshop

Bagian ini menggunakan event `change` untuk mendeteksi perubahan pilihan sesi workshop. Sesi yang dipilih kemudian ditampilkan pada paragraf.

**Kode:**

```javascript
const sesi = document.getElementById("sesi");
const pesanSesi = document.getElementById("pesanSesi");

sesi.addEventListener("change", function () {
    if (sesi.value === "") {
        pesanSesi.textContent = "Belum ada sesi yang dipilih.";
    } else {
        pesanSesi.textContent = "Sesi yang dipilih: " + sesi.value;
    }
});
```

**[LETAK SCREENSHOT 10 — PILIHAN SESI WORKSHOP]**

Masukkan screenshot setelah memilih salah satu sesi, misalnya JavaScript, dan teks pilihan tampil di halaman.

### 7. Menyembunyikan dan Menampilkan Paragraf

Bagian ini menggunakan `classList.toggle()` untuk menambahkan atau menghapus class `sembunyi`. Class tersebut mengatur apakah paragraf ditampilkan atau disembunyikan.

**Kode JavaScript:**

```javascript
const paragraf = document.getElementById("paragraf");
const tombolTampil = document.getElementById("tombolTampil");

tombolTampil.addEventListener("click", function () {
    paragraf.classList.toggle("sembunyi");

    if (paragraf.classList.contains("sembunyi")) {
        tombolTampil.textContent = "Tampilkan";
    } else {
        tombolTampil.textContent = "Sembunyikan";
    }
});
```

**Kode CSS:**

```css
.sembunyi {
    display: none;
}
```

**[LETAK SCREENSHOT 11 — PARAGRAF DISEMBUNYIKAN]**

Masukkan screenshot ketika paragraf tidak terlihat dan tombol berubah menjadi **Tampilkan**.

**[LETAK SCREENSHOT 12 — PARAGRAF DITAMPILKAN KEMBALI]**

Masukkan screenshot setelah tombol ditekan kembali dan paragraf muncul.

## E. Eksperimen Mandiri Nomor 5: Script Tanpa Defer

Pada program utama, file JavaScript dihubungkan menggunakan:

```html
<script src="script.js" defer></script>
```

Jika atribut `defer` dihapus dan script ditempatkan di bagian `head`, browser dapat menjalankan JavaScript sebelum elemen HTML selesai diproses. Akibatnya, `document.getElementById()` dapat menghasilkan `null` sehingga pemasangan event listener mengalami error.

Pengujian dilakukan dengan memindahkan script ke bagian `head` tanpa `defer`, kemudian mengamati hasilnya melalui browser dan Console pada Developer Tools.

**[LETAK SCREENSHOT 13 — ERROR TANPA DEFER]**

Masukkan screenshot Console browser yang memperlihatkan error ketika script dijalankan sebelum elemen HTML tersedia, jika error tersebut muncul saat pengujian.

**[LETAK SCREENSHOT 14 — SCRIPT MENGGUNAKAN DEFER]**

Masukkan screenshot halaman yang kembali berfungsi setelah atribut `defer` digunakan.

## F. Kesimpulan

Berdasarkan praktikum ini, JavaScript DOM dan event handling dapat digunakan untuk membuat halaman web yang interaktif. Program berhasil menerapkan manipulasi teks, perubahan class CSS, penghitung karakter, validasi form, To-do List dengan fitur tambah, selesai, dan hapus, event `change` pada dropdown, serta fitur menyembunyikan dan menampilkan paragraf.

Penggunaan `defer` membantu memastikan script dijalankan setelah HTML selesai diproses sehingga elemen yang diperlukan tersedia ketika JavaScript dijalankan.
