const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("click" , function(){
    let fontSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    let currentPaddingY = parseInt(window.getComputedStyle(yesBtn).paddingTop);

    let newFoSize = fontSize + 20;
    let newPaddingY = currentPaddingY + 20;
    let newPaddingX = newPaddingY * 2;



    yesBtn.style.fontSize = newFoSize + "px";
    yesBtn.style.padding = `${newPaddingY}px ${newPaddingX}px ` ;


})
