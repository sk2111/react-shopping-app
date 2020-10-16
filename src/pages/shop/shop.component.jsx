import React from 'react';
import {connect} from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';


const ShopPage = () => {
    return (
        <div className="shop-page">
            <CollectionsOverview></CollectionsOverview>
        </div>
    );
}

export default connect(null)(ShopPage);