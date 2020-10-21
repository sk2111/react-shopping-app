import { takeLatest, put, all, call } from 'redux-saga/effects';

import { userActionTypes } from './user.types';
import { auth, googleProvider, createUserProfileDocument, getCurrentUSer } from '../../firebase/firebase.utils';
import { googleSignInSuccess, googleSignInFailure, emailSignInFailure, emailSignInSuccess, signOutSuccess, signOutFailure } from './user.actions';

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapShot = yield userRef.get();
        yield put(googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
    }
    catch (error) {
        yield put(googleSignInFailure(error));
    }
}
export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}


export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapShot = yield userRef.get();
        yield put(emailSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
    }
    catch (error) {
        put(emailSignInFailure(error.message));
    }
}
export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}
export function* isUserAutheticated(){
    try{
        const userAuth = yield getCurrentUSer();
        if(!userAuth) return;
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapShot = yield userRef.get();
        yield put(emailSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
    }
    catch(error){
        yield put(emailSignInFailure());
    }
}
export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAutheticated)
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    }
    catch(e){
        yield signOutFailure(e);
    }
}
export function* onSignOurStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START,signOut)
}
export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOurStart)]);
}