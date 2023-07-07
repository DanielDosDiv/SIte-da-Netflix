let btnEntrar = document.querySelector(".btn-entrar");
let btnEntendi = document.querySelector(".btn-entendi")
let alerta = document.querySelector(".alerta")
let conteinerAviso = document.querySelector(".conteiner-aviso")


// Dados da Conta
let password = document.getElementById("password").value;
let email = document.getElementById("email").value;
btnEntrar.addEventListener("click" , ()=>{
    let cadastro = document.querySelector(".cadastro")
    cadastro.classList.add("paraEsquerda")
    alerta.classList.add("ativado")
    conteinerAviso.classList.add("ativado")
    console.log("ta chegando rapaizzz")
})
btnEntendi.addEventListener("click" , ()=>{
    alerta.classList.remove("ativado")
    conteinerAviso.classList.remove("ativado")
})
function VerificarDados(){
    if(password == password && email == email){
        window.alert("acertou mizeravi")
    }
    else{
        window.alert("Erouuu")
    }
}
