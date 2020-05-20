import React, {Component} from 'react';
import { connect } from "react-redux";
import { goBack, replace } from "connected-react-router";
import { routes } from '../Router/index';
import { getTripDetail, getTripInfo } from '../../actions/index';
import { decideCandidate } from '../../actions';

import { DetailsWrapper } from './styles';
import Button from "@material-ui/core/Button";

class TripDetailsPage extends Component{

  componentDidMount() {
    const token = localStorage.getItem('token')

    if (token === null) {
      this.props.goToLogin();
    }

    this.props.getTripDetails(this.props.tripId, localStorage.getItem('token'))
  }

  render() {
    
    return (
				<DetailsWrapper>
          <Button variant="contained" color="primary"  onClick={this.props.goBack}>Lista viagens</Button>

         <h1>Detalhes da viagem</h1>
         <p><strong>Nome da viagem: </strong>{this.props.tripInfo.name} </p>
         <p><strong>Planeta: </strong>{this.props.tripInfo.planet}</p>
        

        <h3>Candidatos: </h3>
        {(this.props.tripInfo.candidates) ? (
           this.props.tripInfo.candidates &&  this.props.tripInfo.candidates.map(candidate => {
            return (
              <div key={candidate.id}>
               <p>Nome : </p> <p> {candidate.name}</p>
               <p>Idade : </p> <p>{candidate.age}</p>
               <p>País : </p> <p> {candidate.country}</p>
               <p>Profissão : </p> <p> {candidate.profession}</p>
               <p>Motivo : </p> <p>{candidate.applicationText}</p>

               <br/> <button onClick={() => this.props.decideCandidate(this.props.tripInfo.id, candidate.id, localStorage.getItem('token') )}>Aprovar</button>
              </div>
            )
          }) 
        ) :  <h3>Não há candidatos</h3> }

        <h3>Aprovados</h3>
        {(this.props.tripInfo.approved ) ? (
          this.props.tripInfo.approved && this.props.tripInfo.approved.map(approved => {
            return (
              <div>
               <p>Nome : </p> <p>{approved.name}</p>
               <p>Idade :  </p> <p>{approved.age}</p>
               <p>País :  </p> <p>{approved.country}</p>
               <p>Profissão :</p> <p> {approved.profession}</p>
              </div>
            )
          })
        ) : (<h3>Nenhum aprovado</h3>)}
         
        </DetailsWrapper>	
    )
  }
}

const mapStateToProps = state => ({
  tripId: state.data.tripId,
  tripInfo: state.data.tripInfo
});

const mapDispatchToProps = dispatch => {
    return {
        goBack: () => dispatch(goBack()),
        goToLogin: () => dispatch(replace(routes.login)),
        getTripDetails: (id, token) => dispatch(getTripDetail(id, token)),
        decideCandidate: (tripId, candidateId, token) => dispatch(decideCandidate(tripId, candidateId, token)),

        getTripInfo: () => dispatch(getTripInfo())
    }
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
  ) (TripDetailsPage)