import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM, 
    UPDATE_STREAM, 
    SHOW_STREAM, 
    GET_STREAMS, 
    DELETE_STREAM 
} from "./types";
import streams from "../api/streams";
import history from "../history";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: {
            userId: userId
        }

    }
}


export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStreams = (formValues) => {
    return async(dispatch, getState) => {
        const {userId} = getState().auth;
        const res = await streams.post('/streams', {...formValues, userId});
        dispatch({
            type: CREATE_STREAM,
            payload: res.data
        })
        history.push('/');
    }
}

export const getStreams = () => {
    return async(dispatch) => {
        const res = await streams.get('/streams');
        dispatch({
            type: GET_STREAMS,
            payload: res.data
        })
    }
}
export const showStream = (streamId) => {
    return async(dispatch) => {
            const res = await streams.get(`/streams/${streamId}`);
            if(!res.data){
                return history.push('/');
            } 
            dispatch({
                    type: SHOW_STREAM,
                    payload: res.data
            })
    }
}
export const deleteStream = (streamId) => {
    return async(dispatch) => {
        await streams.delete(`/streams/${streamId}`);
        dispatch({
            type: DELETE_STREAM,
            payload: streamId
        })
        history.push('/');
    }
}

export const updateStream = (streamId, formValues) => {
    return async(dispatch) => {
        const res = await streams.patch(`/streams/${streamId}`, formValues);
        dispatch({
            type: UPDATE_STREAM,
            payload: res.data
        })
        history.push('/');
    }
}

