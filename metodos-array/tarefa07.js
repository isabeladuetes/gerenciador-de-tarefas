let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

console.log("Antes do Splice:");
console.table(tarefas);

//Extraindo as tarefas do índice 2 ao 4
let tarefasRemovidas = tarefas.splice(2, 2);

console.log("Depois do Splice:");
console.table(tarefas);

console.log("As tarefas removidas foram:", tarefasRemovidas);