import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
    state = {
        loading: true
    };
    unSubscribeFromSnapshot = null;

    componentDidMount() {
       const {fetchCollectionStartAsync} = this.props;
       fetchCollectionStartAsync();
    }
    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}
                    component={CollectionOverviewContainer}></Route>
                <Route exact path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}>
                </Route>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchCollectionStartAsync:()=>dispatch(fetchCollectionStartAsync())
    }
}


export default connect(null, mapDispatchToProps)(ShopPage);