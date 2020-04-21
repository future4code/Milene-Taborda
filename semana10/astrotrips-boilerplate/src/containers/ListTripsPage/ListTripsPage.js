import React from 'react';
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from '../Router/index';

import Header from '../../components/Header/Header'

import { ListPageWrapper, Main } from './styles';
import Button from "@material-ui/core/Button";

function ListTripsPage(props) {
  return (
    <ListPageWrapper>
       <Button variant="contained" color="primary" onClick={props.goToCreateTrip}>Criar Viagem</Button>
    <Header />

      <h1>Lista viagens</h1>
    <Main>
        <ul>
          <li>
            <span>blablabla</span>
              <button onClick={props.goToDetailsTrip}>detalhes</button>
          </li>
        </ul>

        <ul>
          <li>
            <span>blablabla</span>
              <button onClick={props.goToDetailsTrip}>detalhes</button>
          </li>
        </ul>

        <ul>
          <li>
            <span>blablabla</span>
              <button onClick={props.goToDetailsTrip}>detalhes</button>
          </li>
        </ul>
        <ul>
          <li>
            <span>blablabla</span>
              <button onClick={props.goToDetailsTrip}>detalhes</button>
          </li>
        </ul>
    </Main>

    </ListPageWrapper>
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

