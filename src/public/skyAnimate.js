const sky = document.querySelector('.sky');
const numStart = 50

// Define una función que agrega la clase 'animate' a las estrellas


// Agrega la clase 'animate' a las estrellas después de que se cargue la página
for(let i = 0; i < numStart; i++){
  const star = document.createElement("div");
  star.classList.add('star');

  function animateStars() {
    star.forEach(star => star.classList.add('twinkle'));
  }

  sky.appendChild(star)
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  window.addEventListener('load', animateStars);
}

