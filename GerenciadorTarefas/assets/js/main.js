
const tarefas = [];
let id = 0;

function zeroAEsquerda(num) { return num >= 10 ? num : `0${num}` }

function configuraData() {
    const dataAtual = new Date();

    const dia = zeroAEsquerda(dataAtual.getDate());
    const mes = zeroAEsquerda(dataAtual.getMonth() + 1);
    const ano = dataAtual.getFullYear();
    const hora = zeroAEsquerda(dataAtual.getHours());
    const min = zeroAEsquerda(dataAtual.getMinutes());
    const seg = zeroAEsquerda(dataAtual.getSeconds());

    const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
    return dataFormatada;
}


function atualizaContagemTarefas() {
    const totalTarefas = tarefas.length;
    const elementoContagem = document.querySelector('.contagem-tarefas');
    elementoContagem.textContent = `Total de Tarefas: ${totalTarefas}`;
}

function atualizaContagemTarefasConcluidas() {
    const tarefasFinalizadas = tarefas.filter(tarefa => tarefa.statusTarefa === 'Finalizado');
    const totalTarefasFinalizadas = tarefasFinalizadas.length;
    const elementoContagem = document.querySelector('.tarefas-concluidas');
    elementoContagem.textContent = `Total de Tarefas Concluídas: ${totalTarefasFinalizadas}`;
}

function criaTarefa() {
    const tarefa = document.querySelector('.nova-tarefa').value
    const lista = document.querySelector('.lista')
    tarefas.push({
        id: id +=1,
        dataHora: configuraData(),
        descricao: tarefa,
        statusTarefa: 'Pendente',
    })
    console.log(tarefas)
    lista.innerHTML +=
    `<div class="d-flex mb-3 gap-4 task_${id}">
    <input id="disabledInput recebe-tarefa" placeholder="${tarefa}" class="form-control tarefa_${id}" type="text" disabled>
    <div class="d-flex gap-2">
        <button onclick="finalizaTarefa(${id})" class="btn btn-success" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
            </svg>
        </button>
        <button onclick="apagaTarefa(${id})" class="btn btn-danger" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
        </button>
    </div>
    </div>`

    limpaInput();
    atualizaContagemTarefas();
}

function finalizaTarefa(id) {
    const tarefa = tarefas.find(tarefa => tarefa.id === id);
    const input = document.querySelector(`.lista .d-flex .tarefa_${id}`);

    if (tarefa) {
        tarefa.statusTarefa = 'Finalizado';
        input.classList.add('verde');
        atualizaContagemTarefasConcluidas()
    }
}

const input = document.querySelector('.container').querySelector('.d-flex').querySelector('.nova-tarefa')

input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        criaTarefa();
        atualizaContagemTarefas();
    }
})

function limpaInput() {
    input.value = '';
    input.focus();
}

function apagaTarefa(id) {
    document.addEventListener('click', function(e) {
        const el = e.target;
        const task = document.querySelector(`.task_${id}`);
        if (task && (el.classList.contains('btn-danger') || el.classList.contains('bi-trash'))) {
            task.remove();
        }
    });
}


