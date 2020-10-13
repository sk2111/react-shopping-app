import React from 'react';
import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({id,name,imageUrl,price})=>{
    return(
        <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton inverted>Add to Cart</CustomButton>
        </div>
    )
};

export default CollectionItem;