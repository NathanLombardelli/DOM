/*
*/


let ol = document.getElementsByTagName('ol')[0];
let last = ol.children[ol.children.length-1];

// ol.insertBefore(last,ol.children[0]); //aussi ok
ol.prepend(last);

let secondSection = document.getElementsByTagName('section')[1];
let thirdSection = document.getElementsByTagName('section')[2];

let thirdTitle = thirdSection.getElementsByTagName('h2')[0];
let secondTitle = secondSection.getElementsByTagName('h2')[0];

secondSection.prepend(thirdTitle);

thirdSection.getElementsByTagName('div')[0].prepend(secondTitle);

let lastSection = document.getElementsByTagName('section')[document.getElementsByTagName('section').length-1];

lastSection.remove();