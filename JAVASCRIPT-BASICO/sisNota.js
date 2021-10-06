function notas (nota){
    if(nota >= 90){
        return "A"
    }else if(nota >=80 && nota <= 89){
        return "B"
    }else if(nota >=70 && nota <= 79){
        return "c"
    }else if(nota >=60 && nota <= 69){
        return "D"
    }else if(nota <60){
        return "F"
    }

    return(nota)
}


console.log(notas(45))