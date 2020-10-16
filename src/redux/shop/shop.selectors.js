import {createSelector} from 'reselect';

const COLLECTION_ID_MAP ={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
};

const selectShop = (state) => {
    return state.shop;
};

export const selectCollections = createSelector([selectShop],(shop)=>{
    return shop.collections
}
);

export const selectCollection = (collectionUrlParam)=>{
    return createSelector(
        [selectCollections],
        (colletions) => colletions.find((collection)=>collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )
}