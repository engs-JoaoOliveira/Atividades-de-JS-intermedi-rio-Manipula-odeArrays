let lista_nomes = ["Aléquis", "Ultron", "Kevinho"];

function mostrar_nomes(){
    let listaTela = document.getElementById('listaTela')

    for(let nome of lista_nomes){
    let item = document.createElement('li')
        item.innerText = nome
        listaTela.appendChild(item)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    mostrar_nomes()
})