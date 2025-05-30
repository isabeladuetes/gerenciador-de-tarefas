let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

console.log("Antes do shift:");
console.table(tarefas);

// Removendo a primeira tarefa do array
let tarefaRemovida = tarefas.shift();

console.log("Depois do shift:");
console.table(tarefas);

console.log("Tarefa removida:", tarefaRemovida);