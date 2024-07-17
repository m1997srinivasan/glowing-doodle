var backcolour=document.getElementById("bgcolour")
// var button=document.getElementById("btn1")
button.addEventListener("click",generator)




function generator()
{
    var symbols;
    var colour;
    symbols="0123456789ABCDEF";
    colour="#"
    for (let i = 0; i <6; i++) {
        colour = colour+symbols[Math.floor(Math.random()*16)];
        
    }
    backcolour.style.backgroundColor=colour
    
}