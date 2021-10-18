function aluno(nome, n1, n2){
    
        this.nome = nome,
        this.nota1 = n1,
        this.nota2 = n2,
        this.media = function () {
            return(this.nota1 + this.nota2) / 2
        
    }
}


var a = new aluno("Igor", 6, 5)
var a = new aluno ("Julia", 4, 8)

console.log(a.media())






/*var turma = [
    criarAluno("Igor", 9, 8),
    criarAluno("ROdrigo", 6, 5),
    criarAluno("Bruno", 3, 10)
]

var aluno = turma[2]


turma.forEach(function (elemento){
    console.log(elemento)
})

for (var aluno of turma) {
    console.log(aluno)
}
OUTRA FORMA DE PERCORRER O OBJETO TURMA
*/