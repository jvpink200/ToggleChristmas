const body = document.getElementById("body");
const greeting = document.getElementById("greeting");
const christmasBtn = document.getElementById("christmas");
const snowBtn = document.getElementById("snow");

function christMas() {
    christmasBtn.addEventListener("click", function(){
        greeting.innerHTML = "🎅 Merry Christmas!";
        document.body.className = "christmas";
    });
}

christMas();

function snow() {
    snowBtn.addEventListener("click", function() {
        console.log("clicked Snow Button");
        greeting.innerHTML = "❄️ Let it Snow! ☃️ ";
        document.body.className = "snow";
    });
}

snow();