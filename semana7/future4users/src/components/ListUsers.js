import React, {Component} from 'react';
import axios from 'axios'


// import { Container } from './styles';

export default class CreateUsers extends Component {
    state = {
        listUser: [ {"name": 'Milene'}, {"name": 'Milene'} ],
    }

    componentDidMount() {
        this.listarUsuarios();
    }

    listarUsuarios = () => {
        axios.get('https://us-central1-future-apis.cloudfunctions.net/api/users', 
            { headers: {
                'api-token': 'milene-taborda'
               }
            }
        ).then((res) => {
            const listaUserApi = res.data.result;
            console.log(listaUserApi)

            this.setState({listUser: listaUserApi });
        })
    }

    // deleteUser = () => {
    //     axios.delete(`https://us-central1-future-apis.cloudfunctions.net/api/users/:id` , 
    //          {
    //              headers : {
    //                  'api-token': 'milene-taborda'
    //              }, 
    //              params: this.state.listUser.id
    //         }
    //      ).then(res => {
    //          console.log('delete')
    //      }).catch(error => {
    //          alert(error);
    //      })
    //  }

    render() {
        return (
            <>
            <button onClick={this.props.onClickLogin}>Página de registro</button>

            <h3>Usuários Cadastrados</h3>
            <ul>
                {this.state.listUser.map((user, index) => {
                    return( 
                    
                      <li key={index}> {user.name} <span onClick={this.deleteUser(user.id)}>X</span> </li>
                    
                    )
                })}
            </ul>
            </>
          );
    }
}
