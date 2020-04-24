import React, {Component} from 'react';
import { connect } from "react-redux";
import { goBack, replace } from "connected-react-router";
import { routes } from '../Router/index';
import { createNewTrip } from '../../actions'

import { CreateTripWrapper } from './styles';
import Button from "@material-ui/core/Button";

const today = new Date();
const day = today.getDate()
const month = today.getMonth()
const year = today.getFullYear()
const min = `${year}/0${month}/${day}`

const formCreatetrip = [
  {
    name: "name",
    type: "text",
    label: "Nome da viagem: ",
    pattern: "[A-Za-z çÇ]{5,}",
    title: "Mínimo 5 caracteres",
  },
  {
    name: "description",
    type: "text",
    label: "Descrição da viagem: ",
    pattern: "[A-Za-z çÇ]{30,}",
    title: "Mínimo 30 caracteres",
  },
  {
    name: "date",
    type: "date",
    title: "Deve ser uma data no futuro",
    min: min,
    defaultValue: min,
    label: "Data de partida: ",
  },
  {
    name: "durationInDays",
    type: "number",
    min: 50,
    label: "Duração da viagem: ",
    title: "Deve durar no mínimo 50 dias",
  },
];

const planets = [
  "Júpiter",
  "Marte",
  "Mercúrio",
  "Netuno",
  "Plutão",
  "Saturno",
  "Terra",
  "Urano",
  "Vênus",
];

class CreateTripPage extends Component {
  state = {
    form: {
      planet: ''
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token')

    if (token === null) {
      this.props.goToLogin();
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      form: { ...this.state.form, [name]: value },
    });
  };
  handleSelectedPlanet = (e) => {
    this.setState({
      form: { ...this.state.form, planet: e.target.value },
    });
    console.log(e.target.value)
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.createNewTrip(this.state.form, localStorage.getItem("token"))
    //console.log(this.state.form)
  };

  render() {
  return (
    <CreateTripWrapper onSubmit={this.handleSubmitForm}>
    
      <Button variant="contained" color="primary" onClick={this.props.goBack}>Lista viagens</Button>
    <div>
      <h1>Criar viagem</h1>
      <br />

      <form onSubmit={this.handleFormSubmit}>
        {formCreatetrip.map((input) => {
          return (
            <div key={input.name}>
              <label htmlFor={input.name}>{input.label}</label>
              <input
                required
                name={input.name}
                type={input.type}
                min={input.min}
                defaultValue= {input.defaultValue}
                pattern={input.pattern}
                title={input.title}
                // value={this.state.form[input.name] || ""}
                onChange={this.handleInputChange}
              />
            </div>
          );
        })}
        <select required onChange={this.handleSelectedPlanet}>
          <option>
            -- Selecione o planeta --
          </option>
          {planets.map((planet) => {
            return (
              <option value={planet} key={planet}>
                {planet}
              </option>
            );
          })}
        </select>
        <Button variant="contained" type="submit">Cadastrar</Button>
      </form>

    </div>
  
    </CreateTripWrapper>
  );
 }
}

const mapDispatchToProps = dispatch => {
  return {
    goBack: () => dispatch(goBack()),
    goToLogin: () => dispatch(replace(routes.login)),
    createNewTrip:(form, token) => dispatch(createNewTrip(form, token))
  }
}

export default connect(
  null,
  mapDispatchToProps
) (CreateTripPage);
