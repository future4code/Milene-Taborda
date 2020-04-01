import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components';

const baseURL = 'https://us-central1-future-apis.cloudfunctions.net/api';

export default class ListUsers extends Component {
    state = {
        listUser: [],
    };

    componentDidMount() {
        this.listarUsuarios();
    };

    listarUsuarios = () => {
        axios.get(`${baseURL}/users`, 
            { headers: {
                'api-token': 'milene-hamilton'
               }
            }
        ).then((res) => {
            this.setState({ listUser: res.data.result });
        });
    };


    deleteUser = (id) => {
        
            axios.delete(`${baseURL}/users/${id}` , 
            {
                headers : {
                    'api-token': 'milene-hamilton'
                }, 
           }
        ).then(() => {
          this.listarUsuarios();
        }).catch(() => {
            alert('Erro')
        });
    }
   


    render() {
        return (
            <Container >
            <Button onClick={this.props.onClickLogin}>Página de registro</Button>

            <ContainerList>
            <ListRegister>
            <h3>Usuários Cadastrados</h3>
                {this.state.listUser.map((user, index) => {
                    return( 
                      <ContainerItens key={index}> 
                            {user.name} 
                            <Delete onClick={() => {if(window.confirm("Deseja realmente deletar o usuário?")) this.deleteUser(user.id)}}><i class="far fa-trash-alt"></i></Delete> 
                            <Details onClick={() => this.props.onClickDetails()} >Detalhes</Details> 
                      </ContainerItens>
                    )
                })}
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
  display: flex;
  flex-direction: column;
  margin: 0 15px;
`

const ContainerItens = styled.li`
width: 100%;
margin: 5px auto; 
padding: 5px;
border-bottom: 2px solid #3498db;
`

const Delete = styled.span`
float: right;
`;

const Details = styled.button`
float: right;
margin-right: 15px;
padding: 5px 10px;
border: 0;
background: #2ecc71;
border-radius: 10px;
`


const Button = styled.button`
color: white;
padding: 10px;
border: 0;
background: #2ecc71;
border-radius: 10px;
margin: 25px 0 0 25px ;
`
