const input = document.getElementById("input")
const addFinal = document.getElementById("addFinal")
const removFinal = document.getElementById("removFinal")
const addInicio = document.getElementById("addInicio")
const removInicio = document.getElementById("removInicio")


let lista_nomes = ["Aléquis", "Ultron", "Kevinho"];
let listaTela = document.getElementById('listaTela')

function adicionarFinal(params) {
}

function mostrar_nomes(){

    for(let nome of lista_nomes){
    let item = document.createElement('li')
        item.innerText = nome
        listaTela.appendChild(item)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    mostrar_nomes()
})

addFinal.addEventListener("click", () => {
    let valorInput = input.value

    listaTela.innerHTML = ""

    lista_nomes.push(valorInput)
    mostrar_nomes()
})

addInicio.addEventListener("click", () => {
    let valorInput = input.value

    listaTela.innerHTML = ""

    lista_nomes.unshift(valorInput)
    mostrar_nomes()
})