import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const publishableKey = "pk_test_51Hd6o1BnTFaGDu5UFSISvMwGr3Ehbx6oH60u57NbaH1gujvIPtHxHNCqNfUHbwyPpCSV3ybcD3XnhygbnShJBPkn00DogCr8Yw";
    const onToken = token => {
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        })
        .then((res)=>{
            alert("payment successful");
        })
        .catch(e=>{
            console.log('Payment error',e)
            alert("Please use the provided credit card for payment");
        });

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