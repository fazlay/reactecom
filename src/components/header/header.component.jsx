import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../asset/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.componetnt'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HeaderContainer, LogoContainer, OptionContainer, OptionDiv, OptionLink } from './header.styles';
import  {signOutStart} from '../../redux/user/user.action'



const Header = ({ currentUser, hidden , signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionContainer>
        {
            hidden ? null :
                <CartDropDown />}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({

    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps =dispatch => ({
    signOutStart: ()=>dispatch(signOutStart())
})



export default connect(mapStateToProps, 
    mapDispatchToProps
    )(Header);