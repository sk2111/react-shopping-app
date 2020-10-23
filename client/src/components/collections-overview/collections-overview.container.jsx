import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import { selectCollectionIsFetching } from '../../redux/shop/shop.selectors';
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading:selectCollectionIsFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;