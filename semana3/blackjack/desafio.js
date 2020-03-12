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
