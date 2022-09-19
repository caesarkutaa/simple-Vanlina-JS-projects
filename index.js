const colors = ["Red", "Green", "Blue", "rgba(133,122,200)","f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnB = document.getElementById("btn")
const colorR = document.querySelector(".color")
const heroB = document.getElementById("hero")
const colorsB = document.querySelector(".colors")


btnB.addEventListener("click", function(){
    const randomNumber = getrandonNumber()
    document.body.style.backgroundColor = colors[randomNumber];
    colorR.textContent = colors[randomNumber]
})
 
heroB.addEventListener("click", function(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[gethexNumber()];
    }
    colorsB.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
})



 function getrandonNumber(){
    return Math.floor(Math.random() * colors.length);
    
}

function gethexNumber(){
    return Math.floor(Math.random() * hex.length);
    
}

