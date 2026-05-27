// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===== MODAL =====
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');

// All buttons that open the contact modal
const openTriggers = [
  document.getElementById('openContact'),
  document.getElementById('openContactHero'),
  document.getElementById('openContactCTA'),
].filter(Boolean); // filter out nulls (page-specific elements)

openTriggers.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

closeModal.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ===== WHATSAPP SEND =====
const sendBtn = document.getElementById('sendToWhatsapp');

sendBtn.addEventListener('click', () => {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const service = document.getElementById('contactService').value;
  const message = document.getElementById('contactMessage').value.trim();

  // Basic validation
  if (!name) {
    alert('Please enter your name.');
    document.getElementById('contactName').focus();
    return;
  }

  // ⚠️ REPLACE THIS WITH YOUR ACTUAL WHATSAPP NUMBER (international format, no + or spaces)
  const whatsappNumber = '2349050838065';

  let text = `Hello Usoktek! 👋\n\n`;
  text += `*Name:* ${name}\n`;
  if (email) text += `*Email:* ${email}\n`;
  if (service) text += `*Service Needed:* ${service}\n`;
  if (message) text += `*Message:* ${message}\n`;
  text += `\nI'd love to discuss this further!`;

  const encodedText = encodeURIComponent(text);
  const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  window.open(url, '_blank');
});

// ===== SMOOTH SCROLL for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});