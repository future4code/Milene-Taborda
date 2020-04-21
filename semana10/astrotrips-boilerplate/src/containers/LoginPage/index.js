import React, { Component } from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import {  routes } from '../Router'

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

  render() {
    const { email, password } = this.state;

    return (
      <LoginWrapper>
      
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button variant="contained" color="primary" onClick={this.props.goToListTrips}>Login</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToListTrips: () => dispatch(replace(routes.listTrips))
  }
}

export default connect(
  null, 
  mapDispatchToProps
) (LoginPage);
