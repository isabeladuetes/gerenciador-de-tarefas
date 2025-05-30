let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

//Verificando se a tarefa "Ir à academia" está na lista e se não estiver, adicionando
if (tarefas.includes("Ir à academia")) {
    console.log("A lista já inclui essa tarefa: Ir à academia");
} else {
    tarefas.push('Ir à academia');
    console.log("Lista incluindo a tarefa ir à academia:", tarefas);
}
