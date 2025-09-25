const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get('to');

if (guestName) {
  document.getElementById('guest-name').textContent = decodeURIComponent(guestName);
}

document.getElementById('rsvp-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Terima kasih sudah konfirmasi kehadiran!");
});
