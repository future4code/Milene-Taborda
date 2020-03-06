import comprarCarta from './naoMexer.js'

    let usuario = comprarCarta(); 
    let cartaUser = comprarCarta();
    
    let computador = comprarCarta();
    let cartaComp = comprarCarta();

    let soma1 = usuario.valor + cartaUser.valor;
    let soma2 = computador.valor + cartaComp.valor;


    if(confirm("Quer iniciar uma nova rodada?")) {
      console.log("Bem vindo ao jogo de Blackjack!");

      while(cartaUser.texto[0] === "A" && usuario.texto[0] === "A" || computador[0] === "A" && cartaComp[0] === "A") {
        usuario = comprarCarta(); 
        cartaUser = comprarCarta();
        
        computador = comprarCarta();
        cartaComp = comprarCarta();
    
        soma1 = usuario.valor + cartaUser.valor;
        soma2 = computador.valor + cartaComp.valor;
    } 

    if(confirm(
        "Suas cartas são " +usuario.valor+ " " +cartaUser.valor+ ". A carta revelada do computador é " +computador.texto+ " ." +
        "\n"+  
        "Deseja comprar mais uma carta?"
    )) {
        if (soma1 === soma2 || soma1 > 21 && soma2 > 21) {
            console.log("Empate!")
          } else if (soma1 <= 21 && soma2 <= 21) {
            if (soma1 > soma2) {
              console.log("O usuário ganhou! Pontuação: ", soma1);
            } else {
              console.log("O computador ganhou! Pontuação: ", soma2);
            }
          } else if (soma1 > 21) {
            console.log("O computador ganhou! Pontuação: ", soma2);
          } else {
            console.log("O usuário ganhou! Pontuação: ", soma1);
          }
        
        }
    } else {
        alert("O computador ganhou!");
    }



  

    




    /*
    
    let verificaCartaUser = soma1;
    let verificaCartaComp = soma2;
    let novaCarta = comprarCarta();
    let cartas = [usuario, cartaUser];
    let cartasComp = [computador, cartaComp];

    for(let i =0; i < 21; i++) {
        if(verificaCartaUser < verificaCartaComp) {
            cartas.push(novaCarta);
            verificaCartaUser += novaCarta.valor;
        }

        confirm(
            "Suas cartas são " +cartas[0].valor+ " " +cartas[1].texto+ " " +cartas[2].texto+ ". A carta revelada do computador é " +computador.texto+ " " +cartaComp.texto+ " ." +
            "\n"+  
            "Deseja comprar mais uma carta?");
        
            if(verificaCartaUser > 21) {
                alert("Computador ganhou!");
            } else if(verificaCartaUser === 21) {
                    alert("Usuário ganhou!");
            } else if (verificaCartaUser > verificaCartaComp) {
                alert("Computador ganhou!");
            }
            

            
        
    }
    

   
    console.log("Usuário - cartas: " ,usuario.texto, " " ,cartaUser.texto, " " ,novaCarta.texto, " - pontuação: ", soma1 + novaCarta.valor); 

    
     // console.log("Usuário - cartas: " ,usuario.texto, " " ,cartaUser.texto, " - pontuação: ", soma1); 
      console.log("Computador - cartas: " ,computador.texto, " " ,cartaComp.texto, " - pontuação: ", soma2);  
    
    } else {
      console.log("O jogo acabou!");
    }

*/