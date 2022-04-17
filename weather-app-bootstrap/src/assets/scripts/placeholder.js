let i = 0; 
let placeholder = "";
const txt = "Enter city name here"
const speed = 120;

function type()
{
    placeholder += txt.charAt(i);
    document.getElementById("seach-bar")
    .setAttribute("placeholder", placeholder);
    i++;
    setTimeout(type,speed);
}

type();