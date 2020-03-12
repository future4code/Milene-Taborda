import comprarCarta from './naoMexer.js'

    let cartaUsuario1 = comprarCarta(); 
    let cartaUsuario2 = comprarCarta();
    
    let cartaComputador1 = comprarCarta();
    let cartaComputador2 = comprarCarta();

    let pontuaçãoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
    let pontuaçãoComputador = cartaComputador1.valor + cartaComputador2.valor;


    if(confirm("Quer iniciar uma nova rodada?")) {
      console.log("Bem vindo ao jogo de Blackjack!");

      while(cartaUsuario2.texto[0] === "A" && cartaUsuario1.texto[0] === "A" || cartaComputador1[0] === "A" && cartaComputador2[0] === "A") {
        cartaUsuario1 = comprarCarta(); 
        cartaUsuario2 = comprarCarta();
        
        cartaComputador1 = comprarCarta();
        cartaComputador2 = comprarCarta();
    
        pontuaçãoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
        pontuaçãoComputador = cartaComputador1.valor + cartaComputador2.valor;
    } 

    if(confirm(
        "Suas cartas são " +cartaUsuario1.valor+ " " +cartaUsuario2.valor+ ". A carta revelada do cartaComputador1 é " +cartaComputador1.texto+ " ." +
        "\n"+  
        "Deseja comprar mais uma carta?"
    )) {
        if (pontuaçãoUsuario === pontuaçãoComputador || pontuaçãoUsuario > 21 && pontuaçãoComputador > 21) {
            console.log("Empate!")
          } else if (pontuaçãoUsuario <= 21 && pontuaçãoComputador <= 21) {
            if (pontuaçãoUsuario > pontuaçãoComputador) {
              console.log("O usuário ganhou! Pontuação: ", pontuaçãoUsuario);
            } else {
              console.log("O Computador ganhou! Pontuação: ", pontuaçãoComputador);
            }
          } else if (pontuaçãoUsuario > 21) {
            console.log("O Computador ganhou! Pontuação: ", pontuaçãoComputador);
          } else {
            console.log("O usuário ganhou! Pontuação: ", pontuaçãoUsuario);
          }
        
        }
    } else {
        alert("O Computador ganhou!");
    }
