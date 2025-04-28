// Burger menu toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Dropdown menu toggle
const collectionsToggle = document.getElementById('collections-toggle');
collectionsToggle.addEventListener('click', (e) => {
  e.preventDefault();
  collectionsToggle.parentElement.classList.toggle('active');
});

// Slider functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto slide only (every 5 seconds)
setInterval(nextSlide, 5000); // Change slide every 5 seconds
