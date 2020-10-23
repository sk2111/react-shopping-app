import React from 'react';
import './with-spinner.styles.scss';
const WithSpinner = WrappedComponent => ({isLoading,...otherProps})=>{
    return isLoading ? (
        <div className="loading-spinner-outer-con">
            <div className="loading-spinner-inner-con"></div>
        </div>
    ):(
        <WrappedComponent {...otherProps}></WrappedComponent>
    )
}

export default WithSpinner;