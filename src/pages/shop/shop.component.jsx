import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { Route } from 'react-router-dom';
import collectionPage from '../collection/collection.component';

import { connect } from 'react-redux';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { selectCollectionIsFetching,selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {createStructuredSelector} from 'reselect';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(collectionPage);

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
        const { match ,isCollectionFetching,isCollectionLoaded} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}></Route>
                <Route exact path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}>
                </Route>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching:selectCollectionIsFetching,
    isCollectionLoaded:selectIsCollectionsLoaded
});

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchCollectionStartAsync:()=>dispatch(fetchCollectionStartAsync())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);