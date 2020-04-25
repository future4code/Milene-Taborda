import React from 'react';
import { connect } from "react-redux";
import { push} from "connected-react-router";
import { routes } from '../Router/index';

import { HomeWrapper, Main, ButtonLogin } from './styles';
import Button from "@material-ui/core/Button";


function HomePage(props) {
  return (
    <HomeWrapper>
          <Main>
            <h1>VENHA EXPLORAR COM A GENTE!!</h1>
            <h2>LIBERDADE</h2>
            <h3>Está esperando por você!</h3>
            <p>Já pensou em viajar para um planeta? Isso seria incrível, né? Então essa é sua oportunidade de embarcar numa nave com a gente! Nós da FutureX iremos selecionar alguns candidatos para realizar esse sonho, faça já sua inscrição! </p>
            <ButtonLogin variant="contained" color="" onClick={props.goToLogin}>Login</ButtonLogin>
            <Button variant="contained" color="primary" onClick={props.goToForm}>Formulario</Button>
        </Main>
    </HomeWrapper>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    goToLogin: () => dispatch(push(routes.login)),
    goToForm: () => dispatch(push(routes.userForm))
  }
}

export default connect(
  null,
  mapDispatchToProps
) (HomePage)