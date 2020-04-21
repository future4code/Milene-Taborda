import React from 'react';
import { connect } from "react-redux";
import { goBack } from "connected-react-router";
import Header from '../../components/Header/Header';

import { CreateTripWrapper } from './styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

function CreateTripPage(props) {
  return (
    <CreateTripWrapper>
      <Header />

      <Button variant="contained" color="primary" onClick={props.goBack}>Lista viagens</Button>
    <div>
      <h1>Criar viagem</h1>
      <br />

    <TextField 
    label="Nome Completo"
    placeholder="Exemplo: Milene Taborda"
    />

    </div>
  
    </CreateTripWrapper>
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
