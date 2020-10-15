
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exisitingCartItem = cartItems.find((carItem)=>carItem.id === cartItemToAdd.id);
    if(exisitingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem,quantity:cartItem.quantity + 1} : cartItem
        )
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const removeItemFromCart = (cartItems,cartItemToRemove)=>{
    const exisitingCartItem = cartItems.find((carItem)=>carItem.id === cartItemToRemove.id);
    if(exisitingCartItem.quantity === 1)
    {
        return cartItems.filter((item)=>item.id!== cartItemToRemove.id)
    }
    return cartItems.map((item)=>{
        if(item.id === cartItemToRemove.id)
        {
            return {...item,quantity:item.quantity -1}
        }
        return item;
    });
}