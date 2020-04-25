import React, { Component } from 'react';
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from '../Router/index';

import { ListPageWrapper, Main } from './styles';
import Button from "@material-ui/core/Button";
import {  getTrips, getTripId } from '../../actions';


class ListTripsPage extends Component{
  componentDidMount() {
    const token = localStorage.getItem('token')

    if (token === null) {
      this.props.goToLogin();
    }

    this.props.getAllTrips();
  }

  handleTripId = (id) => {
    this.props.getTripId(id)
    this.props.goToDetailsTrip()
  }

  render() {
  return (
    <ListPageWrapper>
       <Button variant="contained" color="primary" onClick={this.props.goToCreateTrip}>Criar Viagem</Button>
    
      <h1>Lista viagens</h1>
    <Main>
      <ul>
            {this.props.trips && this.props.trips.map(trips => {
              return (
                <li>
                    <strong> Viagem: {trips.name}</strong> 
                    <p>Descrição: {trips.description} </p>
                    <p>Planeta: {trips.planet}</p>
                    <p>Duração: {trips.durationInDays} dias</p>
                    <p>Data: {trips.date}</p>
                    <button onClick={() => {this.handleTripId(trips.id)}}>detalhes</button>
                </li>
              )
            })}
          </ul>
      
    </Main>

    </ListPageWrapper>
  );
 }
}

const mapStateToProps = state => ({
  trips: state.data.trips,
});

const mapDispatchToProps = dispatch => {
  return {
    getAllTrips: () => dispatch(getTrips()),
    getTripId: (id) => dispatch(getTripId(id)),
    goToCreateTrip: () => dispatch(push(routes.createTrips)),
    goToDetailsTrip: (id) => dispatch(push(routes.datailsTrip)),
    goToLogin: () => dispatch(replace(routes.login)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (ListTripsPage)

