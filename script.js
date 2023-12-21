const nav = document.getElementById("nav");
const bar = document.getElementById("bar");
const closebar = document.getElementById("closebar");
const open = document.getElementById("open")
const close = document.getElementById("close")

function openNav(){
    nav.style.display = "block";
    // nav.style.transition = "10s";
    open.style.display = "none";
    close.style.display = "block";
    nav.style.transform = 'translateX(0px, 50px)'
   
}

function closeNav(){
    nav.style.display = "none";
    open.style.display = "block";
    close.style.display = "none";
   
    
}