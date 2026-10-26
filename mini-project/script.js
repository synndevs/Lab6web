
// Mengambil elemen HTML
const form = document.getElementById("formWorkshop");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");
const pesan = document.getElementById("pesan");
const hitungKarakter = document.getElementById("hitungKarakter");
const ringkasan = document.getElementById("ringkasan");

// Menghitung karakter nama secara langsung
nama.addEventListener("input", function () {
    hitungKarakter.textContent = nama.value.length + "/50 karakter";
    document.getElementById("errorNama").textContent = "";
    pesan.textContent = "";
});

// Menghapus pesan error saat input diperbaiki
email.addEventListener("input", function () {
    document.getElementById("errorEmail").textContent = "";
    pesan.textContent = "";
});

sesi.addEventListener("change", function () {
    document.getElementById("errorSesi").textContent = "";
    pesan.textContent = "";
});

// Validasi form saat dikirim
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaValue = nama.value.trim();
    const emailValue = email.value.trim();
    const sesiValue = sesi.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Mengosongkan error sebelumnya
    document.getElementById("errorNama").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorSesi").textContent = "";
    pesan.textContent = "";
    pesan.className = "";

    let valid = true;

    if (namaValue.length < 3) {
        document.getElementById("errorNama").textContent =
            "Nama wajib diisi minimal 3 karakter.";
        valid = false;
    }

    if (!polaEmail.test(emailValue)) {
        document.getElementById("errorEmail").textContent =
            "Masukkan alamat email yang valid.";
        valid = false;
    }

    if (sesiValue === "") {
        document.getElementById("errorSesi").textContent =
            "Silakan pilih sesi workshop.";
        valid = false;
    }

    if (!valid) {
        pesan.textContent = "Periksa kembali data yang kamu masukkan.";
        pesan.className = "failed";
        ringkasan.hidden = true;
        return;
    }

    // Menampilkan ringkasan pendaftaran
    document.getElementById("ringkasanNama").textContent = namaValue;
    document.getElementById("ringkasanEmail").textContent = emailValue;
    document.getElementById("ringkasanSesi").textContent = sesiValue;

    ringkasan.hidden = false;
    pesan.textContent = "Pendaftaran berhasil!";
    pesan.className = "success";

    ringkasan.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});

// Reset form dan tampilan
form.addEventListener("reset", function () {
    pesan.textContent = "";
    pesan.className = "";

    document.getElementById("errorNama").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorSesi").textContent = "";

    ringkasan.hidden = true;

    hitungKarakter.textContent = "0/50 karakter";
});
