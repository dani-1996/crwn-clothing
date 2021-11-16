import React from 'react'
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100
    const publishableKey= "pk_test_51JwMeNBsx9Xww7ccWexuQHVFwcPs7OJnUUukxabhaawgH6xqVgQkrJAYn3dp5rlVuzeyxZUpYwFbVuIcSf6FxDfB00K7jt1NKV"
    const onToken = token => {
        console.log(token)
        alert("Payment successfully")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Best Clothes in Town GmbH" 
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
