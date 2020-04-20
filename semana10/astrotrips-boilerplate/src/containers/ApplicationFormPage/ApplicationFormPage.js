import React from 'react';
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from '../Router/index';

// import { Container } from './styles';

function ApplicationFormPage(props) {
  return (
      <>
    <h1>Formulário com styled-components</h1>

    <button onClick={props.goBack}>Voltar</button>
    </>
  );
}

const mapDispatchToProps = dispatch => {
    return {
        goBack: () => dispatch(goBack())
    }
}

export default connect(
    null,
    mapDispatchToProps
) (ApplicationFormPage)
