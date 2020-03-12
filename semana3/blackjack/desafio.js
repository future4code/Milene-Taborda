import comprarCarta from './naoMexer.js'

    let cartaUsuario1 = comprarCarta(); 
    let cartaUsuario2 = comprarCarta();
    
    let cartaComputador1 = comprarCarta();
    let cartaComputador2 = comprarCarta();

    let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
    let pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor;


    if(confirm("Quer iniciar uma nova rodada?")) {
      console.log("Bem vindo ao jogo de Blackjack!");
      while(cartaUsuario2.texto[0] === "A" && cartaUsuario1.texto[0] === "A" || cartaComputador1[0] === "A" && cartaComputador2[0] === "A") {
        cartaUsuario1 = comprarCarta(); 
        cartaUsuario2 = comprarCarta();
        
        cartaComputador1 = comprarCarta();
        cartaComputador2 = comprarCarta();
    
        pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
        pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor;
    } 

    if(confirm(
        "Suas cartas são " +cartaUsuario1.valor+ " " +cartaUsuario2.valor+ ". A carta revelada do cartaComputador1 é " +cartaComputador1.texto+ " ." +
        "\n"+  
        "Deseja comprar mais uma carta?"
    )) {
        if (pontuacaoUsuario === pontuacaoComputador || pontuacaoUsuario > 21 && pontuacaoComputador > 21) {
            console.log("Empate!")
          } else if (pontuacaoUsuario <= 21 && pontuacaoComputador <= 21) {
            if (pontuacaoUsuario > pontuacaoComputador) {
              console.log("O usuário ganhou! Pontuação: ", pontuacaoUsuario);
            } else {
              console.log("O Computador ganhou! Pontuação: ", pontuacaoComputador);
            }
          } else if (pontuacaoUsuario > 21) {
            console.log("O Computador ganhou! Pontuação: ", pontuacaoComputador);
          } else {
            console.log("O usuário ganhou! Pontuação: ", pontuacaoUsuario);
          }
        
        }
    } else {
        alert("O Computador ganhou!");
    }
