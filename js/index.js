let img7 = document.querySelector(".img7");

let img1 = document.querySelector(".img1");
let slider = document.querySelector(".slider");
let Xmark = document.querySelector(".fa-xmark");
let navUser = document.querySelector(".nav-user");
img7.addEventListener("click" , () =>{
    slider.classList.add("s7")
    slider.classList.remove("s1")
})
img1.addEventListener("click" , () =>{
    slider.classList.add("s1")
    slider.classList.remove("s7")
})
let clickPerfil = document.querySelector(".perfil");

clickPerfil.addEventListener("click" , () =>{
    navUser.classList.add("ativo")

})
Xmark.addEventListener("click" , () =>{
    navUser.classList.remove("ativo")
})
