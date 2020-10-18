import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { Route } from 'react-router-dom';
import collectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(collectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };
    unSubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async (snapshot) => {
            const collectionsMap = convertCollectionSnapShotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
    }
    render() {
        const { match } = this.props;
        const { loading } = this.state;
        console.log("State modifer",loading);
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}></Route>
                <Route exact path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}>
                </Route>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollections: (collections) => dispatch(updateCollections(collections))
    }
}
export default connect(null, mapDispatchToProps)(ShopPage);