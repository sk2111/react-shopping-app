import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const publishableKey = "pk_test_51Hd6o1BnTFaGDu5UFSISvMwGr3Ehbx6oH60u57NbaH1gujvIPtHxHNCqNfUHbwyPpCSV3ybcD3XnhygbnShJBPkn00DogCr8Yw";
    const onToken = token => {
        console.log(token);
        alert('Payement successful');
    }
    return(
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description = {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;