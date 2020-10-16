import React from 'react';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {createStructuredSelector} from 'reselect';

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collection-overview">
            {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                        )
                    })
            }
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(CollectionOverview);