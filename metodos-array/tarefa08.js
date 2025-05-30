let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

console.log("Antes do Splice:");
console.table(tarefas);

//Removendo a tarefa no índice 3 e substituimdo por uma nova tarefa
let tarefaRemovida = tarefas.splice(3, 1);

console.log("Depois do Splice:");
tarefas.splice(3,0, "Dar aula no SENAI");
console.table(tarefas);

console.log("As tarefaa removida foi:", tarefaRemovida);