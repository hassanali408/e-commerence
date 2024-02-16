
import React, { useRef } from 'react';
import NavbarCheckOut from '../CheckOutNavbar';
import CustomSeparator from '../Breadcrumbs/Breadcrumbs';
import { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import Coupen from '../Coupon/Coupon';
import CreditCardFill from '../img/CreditCardFill.png';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();
  const storedFormData = localStorage.getItem('formData');
  const [formData, setFormData] = useState(storedFormData ? JSON.parse(storedFormData) : {});
  const [editingField, setEditingField] = useState(null);
  const [showOutlet, setShowOutlet] = useState(false);
  const [CardData, setCardData] = useState({
    cardNumber: '',
    holderName: '',
    cardExpiration: '',
    cvv: '',
  });

  const sameShippingAddress = useRef();

  const handleEditField = (field) => {
    setEditingField(field);
  };

  const handleSaveField = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
    setEditingField(null);
  };

  const handleClick = () => {
    navigate('/details/shipping');
  };

  const handlePaymentClick = () => {
 
    const requiredFields = ['cardNumber', 'holderName', 'cardExpiration', 'cvv', ];
    const missingFields = requiredFields.filter(field => !CardData[field]);
  
if(sameShippingAddress.current.checked){
    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
    } else {
      setShowOutlet(true);
      
      navigate('/details/shipping/payment/thanks')
      }
    }
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\D/g, ''); 
      formattedValue = formattedValue.match(/\d{4} *\d{4} *\d{4} *\d{4}/g)
    }

  
    if (name === 'cardExpiration') {
      formattedValue = value.replace(/\D/g, ''); 
      formattedValue = formattedValue.replace(/(\d{2})(\d{0,2})/, (_, month, rest) => {
        const limitedMonth = Math.min(parseInt(month, 10), 12).toString().padStart(2, '0');
        return `${limitedMonth}/${rest}`;
      });
    }
    


    if (name === 'holderName') {
      formattedValue = value.replace(/[^a-zA-Z\s]/g, '');
    }

 
    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '');
      formattedValue = formattedValue.match(/\d{4}/g)
    }

    setCardData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  return (
 
      <>
        {showOutlet ? (
          <Outlet />
        ) : (
          <Box mt={'40px'} display={'flex'} flexDirection={'column'} width={'80%'}>
          <Box p={'10px'} border={'1px solid #56B28033'} borderRadius={'7px'}>
            <Box display={'flex'} p={'12px'}>
              <Typography color={'#818181'} fontFamily={'Helvetica'} fontSize={'14px'} fontWeight={'400'}  >
                Contact
              </Typography>
              <input
                type='text'
                value={formData.email || ''}
                style={{
                  border: 'none',
                  marginLeft: '10px',
                  width: '80%',
                  outline: 'none',
                  background: 'none'

                }}
                disabled={editingField !== 'email'}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <button
                style={{
                  color: '#56B280',
                  fontSize: '14px',
                  fontFamily: 'Helvetica',
                  fontWeight: '400',
                  border: 'none',
                  background: 'none',

                }}
                onClick={() => handleEditField('email')}
              >
                Edit
              </button>
              {editingField === 'email' && (
                <button
                  style={{
                    color: '#56B280',
                    fontSize: '14px',
                    fontFamily: 'Helvetica',
                    fontWeight: '400',
                    border: 'none',
                    background: 'none',
                  }}
                  onClick={() => handleSaveField('email', formData.email)}
                >
                  Save
                </button>
              )}
            </Box>

            <Divider sx={{ background: '#56B280' }} />

            <Box display={'flex'} p={'10px'}>
              <Typography color={'#818181'} fontFamily={'Helvetica'} fontSize={'14px'} fontWeight={'400'}  >
                ShipTo
              </Typography>
              <input
                type='text'
                value={formData.addressAndNumber || ''}
                style={{
                  border: 'none',
                  marginLeft: '15px',
                  width: '80%',
                  outline: 'none',
                  background: 'none',
                  
                }}
                disabled={editingField !== 'addressAndNumber'}
                onChange={(e) => setFormData({ ...formData, addressAndNumber: e.target.value })}
              />
              <button
                style={{
                  color: '#56B280',
                  fontSize: '14px',
                  fontFamily: 'Helvetica',
                  fontWeight: '400',
                  border: 'none',
                  background: 'none',
                }}
                onClick={() => handleEditField('addressAndNumber')}
              >
                Edit
              </button>
              {editingField === 'addressAndNumber' && (
                <button
                  style={{
                    color: '#56B280',
                    fontSize: '14px',
                    fontFamily: 'Helvetica',
                    fontWeight: '400',
                    border: 'none',
                    background: 'none',
                  }}
                  onClick={() => handleSaveField('addressAndNumber', formData.addressAndNumber)}
                >
                  Save
                </button>
              )}
            </Box>

            <Divider sx={{ background: '#56B280' }} />

            <Box display={'flex'} p={'10px'}>
              <Typography color={'#818181'} fontFamily={'Helvetica'} fontSize={'14px'} fontWeight={'400'}  >
                Method
              </Typography>
              <input
                type='text'
                value='Standard Shipping - FREE'
                style={{
                  border: 'none',
                  marginLeft: '11px',
                  width: '80%',
                  outline: 'none',
                  background: 'none'
                }}
                disabled={editingField !== 'Standard Shipping - FREE'}
              />
              <button
                style={{
                  color: '#56B280',
                  fontSize: '14px',
                  fontFamily: 'Helvetica',
                  fontWeight: '400',
                  border: 'none',
                  background: 'none',

                }}
                onClick={() => handleEditField('Standard Shipping - FREE')}
              >
                Edit
              </button>
              {editingField === 'Standard Shipping - FREE' && (
                <button
                  style={{
                    color: '#56B280',
                    fontSize: '14px',
                    fontFamily: 'Helvetica',
                    fontWeight: '400',
                    border: 'none',
                    background: 'none',
                  }}
                  onClick={() => handleSaveField('shipping', 'Standard Shipping - FREE')}
                >
                  Save
                </button>
              )}
            </Box>

          </Box>

          <Box mt={'20px'}>
            <Typography fontSize={'18px'} color={'#272727'} fontFamily={'Roboto'} fontWeight={'500'} textAlign={'left'}>
              Payment method
            </Typography>
            <Box mt={'10px'} border={'1px #E5E5E5 solid'} borderRadius={'7px'}>
              <Box display={'flex'} alignItems={'center'} sx={{ background: 'linear-gradient(90deg, rgba(86, 178, 128, 0.20) 0%, rgba(86, 178, 128, 0.40) 100%)' }}>
                <img src={CreditCardFill} style={{ padding: '10px', marginLeft: '10px' }} />
                <Typography fontSize={'15px'} color={'#56B280'} fontFamily={'Roboto'} fontWeight={'700'} p={'10px'} textAlign={'left'}>Credit Card</Typography>
              </Box>
              <Box m={'20px 0px'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <input
                  type='number'
                  placeholder='Card Number'
                  style={{ padding: '10px', width: '80%', boxSizing: 'border-box' }}
                  name='cardNumber'
                  value={CardData.cardNumber}
                  onChange={handleInputChange}
                  maxLength="19"
                />

                <input
                  type='text'
                  placeholder='Holder Name'
                  style={{ padding: '10px', width: '80%', boxSizing: 'border-box', marginTop: '10px' }}
                  name='holderName'
                  value={CardData.holderName}
                  onChange={handleInputChange}
                />

                <Box mt={'10px'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} width={'80%'} >
                  <input
                    type='text'
                    placeholder='Expiration (MM/YY)'
                    style={{ padding: '10px', width: '48%', boxSizing: 'border-box' }}
                    name='cardExpiration'
                    value={CardData.cardExpiration}
                    onChange={handleInputChange}
                    maxLength="5"
                  />

                  <input
                    type='number'
                    placeholder='CVV'
                    style={{ padding: '10px', width: '48%', boxSizing: 'border-box' }}
                    name='cvv'
                    value={CardData.cvv}
                    onChange={handleInputChange}
                    maxLength="4"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt={'20px'}>
            <Typography fontSize={'18px'} color={'#272727'} fontFamily={'Roboto'} fontWeight={'500'} textAlign={'left'}>
            Billing address
            </Typography>
            
            <Box display={'flex'} mt={'16px'} border={'1px solid #E5E5E5'} borderRadius={'7px'} flexDirection={'column'}>
             <Box display={'flex'} padding={'16px'}>
             <input type='radio' name='checkaddress' ref={sameShippingAddress} style={{ marginRight: '10px' }} />

              <Typography fontSize={'14px'} color={'#272727'} fontFamily={'Helvetica'} fontWeight={'400'} width={'90%'} align='left'>
              Same as the shipping address
              </Typography>
              </Box>
              <Divider sx={{ background: '#56B280' }} />
              <Box display={'flex'}  padding={'16px'}>
                <input type='radio' name='checkaddress' style={{ marginRight: '10px' }} />

                <Typography fontSize={'14px'} color={'#272727'} fontFamily={'Helvetica'} fontWeight={'400'} width={'90%'} align='left'>
                Use a different address for billing
                </Typography>
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={'5px'} mt={'50px'}>
            <Typography fontSize={'16px'} color={'#56B280'} fontFamily={'Roboto'} fontWeight={'400'}>
              <a style={{ textDecoration: 'underline' }} onClick={handleClick}>
              Back to shipping
              </a>
            </Typography>

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
              }}
              onClick={handlePaymentClick}
            >
              Pay now
            </button>
          </Box>
            </Box>
        </Box>
        )}
   </>
  );
}


      

