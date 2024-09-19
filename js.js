function adic(){
   const tarefa = document.getElementById('tarefas');
   const tarefaTexto = tarefas.value;

      if (tarefaTexto === ''){
        alert('Por favor, digite uma tarefa');
        return;
      }
 
    const li = document.createElement('li');
    li.textContent = tarefaTexto;

    li.onclick = function() {
        this.classList.toggle('completed');
    };

    document.getElementById('Lista').appendChild(li);
    tarefa.value = ``; //irá limpar o campo de entrada








}