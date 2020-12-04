import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price *100;
    const publishableKey='';
    

    const onToken =token => {
     console.log(token);
     alert('Payment Successful');
    }


    return(
        <StripeCheckout
        label='Pay Now'
        name= 'CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image=''
        description={`Yoyr Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );

};

export default StripeCheckoutButton;