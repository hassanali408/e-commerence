import { Box, Typography } from '@mui/material'
import React from 'react'
import CheckCircle from '../img/CheckCircle.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCart, settotleCartItemtoInital } from '../Redux/chatSlice';

export default function Thanks() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

   
    const handleClick = ()=>{
        navigate('/details')
      }
    
      const handlePaymentClick = () => {
        dispatch(setCart([]));
        dispatch(settotleCartItemtoInital());
        navigate('/')
      }
  return (
    <Box width={'80%'}>
        <Box mt={'40px'}>
       <img src={CheckCircle} alt="CheckCircle" />
       <Typography color={'#272727'}  fontSize={'26px'} fontWeight={'500'} mt={'15px'}>Payment Confirmed</Typography>
       <Typography color={'#56B280'}  fontSize={'14px'} fontFamily={'Helvetica'} fontWeight={'400'} >ORDER #2039</Typography>
       <Typography color={'#818181'} textAlign={'justify'} fontSize={'16px'} fontFamily={'Helvetica'} fontWeight={'400'} lineHeight={'15.6px'} mt={'20px'} > Thank you Joe for buying Candleaf. The nature is grateful to you. Now that your order is confirmed it will be ready to ship in 2 days. Please check your inbox in the future for your order updates.</Typography>
       
         <button
              style={{
                border: 'none',
                background: '#56B280',
                color: 'white',
                fontSize: '21px',
                fontFamily: 'Roboto',
                fontWeight: '500',
                padding: '5px 30px 5px 30px',
                borderRadius: '4px',
                marginTop:'30px',
              }}
              onClick={handlePaymentClick}
            >
              Back to shopping
            </button>
            <Typography fontSize={'16px'} color={'#56B280'} fontFamily={'Roboto'} fontWeight={'400'} mt={'20px'}>
              <a style={{ textDecoration: 'underline' }} onClick={handleClick}>
              Print receipt
              </a>
            </Typography>

        
      
       </Box>
    </Box>
  )
}
