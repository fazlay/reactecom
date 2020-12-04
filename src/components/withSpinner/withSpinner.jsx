import React from 'react';


import { SpinnerContainer, SpinnerOverlay } from './withSpinner.style.jsx';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
                <WrappedComponent {...otherProps} />
            );
    };
    return Spinner;
};

export default WithSpinner;