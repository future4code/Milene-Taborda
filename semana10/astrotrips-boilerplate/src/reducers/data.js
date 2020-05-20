const initialState = {
    trips: [],
    tripId: "",
    tripInfo: []
}

const data = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ALL_TRIPS':
            return {...state, trips: action.payload.trips}
        case 'GET_TRIP_ID':
            return {...state, tripId: action.payload.id}
        case 'GET_TRIP_INFO': {
            return {...state, tripInfo: action.payload.info}
        }
        default:
            return state
    }
}

export default data;