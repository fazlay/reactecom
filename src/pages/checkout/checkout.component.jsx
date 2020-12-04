import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CartItem from '../../components/cart-item/cart-item.component';
import { selectCartItems, slectCartTotal } from '../../redux/cart/cart.selector'

import CheckoutItem from '../../components/chckout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import './checkout.style.scss'


const CheckoutPage = ({ cartItems, total }) => (

    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>

            <div className='header-block'>
                <span>Description</span>

            </div>

            <div className='header-block'>
                <span>Quantity</span>
            </div>

            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>

        </div>
        {cartItems.map(cartItem =>
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )}

        <div className='total'>TOTAL: ${total}</div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({

    cartItems: selectCartItems,
    total: slectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);