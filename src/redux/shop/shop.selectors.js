import {createSelector} from 'reselect';

const selectShop = (state) => {
    return state.shop;
};

export const selectCollections = createSelector([selectShop],(shop)=>{
    return shop.collections
}
);
export const selectCollectionsForPreview = createSelector([selectCollections],(collections)=>{
    return Object.keys(collections).map(key => collections[key])
});

export const selectCollection = (collectionUrlParam)=>{
    return createSelector(
        [selectCollections],
        (colletions) => colletions[collectionUrlParam]
    )
}