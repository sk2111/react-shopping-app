import {userActionTypes} from './user.types';
const INITIAL_STATE = {
    currentUser: null,
    error:null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
        case userActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser:action.payload,
                error:null
            }
        case userActionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser:null,
                error:null
            }
        case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
        case userActionTypes.EMAIL_SIGN_IN_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
            return{
                ...state,
                error:action.payload
            } 
        default:
            return state;
    }
}