import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import {Route} from 'react-router-dom';
import collectionPage from '../collection/collection.component';
import {firestore,convertCollectionSnapShotToMap} from '../../firebase/firebase.utils';

import {connect} from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component{
    
    unSubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async(snapshot)=>{
            const collectionsMap = convertCollectionSnapShotToMap(snapshot);
            updateCollections(collectionsMap);
        });
    }
    render(){
        const {match} = this.props;
        return (
            <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
            <Route exact path={`${match.path}/:collectionId`} component={collectionPage}></Route>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        updateCollections:(collections)=>dispatch(updateCollections(collections))
    }
}
export default connect(null,mapDispatchToProps)(ShopPage);