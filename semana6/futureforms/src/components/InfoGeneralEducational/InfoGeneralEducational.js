import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

export default function InfoGeneralEducational() {
  return (
    <Container>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <h3>5. Por que você não terminou um curso de graduação?</h3>
                <input />
        
                <h3>6. Você fez algum curso complementar?</h3>
                <select name="escolaridade">
                <option>Nenhum</option>
                <option>Curso técnico</option>
                <option>Curso de inglês</option>
                </select>
    </Container>
  );
}

const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
