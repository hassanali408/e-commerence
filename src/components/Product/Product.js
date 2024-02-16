import React, { useState } from 'react';
import './product.css';
import Footer from '../Footer/Footer';
import { Box, MenuItem, Select, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { decrementQuantity, incrementQuantity, setCart, setSelectedOption, settotleCartItem } from '../Redux/chatSlice';

export default function Product() {
    const productData = useSelector((state) => state.counter.productData);
    const cart = useSelector((state) => state.counter.ItemInCart)
    const dispatch = useDispatch();
    const quantity = useSelector((state) => state.counter.quantity)
    const selectedOption = useSelector((state) => state.counter.selectedOption)


    const handleRadioChange = (event) => {
        dispatch(setSelectedOption(event.target.value));
    };

    const handleIncrease = () => {
        dispatch(incrementQuantity());
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            dispatch(decrementQuantity());
        }
    };


    const handleClick = (product) => {
        const existingProduct = cart.find((item) => item.title === product.title);
        if (selectedOption) {
            if (existingProduct) {
                const updatedCart = cart.map((item) =>
                    item.title === product.title ? { ...item, inventory: quantity } : item
                );
                dispatch(setCart(updatedCart));
            } else {
                const updatedCart = [...cart, { ...product, inventory: quantity }];
                dispatch(setCart(updatedCart));
                dispatch(settotleCartItem());
            }
        } else {
            alert('Select options to move forward')
        }
    };

    return (
        <Box>
            <Box className='d-flex justify-content-center mb-5'>
                <Box className='productPage'>

                    {productData.map((items) => (
                        <>
                            <Box key={items.id} className='imageStyle'>
                                <img src={items.image} alt={items.title} />
                                <Typography className='description'>{items.description}</Typography>
                                <br />
                                <Typography className='shippingText'>🚚 FREE SHIPPING</Typography>
                            </Box>



                            <Box className='ItemsDetail'>
                                <Typography className='itemTitle'>{items.title}</Typography>
                                <Typography className='itemPrice'>${items.price}</Typography>

                                <Box className='quantityBox'>
                                    Quantity
                                    <span>
                                        <button onClick={handleIncrease}>+</button>
                                        <Typography className='quantitystyle' p={'2px'}>{quantity}</Typography>
                                        <button onClick={handleDecrease}>-</button>
                                    </span>
                                </Box>

                                <Box className='subscriptionBox'>
                                    <Box className='radioButtons'>
                                        <Box>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="option1"
                                                    name='option'
                                                    checked={selectedOption === 'option1'}
                                                    onChange={handleRadioChange}
                                                />
                                                One time purchase
                                            </label>
                                        </Box>
                                        <Box mt={'8px'} className='subscribeOption'>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="option2"
                                                    name='option'
                                                    checked={selectedOption === 'option2'}
                                                    onChange={handleRadioChange}
                                                />
                                                Subscribe and delivery every
                                                <Select style={{ width: '26%', height: '14px', marginLeft: '10px' }}>
                                                    <MenuItem value="option1">1 week</MenuItem>
                                                    <MenuItem value="option2">2 weeks</MenuItem>
                                                    <MenuItem value="option3">3 weeks</MenuItem>
                                                    <MenuItem value="option4">4 weeks</MenuItem>
                                                </Select>
                                            </label>
                                            <Typography className='subscribeDiscount' >
                                                Subscribe now and get the 10% of discount on every recurring order. The discount will be applied at checkout.
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <button className='addToCartBtn' onClick={() => handleClick(items)}>
                                        <ShoppingCartOutlinedIcon />
                                        + Add to cart
                                    </button>
                                </Box>

                                <Box mt={'180px'} display={'flex'}
                                    border={'0.5px solid silver'} borderRadius={'5px'}
                                    flexDirection={'column'} padding={'12px'} width={"100%"} textAlign={'left'}>
                                    <Typography color={'#849A8E'} fontSize={"16px"}><b style={{ color: '#1D252C' }}>Wax:</b> Top grade Soy wax that delivers a smoke less,  consistent burn</Typography>
                                    <Typography color={'#849A8E'} fontSize={"16px"}><b style={{ color: '#1D252C' }}>Fragrance:</b> Premium quality ingredients with natural essential oils </Typography>
                                    <Typography color={'#849A8E'} fontSize={"16px"}><b style={{ color: '#1D252C' }}>Burning Time:</b> 70-75 hours <b style={{ color: '#1D252C' }}>Dimension:</b> 10cm x 5cm <b style={{ color: '#1D252C' }}>Weight:</b> 400g </Typography>
                                </Box>
                            </Box>
                        </>
                    ))}
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}
