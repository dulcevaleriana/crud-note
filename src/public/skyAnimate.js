const bubbles = document.querySelector('.bubbles');
const numStart = 18

// Define una función que agrega la clase 'animate' a las estrellas


// Agrega la clase 'animate' a las estrellas después de que se cargue la página
for(let i = 0; i < numStart; i++){
  const bubble = document.createElement("div");
  bubble.classList.add('bubble');

  bubbles.appendChild(bubble)
  // bubble.style.size = `${2+Math.random()*4}rem`;
  // bubble.style.distance = `${6+Math.random()*4}rem`;
  // bubble.style.position = `${-5+Math.random()*110}%`;
  // bubble.style.time = `${2+Math.random()*2}s`;
  // bubble.style.delay = `${-1*(2+Math.random()*2)}s`;

  bubble.style.setProperty("--size", `${2+Math.random()*4}rem`);
  bubble.style.setProperty("--distance", `${6+Math.random()*4}rem`);
  bubble.style.setProperty("--position", `${-5+Math.random()*110}%`);
  bubble.style.setProperty("--time", `${2+Math.random()*2}s`);
  bubble.style.setProperty("--delay", `${-1*(2+Math.random()*2)}s`);
}

