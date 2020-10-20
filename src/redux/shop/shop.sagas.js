import {takeEvery,call,put} from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import {firestore,convertCollectionSnapShotToMap} from '../../firebase/firebase.utils';
import {fecthCollectionsSuccess,fetchCollectionFailure} from './shop.actions';

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapShotToMap,snapshot);
        yield put(fecthCollectionsSuccess(collectionsMap));
    }
    catch(error){
        yield put(fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionsStart(){
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync)
}