import React from 'react';
import './App.css';
import Post from './components/Post/Post';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      arrayDePosts: [
        {nomeUsuario: 'Paulinha', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150' },
        {nomeUsuario: 'Milene', fotoUsuario: 'https://picsum.photos/id/15/50/50', fotoPost: 'https://picsum.photos/id/18/200/150' },
        {nomeUsuario: 'Astrodev', fotoUsuario: 'https://picsum.photos/id/1/50/50', fotoPost: 'https://picsum.photos/id/0/200/150' },
      ],
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    }
  }

  adicionaNovoPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    }

    const novoPosts = [...this.state.arrayDePosts, novoPost];

    this.setState({ arrayDePosts: novoPosts });
  }

  onChangeInputNomeUsuario = event => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  }

  onChangeInputFotoUsuario = event => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  }

  onChangeInputFotoPost = event => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render() {
   
      const containerDePosts =  this.state.arrayDePosts.map((post, index) => {
        return(
          <div className={'app-container'}>
          <Post 
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost={post.fotoPost}
          key={index}
          />
        </div>
        );
      }) 

     return (
      <div>
      
      <h3>Criar Post</h3>
      <input 
      value={this.state.valorInputNomeUsuario}
      onChange={this.onChangeInputNomeUsuario}
      placeholder={"Nome de Usuário"}
      />
      <input 
      value={this.state.valorInputFotoUsuario}
      onChange={this.onChangeInputFotoUsuario}
      placeholder={"Foto de Usuário"}
      />
      <input 
      value={this.state.valorInputFotoPost}
      onChange={this.onChangeInputFotoPost}
      placeholder={"Foto do Post"}
      />
      <button onClick={this.adicionaNovoPost}>Publicar</button>
      <div>{containerDePosts}</div>

      </div>

     );


  }
}

export default App;
