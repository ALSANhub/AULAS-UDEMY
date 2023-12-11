const novaTarefa = document.querySelector('.nova-tarefa');
const addTarefa = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function limpaImput() {
    novaTarefa.value = '';
    novaTarefa.focus();    
}

novaTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
    }
});

function criaTarefa(textoImput) {
    const li = criaLi();
    li.innerText = textoImput;
    tarefas.appendChild(li)
    limpaImput();
}

addTarefa.addEventListener('click', function(){
    if (!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
    
});