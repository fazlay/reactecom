
import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg'
import './cart-icon.style.scss';

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'


const CartIcon = ({ toggleCartHidden, itemCount }) => (

    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount} </span>
    </div>

)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (CartIcon);