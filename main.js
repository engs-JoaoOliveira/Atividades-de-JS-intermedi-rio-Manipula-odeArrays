const input = document.getElementById("input")
const addFinal = document.getElementById("addFinal")
const removFinal = document.getElementById("removFinal")
const addInicio = document.getElementById("addInicio")
const removInicio = document.getElementById("removInicio")

const contar = document.getElementById("contar")

const filtrar = document.getElementById("filtrar")
const letraMaiuscula = document.getElementById("letraMaiuscula")

let lista_nomes = ["Aléquis", "Ultron", "Kevinho"];
let listaTela = document.getElementById('listaTela')

function mostrar_nomes(lista = lista_nomes){
    listaTela.innerHTML = ""

    lista.forEach(nome => {
        let item = document.createElement('li')
        item.innerText = nome
        listaTela.appendChild(item)
    })

    contarNomes()
}

function contarNomes() {
    let contagem = 0

    lista_nomes.forEach(nome => {
        if (nome.length > 5) {
            contagem++
        }
    })

    contar.innerText =
        `Nomes com mais de 5 letras: ${contagem}`
}

document.addEventListener("DOMContentLoaded", () => {
    mostrar_nomes()
})

addFinal.addEventListener("click", () => {
    let valorInput = input.value

    lista_nomes.push(valorInput)
    mostrar_nomes()
})
removFinal.addEventListener("click", () => {

    lista_nomes.pop()
    mostrar_nomes()
})
addInicio.addEventListener("click", () => {
    let valorInput = input.value

    lista_nomes.unshift(valorInput)
    mostrar_nomes()
})
removInicio.addEventListener("click", () => {
    lista_nomes.shift()
    mostrar_nomes()
})
filtrar.addEventListener("click", () => {
    const filtrados = lista_nomes.filter(nome => nome.length > 5)
    mostrar_nomes(filtrados)
})
letraMaiuscula.addEventListener("click", () => {
    const nomesMaiusculos = lista_nomes.map(nome => nome.toUpperCase())
    mostrar_nomes(nomesMaiusculos)
})