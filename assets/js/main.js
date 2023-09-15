(function() {

function listaDeTarefa() {
    let btn = document.getElementById('adicionar');

    btn.addEventListener('click', function() {
        let listaDeTarefas = document.getElementById('listaDeTarefas');
        let inpValor = document.getElementById('inpTarefa').value;
        let criaLi = document.createElement('li');
        let criaP = document.createElement('p');

        criaP.classList.add('tarefaP');
        criaP.innerText = String(inpValor);
        criaLi.appendChild(criaP);
        listaDeTarefas.appendChild(criaLi);    
        
        document.getElementById('inpTarefa').value = '';
        document.getElementById('inpTarefa').focus();

        let btnApagar = document.createElement('button');
        btnApagar.innerText = 'Apagar';
        criaP.appendChild(btnApagar);

        btnApagar.addEventListener('click', () => listaDeTarefas.removeChild(criaLi));
        salvaTarefas();
    })
    return
}

listaDeTarefa();

})();