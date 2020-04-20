import React from 'react';
import { connect } from "react-redux";
import { goBack } from "connected-react-router";
import { routes } from '../Router/index'

// import { Container } from './styles';

function TripDetailsPage(props) {
  return (
      <>
    <h1>Detalhes viagem</h1>

    <button onClick={props.goBack}>Voltar</button>
    </>
  );
}

const mapDispatchToProps = dispatch => {
    return {
        goBack: () => dispatch(goBack())
    }
}

export default  connect(
    null,
    mapDispatchToProps
  ) (TripDetailsPage)