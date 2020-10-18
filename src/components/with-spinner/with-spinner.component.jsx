import React from 'react';

const WithSpinner = WrappedComponent => ({isLoading,...otherProps})=>{
    console.log("HOC rendering pahse",isLoading);
    return isLoading ? (
        <div>Loading</div>
    ):(
        <WrappedComponent {...otherProps}></WrappedComponent>
    )
}

export default WithSpinner;