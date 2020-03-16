import React from 'react';
import './App.css';
import './Global.css'

function App() {
  return (
    <div className="App">
       <header> 
    <div className="container-header"> 
    <i class="fas fa-bars"></i>
           <h1><i class="fab fa-youtube"></i>FutureTube</h1>
           <div className="search"><input type="text" placeholder="Pesquisar"/><i class="fas fa-search"></i></div>
           <h6></h6>
       </div>
       </header>
    
      <nav className="navbar">
        <ul className="menu">
            <li><a href="index.html">Início</a></li>
            <li><a href="">Em altas</a></li>
            <li><a href="">Inscrições</a></li>
            <li><a href="">Originais</a></li>
            <li><a href="">Bibliotecas</a></li>
            <li><a href="">Histórico</a></li>
        </ul>
    </nav>
    

        <section>
            <div><a href="../Details/Ireland.html"><img src={require("./assets/1.png")}></img></a><span>Ireland's Beauty</span></div>
            <div><a href="../Details/blood.html"><img src={require("./assets/2.png")}></img></a><span>Glóbulos Vermelho</span></div>
            <div><img src={require("./assets/3.png")}></img><span>Planeta Terra</span></div>
            <div><img src={require("./assets/4.png")}></img><span>Praia Maravilhosa</span></div>
            <div><img src={require("./assets/5.png")}></img><span>Férias tranquilas</span></div>
            <div><img src={require("./assets/6.png")}></img><span>Reino Selvagem</span></div>
            <div><img src={require("./assets/7.png")}></img><span>Galáxia</span></div>
            <div><img src={require("./assets/8.png")}></img><span>Curiosidades Espaciais</span></div>
        </section>

       <footer>
        <p>Feito com muito ♥ by Milene Taborda</p>
       </footer>
    
    </div>
  );
}

export default App;
