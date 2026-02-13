const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");

let title = document.querySelector(".title");
let cuteImage = document.querySelector(".cute-image");
let cuteText = document.querySelector(".cute-text");


noBtn.addEventListener("click" , function(){
    let fontSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    let currentPaddingY = parseInt(window.getComputedStyle(yesBtn).paddingTop);

    let newFoSize = fontSize + 40;
    let newPaddingY = currentPaddingY + 40;
    let newPaddingX = newPaddingY * 2;



    yesBtn.style.fontSize = newFoSize + "px";
    yesBtn.style.padding = `${newPaddingY}px ${newPaddingX}px ` ;


})

const frasesNo = ["Estas segura?" , "Muy segura?" , "Deveritas deveritas?.." ,"Si pones que no  , me pondre triste","Muy Triste..","Muyyyy tristeeeeeeeeeeeeee tristeeeeeee ...." ,"Xikis porfavor..", "YA BASTA , PON QUE SI NOMAS >:C"];
let cont = 0;

noBtn.addEventListener("click" , function(){

    let aux = frasesNo[cont];
    noBtn.innerText = aux;
    cont++;


})

yesBtn.addEventListener("click" , function(){

    title.innerText = "Si, sabia que dirias que si!!";
    cuteText.style.display = "block";
    cuteImage.src = "https://media1.tenor.com/m/o_5RQarGvJ0AAAAC/kiss.gif";
    yesBtn.style.display ="none";
    noBtn.style.display ="none";






})