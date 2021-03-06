import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect"

import  CheckoutItem from "../../components/checkout-item/checkout-item.component"

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component"
import "./checkout.styles.scss"

export const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
           <div className="checkout-header">
               <div className="header-block">
                   <span>Product</span>
               </div>
               <div className="header-block">
                   <span>description</span>
               </div>
               <div className="header-block">
                   <span>quantity</span>
               </div>
               <div className="header-block">
                   <span>remove</span>
               </div>
           </div>
           {
               cartItems.map((cartItem)=> <CheckoutItem key={cartItem.id} cartItem={cartItem}/> )
           }

           {
               <div className="total">
                    <span>TOTAL: ${total}</span>
               </div>
            
           }
           <StripeCheckoutButton price={total}/>
           <span style={{color:"red", fontSize:"30px"}} >Zur Testzahlung nutze die Kartennummer 4242424242424242 <br/>
                CVC: 123 <br/>
                Datum: beliebiges Datum in der Zukunft
           </span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)