import React, {Component} from 'react';
import { connect } from "react-redux";
import {  goBack } from "connected-react-router";
import { CountryDropdown } from 'react-country-region-selector'

import { ContainerForm } from './styles';
import { getAllTrips, getTrips } from '../../actions';

const appForm = [
  {name: "name", type:"text", label:"Nome", pattern:"[A-Za-z ãéá]{3,}", title: "Mínimo 3 caracteres" },
  {name: "age", type:"number", label:"Idade", min: 18 },
  {name: "applicationText", type:"text", label:"Motivos", pattern:"[A-Za-z ãéá]{30,}"},
  {name: "profession", type:"text", label:"Profissão", pattern:"[A-Za-z ãéá]{10,}"},
]

class ApplicationFormPage extends Component {
state = {
  form: {
    country: ''
  }
}

componentDidMount() {
  this.props.getAllTrips()
}

handleSubmitForm = e => {
  e.preventDefault();
 

  this.setState({ form: {} })
  
}

handleInputChange = e => {
  const { name, value } = e.target;
  
  this.setState({ form: {...this.state.form, [name]: value} })
}

selectCountry (val) {
  this.setState ({
    form: {...this.state.form, country: val} 
  })
}

 render() {
  return (
    <ContainerForm>
        <h1>Formulário com styled-components</h1>

        <button onClick={this.props.goBack}>Voltar</button>

  <form  onSubmit={this.handleSubmitForm}>
    {appForm.map(input => {
      return (
        <div key={input.name}>
          <label htmlFor={input.name}>{input.label}</label>
          <input 
          required
          name={input.name}
          type={input.type}
          value={this.state.form[input.name] || ""}
          onChange={this.handleInputChange}
          pattern={input.pattern}
          title={input.title}
          min={input.min}
          />
        </div> 
        )
      })}
      <CountryDropdown
          value={this.state.form.country}
          onChange = {(val) => this.selectCountry(val)}
      /> <br/><br/><br/>

      <label>Evento: </label>
      <select> 
        {this.props.trips && this.props.trips.map(trip => {
          return <option>{trip.name} - {trip.planet}</option>
        })}
      </select>
     
      

      <button type="submit" onClick={() => console.log(this.props.trips)} >Enviar</button>
  </form>

  </ContainerForm>
);
 }
}

const mapStateToProps = state => ({
  trips: state.data.trips
});

const mapDispatchToProps = dispatch => ({
  getAllTrips: () => dispatch(getTrips()),
  goBack: () => dispatch(goBack())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ApplicationFormPage)
