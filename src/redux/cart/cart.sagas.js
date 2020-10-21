import {takeLatest,put,all,call} from 'redux-saga/effects';
import {clearCart} from './cart.actions';
import { userActionTypes } from '../user/user.types';


export function* clearCartValueOnSignOut(){
    yield put(clearCart());
}
export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,clearCartValueOnSignOut);
}


export function* cartSagas(){
    yield all([
        call(onSignOutSuccess)
    ])
}
