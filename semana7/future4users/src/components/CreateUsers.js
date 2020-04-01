import React, {Component} from 'react';
import axios from 'axios';
import styled  from 'styled-components'

const baseURL = 'https://us-central1-future-apis.cloudfunctions.net/api';


export default class CreateUsers extends Component {
    state = {
        inputValueName: '',
        inputValueEmail: '',
    }

    createUserName = () => {
        const body = {
            name: this.state.inputValueName,
            email: this.state.inputValueEmail,
        }

        axios.post(`${baseURL}/users`, body, 
            {
                headers: {
                    'api-token': 'milene-hamilton'
                }
            }
        ).then(() => {
            window.alert('Usuário criado com sucesso!')
        }).catch(() => {
            window.alert('Erro ao realizar o cadastro!')
        })
    }

    onChangeInputName = (e) => {
        this.setState({ inputValueName: e.target.value })
    }

    onChangeInputEmail = (e) => {
        this.setState({ inputValueEmail: e.target.value })
    }

    render() {
          return (
            <Container>
            <Button onClick={this.props.onClickLista}>Lista de Usuários</Button>
            <ContainerRegister>
            <h1>Registre-se</h1>
            <Input placeholder="Nome" onChange={this.onChangeInputName} value={this.state.inputValueName}/>
            <Input placeholder="Email" onChange={this.onChangeInputEmail} value={this.state.inputValueEmail} />
            <ButtonCreate onClick={this.createUserName}>Criar</ButtonCreate>   
            </ContainerRegister>
            </Container>
          );
    }
}

const Container = styled.div`
background: #131313;
height: 100vh;
color: #eee;
`

const ContainerRegister = styled.div`
    width: 300px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #191919;
    text-align: center;
`

const ButtonCreate = styled.button `
border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;

    :hover {
        background: #2ecc71;
    }
`
const Input = styled.input`
border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;

    :focus {
        width: 280px;
        border-color: #2ecc71;
    }
`
const Button = styled.button`
padding: 10px;
border: 0;
background: #2ecc71;
border-radius: 10px;
color: white;
margin: 25px 0 0 25px ;
`