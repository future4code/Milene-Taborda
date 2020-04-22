import axios from 'axios'

export const getAllTrips = (trips) => {
    return {
        type: "GET_ALL_TRIPS",
        payload: { 
            trips
        }
    }
}

export const getTrips = () => async (dispatch, setState) =>{
   const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/milene/trips') 

   console.log(response.data.trips)
   dispatch(getAllTrips(response.data.trips))
}

export const getTripDetail = () => async (dispatch, setState) => {

}