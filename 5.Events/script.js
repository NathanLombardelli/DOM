const _initTime = Date.now()

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  let div = document.createElement('div');
  div.className = "displayedsquare " + e.target.classList[1] ;
  div.onclick = clickOnGenerateSquare;
  document.getElementsByClassName('displayedsquare-wrapper')[0].append(div);
  let li = document.createElement('li');
  li.innerText = "[" + getElapsedTime() + "] Created a new " + e.target.classList[1] + " square";
  document.getElementsByTagName('ul')[0].append(li);

}

function clickOnGenerateSquare(e){
  alert(e.target.classList[1]);
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}


document.body.addEventListener('keypress', event=>{

  if(event.key === " "){
    let color = randomColor();
    document.body.style.backgroundColor = color;
    let li = document.createElement('li');
    li.innerText = "[" + getElapsedTime() + "] Change back ground color to : " + color;
    document.getElementsByTagName('ul')[0].append(li);
  }

  if(event.key === "l"){
    document.getElementsByTagName('ul')[0].innerHTML = "";
  }

  if(event.key === "s"){
    document.getElementsByClassName('displayedsquare-wrapper')[0].innerHTML = "";
  }

});

function randomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}
