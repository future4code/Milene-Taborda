import React, {Component} from 'react';
import styled from 'styled-components'
// import { Container } from './styles';

class GeneralData extends Component {
   constructor(props) {
       super(props)

       this.state = {
        arrayInfoPessoal: [
           {nome: "", idade: "", email: ""} 
           ],
           valorInputNome: "",
           valorInputIdade: "",
           valorInputEmail: "",
           arrayEnsinoMedio: [""]
        }
   }

//   guardaValorDosInputs = () => {
//       const nomePessoa = {
//            nome: this.state.valorInputNome,
//             idade: this.state.valorInputIdade,
//             email: this.state.valorInputEmail
//         }

//         const copiaArrayInfoPessoal = [...this.state.arrayInfoPessoal, nomePessoa]
    
//          this.setState = ({
//              arrayInfoPessoal: copiaArrayInfoPessoal
//          })
    
//     }

     render() {
        return (
            <Container>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <label>1. Qual o seu nome?</label>
                <input />
        
                <label>2. Qual sua idade?</label>
                <input />
        
                <label>3. Qual seu email?</label>
                <input />
        
                <label>4. Qual sua escolaridade?</label>
                <select name="escolaridade">
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
            </select>
            
            </Container>
        );
 }
}

const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`



export default GeneralData;
