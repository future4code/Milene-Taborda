import React from 'react';
import { connect } from "react-redux";
import { replace, push} from "connected-react-router";
import { routes } from '../Router/index'

import { HomeWrapper } from './styles';

function HomePage(props) {
  return (
    <HomeWrapper>
    <h1>HomePage</h1>
    <button onClick={props.goToLogin}>Login</button>
    <button onClick={props.goToForm}>Formulario</button>
    </HomeWrapper>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    goToLogin: () => dispatch(replace(routes.login)),
    goToForm: () => dispatch(push(routes.userForm))
  }
}

export default connect(
  null,
  mapDispatchToProps
) (HomePage)