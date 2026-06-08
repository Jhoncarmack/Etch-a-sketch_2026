const body = document.querySelector("body");

const container = document.querySelector("#container");

const gridButton = document.createElement("button");
const buttonText = document.createTextNode("new");
gridButton.appendChild(buttonText);

container.appendChild(gridButton);

function randomColoring(gridColor) {
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);
   const randomColor = `rgb(${r}, ${g}, ${b})`;
   gridColor.style.backgroundColor = randomColor;
}
function dark(gridDark) {
   let currentOpacity = parseFloat(gridDark.style.opacity) || 0.0;
   currentOpacity += 0.1;
   currentOpacity = Number(currentOpacity.toFixed(1));
   if (currentOpacity > 1.0) {
      currentOpacity = 1.0;
   }
   gridDark.style.opacity = currentOpacity;
}
gridButton.addEventListener("click", () => {
   let userInput = prompt("몇 X 몇을 만들까요?", "0");
   container.querySelectorAll(".grid").forEach((grid) => grid.remove());
   if (Number(userInput) > 100) {
      alert("다시 입력하세요");
      return;
   }

   for (let i = 1; i <= userInput; i++) {
      for (let j = 1; j <= userInput; j++) {
         const grid = document.createElement("div");
         grid.classList.add("grid");
         grid.style.width = `calc(100% / ${userInput})`;
         grid.style.height = `calc(100% / ${userInput})`;
         grid.style.boxSizing = "border-box";
         container.appendChild(grid);
         grid.addEventListener("mouseover", () => {
            randomColoring(grid);
            dark(grid);
         });
      }
   }
});
