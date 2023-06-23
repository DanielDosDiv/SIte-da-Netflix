let hidden = document.querySelector("body");
        hidden.classList.add("hiddendesativado")
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
        
        
        let trocarUsuario = document.querySelector(".TrocarUsuario");
        let pRodrigo = document.querySelector(".pRodrigo");
        let pBolsonaro = document.querySelector(".pBolsonaro");
        let pStalin = document.querySelector(".pStalin");
        let pJames = document.querySelector(".pJames");
        let usuario = document.querySelector(".usuarios");
        let ClickTrocarConta = document.querySelector(".ClickTrocarConta");
        
        trocarUsuario.classList.add("ativado")
        usuario.addEventListener("click" , ()=>{
            trocarUsuario.classList.remove("ativado")
            trocarUsuario.classList.add("desativado")
        })
        pRodrigo.addEventListener("click" , ()=>{
            pRodrigo.classList.toggle("userSelecionado")
            trocarUsuario.classList.remove("ativado")
            trocarUsuario.classList.add("desativado")
            console.log("Chegeui")
        
            hidden.classList.remove("hiddendesativado")
        
        })
        pBolsonaro.addEventListener("click" , ()=>{
            pBolsonaro.classList.toggle("userSelecionado")
            trocarUsuario.classList.remove("ativado")
            trocarUsuario.classList.add("desativado")
            
            hidden.classList.remove("hiddendesativado")
        
        })
        pStalin.addEventListener("click" , ()=>{
            pStalin.classList.toggle("userSelecionado")
            trocarUsuario.classList.remove("ativado")
            trocarUsuario.classList.add("desativado")
        
            hidden.classList.remove("hiddendesativado")
        
        })
        pJames.addEventListener("click" , ()=>{
            pJames.classList.toggle("userSelecionado")
            trocarUsuario.classList.remove("ativado")
            trocarUsuario.classList.add("desativado")
        
            hidden.classList.remove("hiddendesativado")
        
        })
        ClickTrocarConta.addEventListener("click" , ()=>{
            trocarUsuario.classList.remove("desativado")
            trocarUsuario.classList.add("ativado")
            navUser.classList.remove("ativo")
            console.log("Chegeui")
        
            hidden.classList.add("hiddendesativado")
        
        })
        