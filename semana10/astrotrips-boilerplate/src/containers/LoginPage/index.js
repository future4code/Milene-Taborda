import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from '../../actions';

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LoginWrapper  } from './styles'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = event => {
    event.preventDefault();

    this.props.login(this.state.email, this.state.password);
    console.log(this.state)
  }

  render() {
    const { email, password } = this.state;

    return (
      <>
      <LoginWrapper onSubmit={this.handleLogin}>
      
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
          required
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
          required
        />
        <Button variant="contained" color="primary" type="submit">Login</Button>
      </LoginWrapper>
    </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(login(email, password))
})

export default connect(
  null, 
  mapDispatchToProps
) (LoginPage);
