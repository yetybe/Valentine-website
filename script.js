const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");

let title = document.querySelector(".title");
let cuteImage = document.querySelector("#cute-image");
let cuteText = document.querySelector(".cute-text");
let midSide = document.querySelector(".mid-side");

noBtn.addEventListener("click" , function(){
    let fontSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    let currentPaddingY = parseInt(window.getComputedStyle(yesBtn).paddingTop);

    let newFoSize = fontSize + 40;
    let newPaddingY = currentPaddingY + 40;
    let newPaddingX = newPaddingY * 2;



    yesBtn.style.fontSize = newFoSize + "px";
    yesBtn.style.padding = `${newPaddingY}px ${newPaddingX}px ` ;


})

const frasesNo = ["Estas segura?" , "Muy segura?" , "Deveritas deveritas?.." ,"Me vas hacer llorar..", "Mucho muchito :c...." ,"Xikis porfavor..", "YA BASTA , PON QUE SI NOMAS >:C"];
let cont = 0;

noBtn.addEventListener("click" , function(){

    let aux = frasesNo[cont];
    noBtn.innerText = aux;
    cont++;


})

yesBtn.addEventListener("click" , function(){

    title.innerText = "Sí , sabia que acepatrí as de inmediato nwn!!";
    title.style.color = "#FF69B4";
    cuteText.style.display = "block";
    cuteImage.src = "https://media1.tenor.com/m/o_5RQarGvJ0AAAAC/kiss.gif";
    yesBtn.style.display ="none";
    noBtn.style.display ="none";
    midSide.style.display = "flex";
    midSide.style.flexDirection = "column";
    midSide.style.justifyContent = "center";
    midSide.style.alignItems = "center";
    midSide.style.gap = "40px";
    document.querySelector(".song-link").style.display = "block";
    document.querySelector(".container").style.paddingBottom = "20px";
    document.querySelector("#heart-logo").src = "https://cdn.pixabay.com/animation/2025/10/13/13/05/13-05-13-688_512.gif";
    document.querySelector("#heart-logo").style.width = "100px";
    document.querySelector("#heart-logo").style.height = "100px";
    document.querySelector(".top-side").style.gap = "20px";



    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["heart"],
        colors: ["#FFC0CB", "#FF69B4", "#FF1493", "#C71585"]
    };

    
    confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2
    });

    confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3
    });

    confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4
    });
});








