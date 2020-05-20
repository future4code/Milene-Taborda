import axios from 'axios';
import { push } from "connected-react-router";
import {  routes } from '../containers/Router';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/milene'

export const getAllTrips = (trips) => {
    return {
        type: "GET_ALL_TRIPS",
        payload: { 
            trips
        }
    }
}

export const getTripId = (id) => {
    return {
        type: 'GET_TRIP_ID',
        payload: {
            id
        }
    }
}

export const getTripInfo = (info) => {
    return {
        type: 'GET_TRIP_INFO',
        payload: {
            info
        }
    }
}

export const getTrips = () => async (dispatch, setState) =>{
   const response = await axios.get(`${baseURL}/trips`) 

   dispatch(getAllTrips(response.data.trips))
}

export const login = (email, password) => async (dispatch, setState) => {
    const body = {
        email: email,
        password: password
    };

    try {
        const response = await axios.post(`${baseURL}/login`, body);

        localStorage.setItem("token", response.data.token);
        dispatch(push(routes.listTrips))
        
    } catch (error) {
        alert("Erro no login, tente novamente!")
        console.log(error)
    }
}

export const createNewTrip = (form, token) => async (dispatch, setState) => {
    
    try {
    const response = await axios.post(`${baseURL}/trips`, form, {
        headers: {
            auth: token
        }
    })
    
   } catch (error) {
    alert("Erro ao criar viagem, tente novamente!")
   }
}


export const getTripDetail = (id, token) => async (dispatch, setState) => {
    const response = await axios.get(
        `${baseURL}/trip/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      );
     // localStorage.setItem("ID", response.data.trip.id); FAZER ISSO!!!
      dispatch(getTripInfo(response.data.trip));
      console.log(response.data.trip);
};

export const decideCandidate = (tripId, candidateId, token) => async (dispatch) => {
	try {
		 console.log(tripId, candidateId)
		await axios.put(
			`${baseURL}/trips/${tripId}/candidates/${candidateId}/decide`,
			{ "approve": true },
			{ headers: { auth: token } }
		)
		alert('Candidato aprovado com sucesso!')
	} catch (error) {
		console.error(error.message)
		alert('Não foi possível realizar a escolha! Tente novamente mais tarde.')
	}
}

