import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const collectionPage = ({collection})=>{
    console.log(collection);
    return(
        <div className="collection">
            <h2>collectionPage</h2>
        </div>
    )
}
const mapStateToProps = (state,ownProps)=>{
    return {
        collection:selectCollection(ownProps.match.params.collectionId)(state)
    }   
}
export default connect(mapStateToProps)(collectionPage);
