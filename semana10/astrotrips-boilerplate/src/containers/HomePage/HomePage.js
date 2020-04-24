import React from 'react';
import { connect } from "react-redux";
import { replace, push} from "connected-react-router";
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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora enim repellendus numquam autem iste eaque illum corrupti ab magni obcaecati, laboriosam sunt, veritatis, similique perferendis. Odio deleniti molestias porro illum!</p>
            <ButtonLogin variant="contained" color="" onClick={props.goToLogin}>Login</ButtonLogin>
            <Button variant="contained" color="primary" onClick={props.goToForm}>Formulario</Button>
        </Main>
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