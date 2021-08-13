//var alunos = new Array("Igor", "Rodrigo", "Claudia", "Ana")
alunos = ["Igor", "Rodrigo", "Claudia", "Ana"]


/*for (var i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
}*/

/*for (var i in alunos) {     in pega o valor do index 0,1,2,3
    console.log(alunos[i])
}*/

for (var aluno of alunos) { //of Pega o elemento do array
    console.log(aluno)
}