import React, {Component} from 'react';
import styled from 'styled-components';



export default class DetailsUser extends Component {
    state = {
        
    };
  

    render() {
        return (
            <Container >
            <Button onClick={this.props.onClickLista()}>Voltar</Button>

                <ContainerList>
                    <ListRegister>
                    <h3>Detalhes</h3>
                    
                    </ListRegister>
                </ContainerList>
            </Container>
          );
    }
}

const Container = styled.div`
background: #131313;
height: 100vh;
`

const ContainerList = styled.ul`
  width: 50vw;
  height: 80vh;
  margin: 25px auto;
  background: #191919;
  border-radius: 10px;
  list-style-type: none;
  color: #eee;
  padding: 10px;
`;

const ListRegister = styled.div`
  
`

const Button = styled.button`
padding: 10px;
border: 0;
background: #2ecc71;
border-radius: 10px;
color: white;
margin: 25px 0 0 25px ;
`

