const divImagemPrincipal = document.querySelector("#imagem-principal")
const imagemPrincipal = divImagemPrincipal.querySelector("img")
const textoAlternativo = divImagemPrincipal.querySelector(".texto-alternativo")
const btnProximo = divImagemPrincipal.querySelector(".proximo")
const btnAnterior = divImagemPrincipal.querySelector(".anterior")

let idImagemAtiva = 0

const proximaImagem = function() {
    idImagemAtiva++
    if(idImagemAtiva >= todasImagens.lenght ) idImagemAtiva = 0
    selecionarImagem()
}

const voltarImagem = function() {
    idImagemAtiva--
    if(idImagemAtiva < 0) idImagemAtiva = todasImagens.lenght - 1
    selecionarImagem()
}

const selecionarImagem = function() {
    imagemPrincipal.src = todasImagens[idImagemAtiva].src
}
