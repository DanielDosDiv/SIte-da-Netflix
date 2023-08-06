// var cadastroEmail =  window.prompt("Informe seu gmail para cadastrar")
// var cadastroPassword =  window.prompt("Informe sua senha para cadastrar")
// window.confirm("Seu Email é senha são " + cadastroEmail + cadastroPassword)
let btnCadastro = document.querySelector(".btn-Cadastro");
let btnEntrar = document.querySelector(".btn-entrar");

let btnEntendi = document.querySelector(".btn-entendi")
let alerta = document.querySelector(".alerta")
let conteinerAviso = document.querySelector(".conteiner-aviso")



btnEntrar.addEventListener("click" , ()=>{
    let cadastro = document.querySelector(".cadastro")
    cadastro.classList.add("paraEsquerda")
    alerta.classList.add("ativado")
    conteinerAviso.classList.add("ativado")
    console.log("ta chegando rapaizzz")
    
    console.log(`A senha do cadastro é ${passwordCadastro} e o login do cadastro é de ${emailCadastro}, Ja`)
})
btnEntendi.addEventListener("click" , ()=>{
    alerta.classList.remove("ativado")
    conteinerAviso.classList.remove("ativado")
})

// Dados da Conta
function VerificarDados(){
    let passwordCadastro = document.getElementById("password").value;
    let emailCadastro  = document.getElementById("email").value;
    // Dados  Login
    let passwordLogin = document.getElementById("passwordLogin").value;
    let emailLogin = document.getElementById("emailLogin").value;
    if(emailCadastro == emailLogin && passwordCadastro == passwordLogin){
        window.alert("acertou mizeravi")
        // console.log(emailCadastro + passwordCadastro + emailLogin + passwordLogin)
        location.href = "home.html"
        console.log(`A senha do cadastro é ${passwordCadastro} e o login do cadastro é de ${emailCadastro}, Ja`)
    }
    else{
        window.alert("Senha ou Login Incorretos")
    }
}
