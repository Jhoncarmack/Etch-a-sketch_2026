const body = document.querySelector("body");

const container = document.querySelector("#container");

const gridButton = document.createElement("button");
const buttonText = document.createTextNode("new");
gridButton.appendChild(buttonText);

container.appendChild(gridButton);
gridButton.addEventListener("click", () => {
   const userInput = prompt("몇 X 몇을 만들까요?", "0");
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
      }
   }
});
