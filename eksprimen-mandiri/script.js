
// Mengambil elemen HTML
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombol = document.getElementById("tombolAksi");

// Mengubah teks HTML menggunakan DOM
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript";

// Event click
tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// Mengubah kelas dan gaya CSS
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

// Event input dan penghitung karakter
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

// Validasi form pendaftaran
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

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

// Daftar tugas
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    const hapus = document.createElement("button");

    label.textContent = teks + " ";
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";

    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    // Eksperimen 1: Menghapus satu item tugas
    hapus.type = "button";
    hapus.textContent = "Hapus";

    hapus.addEventListener("click", function () {
        item.remove();
        pesanTugas.textContent = "Tugas dihapus.";
    });

    item.append(label, selesai, hapus);
    daftarTugas.appendChild(item);
    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});

// Eksperimen 3: Event change pada dropdown sesi workshop
const sesi = document.getElementById("sesi");
const pesanSesi = document.getElementById("pesanSesi");

sesi.addEventListener("change", function () {
    if (sesi.value === "") {
        pesanSesi.textContent = "Belum ada sesi yang dipilih.";
    } else {
        pesanSesi.textContent = "Sesi yang dipilih: " + sesi.value;
    }
});

// Eksperimen 4: Menyembunyikan dan menampilkan paragraf
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
