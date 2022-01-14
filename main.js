import BotaoConclui from "./componentes/concluiTarefa.js"
import BotaoDelata from "./componentes/deletaTarefa.js"

const criarTarefa = (evento) =>{
    evento.preventDefault() /* evita o comportamento padrão. 
    Neste caso atualizar/enviar para algum lugar a pagina. */
    
    const lista = document.querySelector("[data-list]")
    const input = document.querySelector("[data-form-input]")
    const valor = input.value 

    const tarefa = document.createElement("li")
    tarefa.classList.add("task")
    const conteudo = `<p class="content">${valor}</p>`
    
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    lista.appendChild(tarefa)
    tarefa.appendChild(BotaoDelata())
    input.value = " "

}

const novaTarefa = document.querySelector("[data-form-button]")

novaTarefa.addEventListener("click", criarTarefa)