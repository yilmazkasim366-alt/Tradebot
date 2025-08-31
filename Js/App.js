// Basit interaktivite: menü aç/kapat ve form submit simülasyonu
document.addEventListener('DOMContentLoaded', () => {
  // yıl güncelle
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // nav toggle (mobil)
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const visible = nav.style.display === 'flex';
      nav.style.display = visible ? 'none' : 'flex';
    });
  }

  // basit form davranışı
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // buraya fetch ile API ekleyebilirsin
      alert('Mesajınız alındı — (demo).');
      form.reset();
    });
  }
});
