import React from 'react';
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from '../Router/index';

// import { Container } from './styles';

function ListTripsPage(props) {
  return (
    <>
    <h1>Lista viagens</h1>
    
    <br/>

    <button onClick={props.goToCreateTrip}>Criar Viagem</button>

    <br/>

    <button onClick={props.goToDetailsTrip}>detalhes</button>

    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    goToCreateTrip: () => dispatch(push(routes.createTrips)),
    goToDetailsTrip: () => dispatch(push(routes.datailsTrip))
  }
}

export default connect(
  null,
  mapDispatchToProps
) (ListTripsPage)

