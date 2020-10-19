import shopActionTypes from './shop.types';
import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.utils';
export const fetchCollectionStart = () => {
    return {
        type: shopActionTypes.FETCH_COLLECTIONS_START
    }
}

export const fecthCollectionsSuccess = collectionsMap => {
    return {
        type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }
}
export const fetchCollectionFailure = errorMessage => {
    return {
        type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage
    }
}
export const fetchCollectionStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
        collectionRef.get()
            .then(
                (snapshot) => {
                    const collectionsMap = convertCollectionSnapShotToMap(snapshot);
                    dispatch(fecthCollectionsSuccess(collectionsMap));
                }
            )
            .catch((e) => { dispatch(fetchCollectionFailure(e.message)) });
    }
}

