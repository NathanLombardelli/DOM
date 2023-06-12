/*
*/
let title = document.getElementsByTagName("title")[0];
console.log(title.innerText);

title.innerText = "Modifying the DOM";

let body = document.body;
for (let val of body.children) {
    console.log(val);
}

body.style.backgroundColor = randomColor();

function randomColor() {
   return '#'+Math.floor(Math.random()*16777215).toString(16);
}


