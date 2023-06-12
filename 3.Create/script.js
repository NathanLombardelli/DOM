/*
*/

let names = ["Julien","Adeline","Bathsheba","Camille","Cedric","Clara","Corentin","Ilias","Jason","Jérôme","Lucie","Manon","Marius","Nicolas",
    "Ozlem","Pauline","Pietro","Robin","Rui","Sam","Sarah","Steeve","Tim","Youssef"];

let section = document.createElement("section");

for (let name of names){
    let para = document.createElement('p');
    para.innerText = name;
    let color = randomColor();
    para.style.backgroundColor = color;
    console.log(color);

    if(isTooDark(color)){
        para.style.color = "white";
    }else{
        para.style.color = "black";
    }

    section.appendChild(para);
}

document.getElementsByTagName("article")[0].appendChild(section);


RandomizeNames();

function RandomizeNames(){
    let fragment = document.createDocumentFragment();
    while (section.children.length > 0) {
        let index = Math.floor(Math.random() * section.children.length);
        fragment.appendChild(section.children[index]);
    }
    section.appendChild(fragment);
}



function randomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function isTooDark(hexcolor){
    let r = parseInt(hexcolor.substring(1,3),16);
    let g = parseInt(hexcolor.substring(3,5),16);
    let b = parseInt(hexcolor.substring(5,7),16);
    let lum = ((r*299)+(g*587)+(b*114))/1000;

    return lum < 125;
}
