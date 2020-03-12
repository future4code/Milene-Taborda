import comprarCarta from './naoMexer.js';

    let usuario = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    let computador = comprarCarta();
   
    let cartaUser = comprarCarta();
    let cartaComp = comprarCarta();

    let soma1 = usuario.valor + computador.valor;
    let soma2 = cartaUser.valor + cartaComp.valor;

    if(confirm("Quer iniciar uma nova rodada?")) {
      console.log("Bem vindo ao jogo de Blackjack!");
    
      console.log("Usuário - cartas: " ,usuario.texto, " " ,computador.texto, " - pontuação: ", soma1); 
      console.log("Computador - cartas: " ,cartaUser.texto, " " ,cartaComp.texto, " - pontuação: ", soma2); 
    } else {
      console.log("O jogo acabou!");
    }





