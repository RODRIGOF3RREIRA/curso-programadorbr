var nomes=["Rodrigo","Igor"];
var notasA=[4.3,8,2];
var notasB=[7,9,3];

function media(n1,n2){
    return(n1+n2)/2
}
function passou(media){
    if (media >= 7){
        return "Aprovado"
    }else{
        return "Reprovado"
    }
}

for(var index in nomes){
    
    var nota1 = notasA[index]
    var nota2 = notasB[index]

    var m = media(nota1, nota2)

    console.log(nomes[index] + " - " + nota1 +" - " + nota2 + " - "
    + media(nota1, nota2) + " Resultado: " + passou(m))
}
