const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Ganti dengan nomor WhatsApp kamu (gunakan format internasional tanpa tanda "+")
const yourPhoneNumber = "6282121141523";

// Pesan untuk masing-masing tombol
const yesMessage = "Hai, aku juga suka sama kamu! 😊❤️";
const noMessage = "Terima kasih atas jawabannya. Aku tetap menghargai kamu! 😊";

// Fungsi untuk mengirim pesan ke WhatsApp
function sendToWhatsApp(message) {
    const whatsappURL = `https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

yesBtn.addEventListener("click", () => {
    sendToWhatsApp(yesMessage);
});

noBtn.addEventListener("click", () => {
    sendToWhatsApp(noMessage);
});
