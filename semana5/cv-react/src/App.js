import React from 'react';
import './App.css';

import SectionTitle from './Components/SectionTitle/SectionTitle';
import BigCard from './Components/BigCard/BigCard';
import SmallCard from './Components/SmallCard/SmallCard';
import ImageButton from './Components/ImageButton/ImageButton';


function App() {
  return (
    <div className="App">

      <SectionTitle title={"Dados Pessoais"} />
      <BigCard image={require("./assets/ft4.png")}  title={"Atrodev"} span={"Oi, eu sou o Astrodev. Sou o chefe dos alunos da Future4. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."}/>
      <SmallCard i={"fas fa-envelope"} strong={"Email: "} span={"future4code.com.br"} />
      <SmallCard i={"fas fa-home"} strong={"Endereço: "} span={"Rua do Futuro, 4"} />
      <ImageButton i={"fas fa-chevron-down"} value={"Ver mais"}/>

      <SectionTitle title={"Experiências Profissionais"} />
      <BigCard image={require("./assets/ft4.png")}  title={"Future4"} span={"Formando desenvolvedores para o futuro!"}/>
      <BigCard image={require("./assets/ft4.png")}  title={"Outsmart"} span={"Criando apps incríveis para grandes clientes"}/>

      <SectionTitle title={"Minhas Redes"} />
      <ImageButton i={"fab fa-facebook-square"} value={"Facebook"} />
    </div>
  );
}

export default App;
