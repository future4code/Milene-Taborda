enum historia{
    PREHISTORIA = "pre-Historia",
    IDADEANTIGA = "idade antiga",
    IDADEMEDIA = "idade média",
    IDADEMODERNA = "idade moderna",
    CONTEMPORANEA = "contemporanea"
}

function determinaPeriodo(ano: number, periodo?: string):string{

    if(periodo){
        if(periodo.toUpperCase() === "AC"){
            if(ano>=0 && ano<=476){
                return historia.IDADEANTIGA;
            }else if(ano>476 && ano<=1453){
                return historia.IDADEMEDIA;
            }else if(ano>1453 && ano<=1789){
                return historia.IDADEMODERNA
            }else if(ano>1789){
                return historia.CONTEMPORANEA
            }
        }else if(periodo.toUpperCase() === "AC"){
            if(ano>4000){
                return historia.PREHISTORIA;
            }else if(ano>=0 && ano<=4000){
                return historia.IDADEANTIGA;
            }
        }

    }else{
        if(ano>4000){
            return historia.PREHISTORIA;
        }else if(ano>=0 && ano<=4000){
            return historia.IDADEANTIGA;
        }
    }
}

console.log(determinaPeriodo(2020));