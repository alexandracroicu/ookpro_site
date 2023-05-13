// selectam elementul de slideshow
const slideshow = document.querySelector('.slideshow-container');

// setam variabila pentru indexul curent al slide-ului
let slideIndex = 0;

// setam variabila pentru intervalul de timp intre slide-uri
const intervalTime = 3000;

// selectam toate slide-urile si le transformam in vector pentru a putea lucra cu ele
const slides = Array.from(slideshow.querySelectorAll('.slide'));

// setam variabila pentru latimea ferestrei pentru a face slideshow-ul responsive
const windowWidth = window.innerWidth;

// adaugam un event listener pentru a actualiza variabila windowWidth atunci cand fereastra se redimensioneaza
window.addEventListener('resize', () => {
  windowWidth = window.innerWidth;
});

// functie pentru afisarea urmatorului slide
function showNextSlide() {
  // incrementam indexul slide-ului
  slideIndex++;

  // daca am ajuns la sfarsitul slide-urilor, resetam indexul la 0
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // ascundem toate slide-urile
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // afisam slide-ul curent
  slides[slideIndex].style.display = 'block';

  // setam intervalul de timp pentru afisarea urmatorului slide
  setTimeout(showNextSlide, intervalTime);
}

// apelam functia pentru prima data pentru a incepe slideshow-ul
showNextSlide();
// Get the register and login buttons
const registerBtn = document.querySelector('.btn-register');
const loginBtn = document.querySelector('.btn-login');

// Add click event listeners to the buttons
registerBtn.addEventListener('click', () => {
  // Redirect the user to the registration page
  window.location.href = 'register.html';
});

loginBtn.addEventListener('click', () => {
  // Redirect the user to the login page
  window.location.href = 'https://example.com/login';
});

// Highlight the active button
const currentUrl = window.location.href;

if (currentUrl.includes('register')) {
  registerBtn.classList.add('active');
} else if (currentUrl.includes('login')) {
  loginBtn.classList.add('active');
}


