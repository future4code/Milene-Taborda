import React from 'react';
import styled from 'styled-components';

export default function MessageForm() {
  return (
    <Container>
        <h3>O FORMULÁRIO ACABOU</h3>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
    </Container>
  );
}

const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
