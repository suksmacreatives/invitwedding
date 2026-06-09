// Di dalam script.js
const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get('to');

// Cari elemen untuk menampilkan nama
const guestElement = document.getElementById('guest-name');

if (guestName) {
    // Jika ada nama di link, tampilkan nama tersebut
    guestElement.innerText = guestName;
} else {
    // Jika tidak ada nama, tampilkan sapaan umum
    guestElement.innerText = "Bapak/Ibu/Saudara/i";
}
// Tambahkan fungsi ini di script.js
function bukaUndangan() {
    const audio = document.getElementById("myAudio");

    // Memutar musik
    audio.play().then(() => {
        // Berhasil diputar, baru pindah halaman
        window.location.href = 'view.html';
    }).catch(error => {
        // Jika ada error (misal browser memblokir), tetap pindah halaman
        console.log("Autoplay dicegah, tapi tetap lanjut.");
        window.location.href = 'view.html';
    });
}