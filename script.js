var body = document.getElementById("body");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var h3 = document.querySelector("h3");


color1.addEventListener("input", function(){   
    var str = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    body.style.backgroundImage = str;
    h3.textContent = str;
})


color2.addEventListener("input", function(){
    var str = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    body.style.backgroundImage = str;
    h3.textContent = str;
})