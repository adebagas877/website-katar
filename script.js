document.addEventListener('DOMContentLoaded', function() {
  
  // Logika Formulir WhatsApp
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Data dari Form
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const message = document.getElementById('message').value;
    
    // Konfigurasi WhatsApp (Ganti nomor ini!)
    const adminPhone = "6289618197701"; 
    
    // Menyusun Pesan
    const text = `Halo Admin!%0A%0A` +
                 `Saya: *${name}*%0A` +
                 `Tujuan: *${type}*%0A` +
                 `Pesan: ${message}`;
    
    // Membuka WhatsApp Tab Baru
    const waUrl = `https://wa.me/${adminPhone}?text=${text}`;
    window.open(waUrl, '_blank');
    
    // Reset Form & Notifikasi
    alert('Terima kasih! Pesan Anda akan diteruskan ke WhatsApp Admin.');
    form.reset();
  });

  // Animasi Navbar saat Scroll
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      nav.classList.add('py-2', 'shadow');
    } else {
      nav.classList.remove('py-2', 'shadow');
    }
  });
});