const lava = document.querySelector(".lava")
const numBubblesLava = 10;

function generateBlobAnimation(index, translateY) {
  return `
    @keyframes blob-${index}{
      0%, 100%{
        transform: translateY(-800);
      }
      50%{
        transform: translateY(${translateY});
      }
    }
  `;
}

for(let i = 0; i < numBubblesLava; i++){
  const blob = document.createElement("div");
  const translateY = `-${800+Math.random() * 800}%`;
  const index = i + 1;

  blob.classList.add("blob");
  lava.appendChild(blob);

  blob.style.width = `${10+Math.random() * 4}vw`;
  blob.style.height = `${10+Math.random() * 4}vh`;
  blob.style.bottom = `${-(60+Math.random() * 200)}%`;
  if(i % 2 !== 0){
    blob.style.left = `${Math.floor(Math.random() * 20) + 1}%`;
  } else {
    blob.style.right = `${Math.floor(Math.random() * 20) + 1}%`;
  }

  const animation = generateBlobAnimation(index, translateY);
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerHTML = animation;
  document.head.appendChild(styleSheet);

  blob.style.animation = `
    blob-${index} ${8+Math.random() * 2}s ease-in-out alternate infinite,
    wobble ${2+Math.random() * 2}s ease-in-out alternate infinite
  `;
}

