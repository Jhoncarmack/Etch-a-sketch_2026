const body = document.querySelector("body");

const container = document.querySelector("#container");
const grid = document.createElement("div");
grid.id = "grid";
container.append(grid);

const gridButton = document.createElement("button");
const buttonText = document.createTextNode("new");
gridButton.appendChild(buttonText);

container.appendChild(gridButton);
gridButton.addEventListener("click", () => {
   alert("hi");
});
