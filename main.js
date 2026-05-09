const input = document.getElementById("input")
const addFinal = document.getElementById("addFinal")
const removFinal = document.getElementById("removFinal")
const addInicio = document.getElementById("addInicio")
const removInicio = document.getElementById("removInicio")
const contar = document.getElementById("contar")


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

    listaTela.innerHTML = ""

    lista_nomes.push(valorInput)
    mostrar_nomes()
})
removFinal.addEventListener("click", () => {
    listaTela.innerHTML = ""

    lista_nomes.pop()
    mostrar_nomes()
})
addInicio.addEventListener("click", () => {
    let valorInput = input.value

    listaTela.innerHTML = ""

    lista_nomes.unshift(valorInput)
    mostrar_nomes()
})
removInicio.addEventListener("click", () => {
    listaTela.innerHTML = ""

    lista_nomes.shift()
    mostrar_nomes()
})