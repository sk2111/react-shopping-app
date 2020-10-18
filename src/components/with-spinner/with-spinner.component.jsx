import React from 'react';
import './with-spinner.styles.scss';
const WithSpinner = WrappedComponent => ({isLoading,...otherProps})=>{
    console.log("HOC rendering pahse",isLoading);
    return isLoading ? (
        <div className="loading-spinner-outer-con">
            <div className="loading-spinner-inner-con"></div>
        </div>
    ):(
        <WrappedComponent {...otherProps}></WrappedComponent>
    )
}

export default WithSpinner;