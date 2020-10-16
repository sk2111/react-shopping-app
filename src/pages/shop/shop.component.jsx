import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import {Route} from 'react-router-dom';
import collectionPage from '../collection/collection.component';

const ShopPage = ({match}) => {
    return (
        <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
        <Route exact path={`${match.path}/:collectionId`} component={collectionPage}></Route>
        </div>
    );
}

export default ShopPage;