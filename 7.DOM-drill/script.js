let ul = document.getElementsByTagName('ul')[0];
let films = new Set();


for (let val of ul.childNodes){
    if(val.nodeType === 1) {
        if(val.textContent === "Fast and Furious"){
            ul.prepend(val);
        }

        setProp(val);

        films.add(val.textContent);
    }
}

/*****************  set property li ******************/

function setProp(val) {

    val.addEventListener('click', event =>{
        if(val.textContent === "Fast and Furious"){
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
        }else {
            alert(val.textContent);
        }
    });

    if(val.textContent === "Fast and Furious") {
        val.className = "important";
    }
}


/******************  sup duplicate  ******************/
ul.innerHTML = "";

for (let val of films){
    let li = document.createElement('li');
    li.textContent = val;
    setProp(li);
    if(val === "Fast and Furious"){
        ul.prepend(li);
    }else{
        ul.append(li);
    }
}

/************** Random tris *******************/

document.body.addEventListener('keyup', event =>{
    if (event.key === 'r'){
        let random = [...films];
        ul.innerHTML = "";

        random.sort(shambles);
        for (let val of random){
            let li = document.createElement('li');
            li.textContent = val;
            setProp(li);
            ul.append(li);

        }
    }

    if (event.key === 'd'){
        let li = document.createElement('li');
        li.textContent = "Fast and Furious";
        setProp(li);
        ul.prepend(li);
    }

});

/**************** methode de tris aléatoire ******************/
function shambles(a,b) {
    if (a === "Fast and Furious") {
        return -1; // Place "Fast and Furious" en première position
    } else if (b === "Fast and Furious") {
        return 1; // Place "Fast and Furious" en première position
    } else {
        return 0.5 - Math.random(); // Tri aléatoire pour les autres éléments
    }
}


/*****************  div ******************/

let div = document.body.insertBefore(document.createElement('div'),ul);


/***************** select *****************/

let select = document.createElement('select');

let impOption = document.createElement('option');
impOption.innerText ="important franchises";

let normalOption = document.createElement('option');
normalOption.innerText = "normal franchises";

select.append(normalOption,impOption);

div.append(select);


/******************  event select ****************/

select.addEventListener('change',event=>{

    if(select.selectedIndex === 1){

        for (let val of ul.childNodes){
            if(val.className !== "important"){
                val.style.visibility = "hidden";
            }
        }

    }else{
        for (let val of ul.childNodes){

            val.style.visibility = "";

        }
    }

});








