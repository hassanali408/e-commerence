import { useEffect, useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import NavbarCheckOut from '../CheckOutNavbar';
import CustomSeparator from '../Breadcrumbs/Breadcrumbs';
import Coupon from '../Coupon/Coupon';
import { useNavigate } from 'react-router-dom';

export default function Shipping() {
  const storedFormData = localStorage.getItem('formData');
  const [formData, setFormData] = useState(storedFormData ? JSON.parse(storedFormData) : {});
  const [editingField, setEditingField] = useState(null);
  const navigate = useNavigate();

  const handleEditField = (field) => {
    setEditingField(field);
  };

  const handleSaveField = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
    setEditingField(null);
  };

  const handleClick = ()=>{
    navigate('/details')
  }

  const handlePaymentClick = () => {
    setFormData({ ...formData, shipping: 'Standard Shipping' })
    
    navigate('/details/shipping/payment')
    
  }

  return (


        <Box mt={'40px'} display={'flex'} flexDirection={'column'} width={'80%'}>
          <Box p={'20px'} border={'1px solid #56B28033'} borderRadius={'7px'}>
            <Box display={'flex'} p={'10px'}>
              <Typography color={'#818181'} fontFamily={'Helvetica'} fontSize={'14px'} fontWeight={'400'} width={'50px'}>
                Contact
              </Typography>
              <input
                type='text'
                value={formData.email || ''}
                style={{
                    border:'none',
                  marginLeft: '10px',
                  width: '80%',
                  outline: 'none',
                  background:'none'
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
              <Typography color={'#818181'} fontFamily={'Helvetica'} fontSize={'14px'} fontWeight={'400'} width={'50px'}>
                Ship to
              </Typography>
              <input
                type='text'
                value={formData.addressAndNumber || ''}
                style={{
                    border:'none',
                  marginLeft: '10px',
                  width: '80%',
                  outline: 'none',
                  background:'none'
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
          </Box>

          <Box mt={'40px'}>
            <Typography fontSize={'20px'} color={'#272727'} fontFamily={'Roboto'} fontWeight={'500'} textAlign={'left'}>
              Shipping Address
            </Typography>

            <Box display={'flex'} mt={'16px'} p={'16px'} border={'1px solid #56B28033'} borderRadius={'7px'}>
              <input type='radio' checked style={{ marginRight: '10px' }} />

              <Typography fontSize={'14px'} color={'#272727'} fontFamily={'Helvetica'} fontWeight={'400'} width={'90%'} align='left'>
                Standard Shipping
              </Typography>
              <Typography fontSize={'14px'} color={'#272727'} fontFamily={'Roboto'} fontWeight={'700'} align='right'>
                Free
              </Typography>
            </Box>
          </Box>


          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={'5px'} mt={'50px'}>
            <Typography fontSize={'16px'} color={'#56B280'} fontFamily={'Roboto'} fontWeight={'400'}>
              <a style={{ textDecoration: 'underline' }} onClick={handleClick}>
                Back to details
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
              Go to payment
            </button>
          </Box>
        </Box>
        
    
  );
}
