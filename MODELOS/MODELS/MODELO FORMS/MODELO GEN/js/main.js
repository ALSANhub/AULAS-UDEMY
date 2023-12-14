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

function criaBotaoDel(li) {
    li.innerText += " ";
    const botaoDel = document.createElement('button')    ;
    botaoDel.innerText = "Apagar";
    botaoDel.setAttribute('class', 'apagar');
    botaoDel.setAttribute('title', 'Deseja DEL?')
    li.appendChild(botaoDel);
}
function criaTarefa(textoImput) {
    const li = criaLi();
    li.innerText = textoImput;
    tarefas.appendChild(li)
    limpaImput();
    criaBotaoDel(li)
    salvarTarefa();
}

addTarefa.addEventListener('click', function(){
    if (!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
    
});

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('apagar')) {
        console.log('Apagar Clicado');
        el.parentElement.remove();
        salvarTarefa();
    }
});

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefas of liTarefas) {
        let tarefaTexto = tarefas.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function addTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(tarefas);

for (const tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
}
    
}
addTarefasSalvas()