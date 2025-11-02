document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.querySelector("form");
    const namaInput = document.querySelector("input[name='nama']");
    const nimInput = document.querySelector("input[name='nim']");
    const ketSelect = document.querySelector("select[name='keterangan']");

    // Validasi Nama (hanya huruf & spasi)
    namaInput.addEventListener("input", () => {
        const regex = /^[A-Za-z\s]*$/;
        if (!regex.test(namaInput.value)) {
            namaInput.classList.add("is-invalid");
        } else {
            namaInput.classList.remove("is-invalid");
        }
    });

    // Validasi NIM (hanya angka)
    nimInput.addEventListener("input", () => {
        nimInput.value = nimInput.value.replace(/[^0-9]/g, '');

        if (nimInput.value.length < 8) {
            nimInput.classList.add("is-invalid");
        } else {
            nimInput.classList.remove("is-invalid");
        }
    });

    // Validasi saat submit
    form.addEventListener("submit", function (e) {

        if (namaInput.value.trim() === "" || nimInput.value.trim() === "" || ketSelect.value === "") {
            alert("⚠️ Semua data wajib diisi!");
            e.preventDefault();
            return;
        }

        if (nimInput.value.length < 8) {
            alert("⚠️ NIM minimal 8 angka!");
            e.preventDefault();
            return;
        }

        // Konfirmasi
        const konfirmasi = confirm("✅ Data sudah benar? Klik OK untuk simpan.");
        if (!konfirmasi) {
            e.preventDefault();
        }
    });

});
