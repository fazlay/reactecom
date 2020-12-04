import React from 'react';
import CustomButton from '../Custom-Button/custom-button.component';
import CustomButtion from '../Custom-Button/custom-button.component'

import './collection-item.styles.scss'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to Cart </CustomButton>
        </div>


    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);


