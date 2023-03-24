// const bubbles = document.querySelector('.bubbles');
// const numStart = 18

// for(let i = 0; i < numStart; i++){
//   const bubble = document.createElement("div");
//   bubble.classList.add('bubble');

//   bubbles.appendChild(bubble)

//   bubble.style.setProperty("--size", `${10+Math.random()*4}rem`);
//   bubble.style.setProperty("--distance", `${12+Math.random()*4}rem`);
//   bubble.style.setProperty("--position", `${-5+Math.random()*110}%`);
//   bubble.style.setProperty("--time", `${3+Math.random()*2}s`);
//   bubble.style.setProperty("--delay", `${-1*(2+Math.random()*2)}s`);
// }

const lava = document.querySelector(".lava")
const numBubblesLava = 10;

for(let i = 0; i < numBubblesLava; i++){
  const blob = document.createElement("div");
  blob.classList.add("blob");
  if(i === (numBubblesLava - 2)){
    blob.classList.add("top");
  }
  if(i === (numBubblesLava - 1)){
    blob.classList.add("bottom");
  }
  lava.appendChild(blob);
}

