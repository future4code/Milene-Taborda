import React, {Component} from 'react';
import axios from 'axios';

// import { Container } from './styles';

export default class CreateUsers extends Component {
    state = {
        inputValueName: '',
        inputValueEmail: '',
    }

    createUserName = () => {
        const body = {
            "name": this.state.inputValueName,
            "email": this.state.inputValueEmail,
        }

        axios.post('https://us-central1-future-apis.cloudfunctions.net/api/users', body, 
            {
                headers: {
                    'api-token': 'milene-taborda'
                }
            }
        ).then(() => {
            window.alert('Sucesso')
        }).catch(error => {
            window.alert(error)
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
            <>
            <button onClick={this.props.onClickLista}>Lista de Usuários</button>
            <input placeholder="Nome" onChange={this.onChangeInputName} value={this.state.inputValueName}/>
            <input placeholder="Email" onChange={this.onChangeInputEmail} value={this.state.inputValueEmail} />
            <button onClick={this.createUserName}>Criar</button>   
            </>
          );
    }
}
