import React, {Component} from 'react';
import { connect } from "react-redux";
import { CountryDropdown } from 'react-country-region-selector';
import Button from "@material-ui/core/Button";

import { ContainerForm } from './styles';
import { getAllTrips, getTrips } from '../../actions';

const formCandidate = [
  {name: "name", type:"text", label:"Nome: ", pattern:"[A-Za-z ãéá]{3,}", title: "Mínimo 3 caracteres" },
  {name: "age", type:"number", label:"Idade: ", min: 18 },
  {name: "applicationText", type:"text", label:"Motivo: ", pattern:"[A-Za-z ãéá]{30,}"},
  {name: "profession", type:"text", label:"Profissão: ", pattern:"[A-Za-z ãéá]{10,}"},
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
 
  this.setState({ form: {} });
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
        <h1>Formulário de inscrição</h1>

<section>
  <form  onSubmit={this.handleSubmitForm}>
    {formCandidate.map(input => {
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

      <label>Selecione o país: </label>
      <CountryDropdown
          value={this.state.form.country}
          onChange = {(val) => this.selectCountry(val)}
          /> <br/><br/><br/>

       <label>Selecione a viagem: </label>
      <select> 
        {this.props.trips && this.props.trips.map(trip => {
          return <option>{trip.name} - {trip.planet}</option>
        })}
      </select>

      <Button variant="contained" color="primary" type="submit" onClick={() => console.log(this.props.trips)} >Enviar</Button>
  </form>

</section>
  </ContainerForm>
);
 }
}

const mapStateToProps = state => ({
  trips: state.data.trips
});

const mapDispatchToProps = dispatch => ({
  getAllTrips: () => dispatch(getTrips()),
  
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ApplicationFormPage)
