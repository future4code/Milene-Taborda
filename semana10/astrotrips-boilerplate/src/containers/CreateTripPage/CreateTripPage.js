import React from 'react';
import { connect } from "react-redux";
import { goBack } from "connected-react-router";

// import { Container } from './styles';

function CreateTripPage(props) {
  return (
    <>
    <h1>Criar viagem</h1>
    <br />
    <button onClick={props.goBack}>Lista viagens</button>
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
) (CreateTripPage);
