/*
*/

let firstInput = document.getElementsByTagName('input')[0];

firstInput.addEventListener('keyup',event=>{

    if(event.key !== "Shift" && event.key !== "Control" && event.key !== "Alt" && event.key !== "AltGraph" && event.key !== "Backspace" && event.key !== "Enter" && event.key !== "Meta") {
        document.getElementById("display-firstname").append(document.createTextNode(event.key));
    }

});


let secondInput = document.getElementsByTagName('input')[1];

secondInput.addEventListener('keyup',event=>{

    console.log(Number(secondInput.value));

    if(Number(secondInput.value) < 18 ) {
        document.getElementById("a-hard-truth").style.visibility = "hidden";
    }else {
        document.getElementById("a-hard-truth").style.visibility = "";
    }

});

let pwd = document.getElementById("pwd");
let pwdC =  document.getElementById("pwd-confirm");


pwd.addEventListener('keyup',event=> {

    if(pwd.value.length < 6){
        pwd.style.color = "red";
    }else{
        pwd.style.color = "black";
    }

});

pwdC.addEventListener('keyup',event=> {

    if(pwdC.value.length < 6 || pwd.value !== pwdC.value ){
        pwdC.style.color = "red";
    }else{
        pwdC.style.color = "black";
    }

});


let select = document.getElementById("toggle-darkmode");

select.addEventListener('change', event=>{

    if(select.selectedIndex === 0 ){
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
    }else{
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
    }
});

