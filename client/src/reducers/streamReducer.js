import { 
    CREATE_STREAM, 
    UPDATE_STREAM, 
    SHOW_STREAM, 
    GET_STREAMS, 
    DELETE_STREAM 
} from '../actions/types';
import _ from 'lodash';

const streamReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_STREAM :
            return {...state, [action.payload.id] : action.payload}
        case UPDATE_STREAM :
            return {...state, [action.payload.id] : action.payload}
        case SHOW_STREAM :
            return {...state, [action.payload.id] : action.payload}
        case GET_STREAMS :
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case DELETE_STREAM :
            return _.omit(state, action.payload)
        default :
            return state
    }
}

export default streamReducer;

